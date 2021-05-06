class IndexView {
    constructor() {
        // Si aucune action sur le site => affiche le contenu au chargement:
        window.addEventListener("load", (e) => {
            this.onRouteChange(e);
        })
        // Dès qu'une action se produit => hash change et le contenu se charge:
        window.addEventListener("hashchange", (e) => {
            this.onRouteChange(e);
        })
        this.slot = document.querySelector("#slot");
    }

    onRouteChange(e) {
        var hashLocation = location.hash.substring(1);
        this.loadContent(hashLocation);
    }

    loadContent(uri) {
        var contentUri;
        var contentScript;

        if (uri !== "profil" && uri !== "parcours" && uri !== "contact") {
            contentUri = '/views/profil.html';
            contentScript = '/js/profil.js';
        } else {
            contentUri = `/views/${uri}.html`;
            contentScript = `/js/${uri}.js`;
        }
        fetch(contentUri)
            .then((res) => {
                return res.text();
            }).then((content) => {
                // on convertit le texte en html avec l'objet parser
                const parser = new DOMParser();
                const pageContent = parser.parseFromString(content, "text/html");
                this.slot.innerHTML = pageContent.body.innerHTML;
            })
        fetch(contentScript)
            .then((res) => {
                return res.text();
            }).then((content) => {
                var htmlScript = document.createElement("script");
                htmlScript.innerHTML = content;
                this.slot.appendChild(htmlScript);

                // footer back to top button
                var pageName = location.hash;
                var backToTop = document.querySelector('footer a');

                backToTop.setAttribute("href", pageName);
            })
    }
}

new IndexView();

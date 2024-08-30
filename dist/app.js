(function () {
    'use strict';

    class AbstractView {
        constructor() {
            this.app = document.getElementById("root");
        }

        setTitle(title) {
            document.title = title;
        }
        render() {
            return;
        }
        destroy() {
            return;
        }
    }

    class MainView extends AbstractView {
        constructor() {
            super();
            this.setTitle("Поиск книг");
        }

        render() {
            const main = document.createElement("div");
            main.innerHTML = "Tecт!!!";
            this.app.innerHTML = "";
            this.app.append(main);
        }
    }

    class Find extends AbstractView {
        constructor() {
            super();
            this.setTitle("Find");
        }

        render() {
            const main = document.createElement("div");
            main.innerHTML = "Find";
            this.app.innerHTML = "";
            this.app.append(main);
        }
    }

    class NotFound extends AbstractView {
        constructor() {
            super();
            this.setTitle("404");
        }

        render() {
            const main = document.createElement("div");
            main.innerHTML = "Erorr 404";
            this.app.innerHTML = "";
            this.app.append(main);
        }
    }

    class App {
        routes = [
            { path: "", view: MainView },
            { path: "#find", view: Find },
        ];
        constructor() {
            window.addEventListener("hashchange", this.route.bind(this));
            this.route();
        }
        route() {
            if (this.currentView) {
                this.currentView.destroy();
            }
            const routeObj = this.routes.find(
                (route) => route.path == location.hash
            );
            const view = routeObj ? routeObj.view : NotFound; // поставить страницу 404
            this.currentView = new view();
            this.currentView.render();
        }

        // route(){
        // if (this.currentView) {
        //         this.currentView.destroy();
        //     }
        //     const view = this.route((r)=>r.path == location.hash).view;
        //     this.currentView = new view();
        //     this.currentView.render();
        // }
        // route() {
        //     if (this.currentView) {
        //         this.currentView.destroy();
        //     }
        //     const routeObj = this.routes.find(
        //         (route) => route.path == location.hash
        //     );
        //     // console.log('view: ', view);
        //     if (!routeObj) {
        //         this.currentView = new NotFound();
        //     } else {
        //         this.currentView = new routeObj.view();
        //     }
        //     this.currentView.render();
        // }
    }

    new App();
    // роутинг загрузка вьюшек

})();

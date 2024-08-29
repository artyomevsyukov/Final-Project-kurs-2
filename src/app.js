import { MainView } from "./views/main";

class App {
    routes = [{ path: "", view: MainView }];
    constructor() {
        window.addEventListener("hashchange", this.route.bind(this));
        this.route();
    }
    // route() {
    //     const routeObj = this.routes.find(
    //         (route) => route.path == location.hash
    //     );
    //     const view = routeObj ? routeObj.view : null; // поставить страницу 404
    // }
    route() {
        if (this.currentView) {
            this.currentView.destroy();
        }
        const view = this.routes.find(
            (route) => route.path == location.hash
        ).view;
        this.currentView = new view();
        this.currentView.render();
    }
}

new App();
// роутинг загрузка вьюшек

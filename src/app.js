import { MainView } from "./views/main/main";
import { NotFound } from "./views/404/404";

class App {
    routes = [{ path: "", view: MainView }];
    appState = {
        favorites: [],
    };
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
        this.currentView = new view(this.appState);
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

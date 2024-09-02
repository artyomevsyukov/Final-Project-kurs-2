import { AbstractView } from "../../common/view.js";
import onChanhe from "on-change";
import { Header } from "../../components/header/header.js";

export class MainView extends AbstractView {
    state = {
        list: [],
        load: false,
        searchQuery: undefined,
        offset: 0,
    };
    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChanhe(this.appState, this.appStateHook.bind(this));

        this.setTitle("Поиск книг");
    }

    appStateHook(path) {
        // Следи за рекурсией
        // console.log(path);
        if (path === "favorites") {
            console.log(path);
        }
        // if (path === "buy") {
        //     console.log(path);
        // }
    }

    render() {
        const main = document.createElement("div");
        // main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
        // this.app.innerHTML = "";
        this.app.append(main);
        this.renderHeader();
        // this.appState.favorites.push("ddddd");
        // this.appState.buy.push("ddddd");
    }

    // потому что иногда надо будет рендерить только Header

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}

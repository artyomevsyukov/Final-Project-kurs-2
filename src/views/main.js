import { AbstractView } from "../common/view.js";

export class MainView extends AbstractView {
    constructor() {
        super();
        this.setTitle = "Поиск книг";
    }

    render() {
        const main = document.createElement("div");
        main.innerHTML = "Tecт";
        this.app.innerHTML = "";
        this.app.append(main);
    }
}

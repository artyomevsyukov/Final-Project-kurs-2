import { AbstractView } from "../../common/view";

export class NotFound extends AbstractView {
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

import { AbstractView } from "../../common/view";

export class Find extends AbstractView {
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

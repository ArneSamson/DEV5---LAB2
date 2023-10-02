import Island from "./classes/Island";
import World from "./classes/World";

export default class App {
    constructor() {
        this.world = new World();
        this.hookEvents();
    }
    
    hookEvents() {
        document.querySelector("#btnAddIsland").addEventListener("click", () => {
        this.world.addIsland();
        });
    
        document.querySelector("#btnSave").addEventListener("click", () => {
        this.world.save();
        });
    
        document.querySelector("#btnLoad").addEventListener("click", () => {
        this.world.load();
        });
    }
}
import Island from "./classes/Island.js";
import World from "./classes/World.js";

const world = new World();

document.querySelector("#btnAddIsland").addEventListener("click", () => {
    world.addIsland(new Island());
    });

// export default class App {
//     constructor() {
//         this.world = new World();
//         this.hookEvents();
//     }
    
//     hookEvents() {
//         document.querySelector("#btnAddIsland").addEventListener("click", () => {
//         this.world.addIsland(new Island());
//         });
    
//         document.querySelector("#btnSave").addEventListener("click", () => {
//         this.world.save();
//         });
    
//         document.querySelector("#btnLoad").addEventListener("click", () => {
//         this.world.load();
//         });
//     }
// }
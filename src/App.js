import "../style.css";
import Island from "./classes/Island";
import World from "./classes/World";


const world = new World();

document.getElementById("btnAddIsland").addEventListener("click", () => {
    const island = new Island();
    world.addIsland(new Island());
    }
);
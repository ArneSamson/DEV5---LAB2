import Island from "./Island.js";
export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }

    hookEvents() {
      document.querySelector("#btnAddIsland").addEventListener("click", () => {
        this.addIsland(new Island());
      });
  
      document.querySelector("#btnSave").addEventListener("click", () => {
        this.save();
      });
  
      document.querySelector("#btnLoad").addEventListener("click", () => {
        this.load();
      });
    }
  
    save() {
      localStorage.setItem("islands", JSON.stringify(this.islands));
    }
  
    load() {
      const islands = JSON.parse(localStorage.getItem("islands"));

      islands.forEach(island => {
        const oldIsland = new Island();
        oldIsland.name = island.name;
        oldIsland.color = island.color;
        
        this.addIsland(oldIsland);
        oldIsland.element.style.left = island.x;
        oldIsland.element.style.top = island.y;

        // island.element.style.position = "absolute";
        // and.element.style.left = `${island.x}px`;
        // island.element.style.top = `${island.y}px`; 

        this.addIsland(island);

      });
    }
  
    getCoordinates() {
      const offset = 0.9;
      const x = Math.floor(Math.random() * window.innerWidth * offset);
      const y = Math.floor(Math.random() * window.innerHeight * offset);
      return { x, y };
    }
  
    addIsland(island) {     
      this.islands.push(island);
      this.moveIsland(island);
    }
  
    moveIsland(island) {
      const coordinates = this.getCoordinates();

      island.x = coordinates.x;
      island.y = coordinates.y;
      
      island.element.style.left = `${island.x}px`;
      island.element.style.top = `${island.y}px`;
    }

  }
  
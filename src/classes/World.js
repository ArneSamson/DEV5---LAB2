import Island from "./Island.js";
export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }
  
    hookEvents() {
      // hook events like clicking buttons to a specific function
    }
  
    save() {
      // save islands to localstorage
      localStorage.setItem("islands", JSON.stringify(this.islands));
    }
  
    load() {
      // load islands from localstorage into array
      const savedIslands = JSON.parse(localStorage.getItem("islands")) || [];
        savedIslands.forEach(islandData => {
            const island = new Island();
            island.name = islandData.name;
            island.color = islandData.color;
            island.position = islandData.position;
            this.addIsland(island);
        });
    }
  
    getCoordinates() {
      const offset = 0.7;
      // return coordinates within the screen at random, feel free to change it up!
      const x = Math.floor(Math.random() * window.innerWidth * offset);
      const y = Math.floor(Math.random() * window.innerHeight * offset);
      return { x, y };
    }
  
    addIsland(island) {     
      this.islands.push(island);
      this.moveIsland(island);
    }
  
    moveIsland(island) {
      // get random coordinates
      const coordinates = this.getCoordinates();
      // set the coordinates to the island
      island.element.style.left = `${coordinates.x}px`;
      island.element.style.top = `${coordinates.y}px`;

    }
  }
  
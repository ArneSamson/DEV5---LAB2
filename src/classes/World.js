import Island from "./Island.js";
export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      // this.hookEvents(); // let's kick things of by hooking up events
    }

    // hookEvents() {
    // }
  
    save() {
      localStorage.setItem("islands", JSON.stringify(this.islands));
    }
  
    load() {
      const savedIslands = JSON.parse(localStorage.getItem("islands"));

      console.log(savedIslands);
    
      if (savedIslands) {        
    
        savedIslands.forEach(savedIslandData => {
          const island = new Island();
          island.name = savedIslandData.name;
          island.color = savedIslandData.color;
          island.coordinates = savedIslandData.coordinates;
          island.element = island.render();

          // Add the island to the World
          this.islands.push(island);

          // Append the island element to the DOM
          document.body.appendChild(islandElement);
        });
      }
    }
  
    getCoordinates() {
      const offset = 0.9;
      const x = Math.floor(Math.random() * window.innerWidth * offset);
      const y = Math.floor(Math.random() * window.innerHeight * offset);
      return { x, y };
    }
  
    addIsland() {
      const coordinates = this.getCoordinates();
      const island = new Island(coordinates);
      
      island.render();
      this.islands.push(island);
    }
  
    moveIsland() {

    }
    
  }
  
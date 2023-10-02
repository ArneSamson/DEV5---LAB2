import Island from "./Island.js";
export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }

    hookEvents() {    
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
      const savedIslands = JSON.parse(localStorage.getItem("islands"));
    
      if (savedIslands) {
        // Clear existing islands from the DOM
        // this.islands.forEach(island => {
        //   island.element.remove();
        // });
        
        // Clear existing islands from the World
        this.islands = [];
    
        savedIslands.forEach(savedIslandData => {
          const island = new Island();
          island.name = savedIslandData.name;
          island.color = savedIslandData.color;
    
          // Create island element directly within the load function
          const islandElement = document.createElement("div");
          islandElement.classList.add("island");
          islandElement.style.backgroundColor = island.color;
          
          islandElement.textContent = island.name;

          // Set the position of the island element
          islandElement.style.left = `${savedIslandData.coordinates.x}px`;
          islandElement.style.top = `${savedIslandData.coordinates.y}px`;
    
          // Assign the element to the island
          island.element = islandElement;

          // Add the island to the World
          this.islands.push(island); // Push the island into the array

          // Append the island element to the DOM
          document.body.appendChild(islandElement);

          console.log("hey");
          console.log(island.name);
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

      this.islands.push(island);

      island.render();
    }
  
    moveIsland(island) {
      // const coordinates = this.getCoordinates();

      // island.element.style.left = `${coordinates.x}px`;
      // island.element.style.top = `${coordinates.y}px`;
    }

  }
  
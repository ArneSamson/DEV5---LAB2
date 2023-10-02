export default class Island {
<<<<<<< HEAD
  constructor(coordinates) {
    this.name = this.getRandomName();
    this.color = this.getRandomColor();
    this.element = null;
    this.coordinates = coordinates || { x: 0, y: 0};
=======
    constructor() {
      this.name = this.getRandomName();
      this.color = this.getRandomColor();
      this.element = this.createElement();
      // this.render();
    }
  
    getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    createElement() {
      const island = document.createElement("div");
      island.classList.add("island");
      island.style.backgroundColor = this.color;
      island.style.transform = `translate(-50%, -50%)`;
      island.innerHTML = `<h2>${this.name}</h2>`;
    
      document.body.appendChild(island);
    
      return island;
    }

    // render() {
    //     document.body.appendChild(this.element);
    // }

  
    remove() {
      // JS animations api, fade out
      // remove the element when the animation ended
      this.element.style.opacity = 0;
      setTimeout(() => {
        this.element.remove();
      }, timeout);
    }
  
    getRandomName() {
      const names = [
        "Palmtree beach",
        "Sandy beach",
        "Tropical beach",
        "Palm beach",
        "Sunny beach",
        "Paradise beach",
        "Sunny island",
        "Tropical island",
        "Palm island",
        "Paradise island"
      ];

      return names[Math.floor(Math.random() * names.length)];      
    }
>>>>>>> a8b9d1c4661cfefb747546ac87228f3d8a26747c
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  render() {
    console.log("render");
    const island = document.createElement("div");
    island.classList.add("island");
    island.style.backgroundColor = this.color;
    
    island.textContent = this.name;
    
    // Set the position of the island element
    island.style.left = `${this.coordinates.x}px`;
    island.style.top = `${this.coordinates.y}px`;
  
    document.body.appendChild(island);
  
    return island;
  }

  remove() {
    // JS animations api, fade out
    // remove the element when the animation ended
    this.element.style.opacity = 0;
    setTimeout(() => {
      this.element.remove();
    }, timeout);
  }

  getRandomName() {
    const names = [
      "Palmtree beach",
      "Sandy beach",
      "Tropical beach",
      "Palm beach",
      "Sunny beach",
      "Paradise beach",
      "Sunny island",
      "Tropical island",
      "Palm island",
      "Paradise island"
    ];

    return names[Math.floor(Math.random() * names.length)];      
  }
}

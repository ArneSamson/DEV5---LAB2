export default class Island {
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
  }
  
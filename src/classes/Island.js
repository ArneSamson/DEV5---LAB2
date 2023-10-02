export default class Island {
    constructor(coordinates) {
      this.name = this.getRandomName();
      this.color = this.getRandomColor();
      this.element = this.render();
      this.coordinates = coordinates || { x: 0, y: 0 };
    }
  
    getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    render() {
      const islandElement = document.createElement("div");
      islandElement.classList.add("island");
      islandElement.style.backgroundColor = this.color;

      console.log(this.coordinates);

      islandElement.style.left = `${this.coordinates.x}px`;
      islandElement.style.top = `${this.coordinates.y}px`;
      islandElement.innerHTML = `<h2>${this.name}</h2>`;

      this.element = islandElement;
    
      document.body.appendChild(islandElement);
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
  
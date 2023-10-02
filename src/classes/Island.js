export default class Island {
  constructor(coordinates) {
    this.name = this.getRandomName();
    this.color = this.getRandomColor();
    this.element = null;
    this.coordinates = coordinates || { x: 0, y: 0};
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

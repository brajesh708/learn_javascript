class Menu {
    constructor() {
      this.items = [];
    }
  
    // Add a new menu item
    addItem(name, price) {
      this.items.push({ name, price });
    }
  
    // Remove a menu item by name
    removeItem(name) {
      this.items = this.items.filter(item => item.name !== name);
    }
  
    // Display all menu items
    displayMenu() {
      console.log("Menu:");
      this.items.forEach(item => console.log(`${item.name}: $${item.price}`));
    }
  }
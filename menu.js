class Menu {
  constructor(items) {
    this.activeItem = 0;
    this.items = [];

    items.forEach(this.add);
  }
  add = (item) => {
    this.items.push(item.getNode());
  };
  activeCheck = () => {
    this.items.forEach((item, ind) => {
      if (ind === this.activeItem) {
        item.classList.add('menu__item_active');
      } else {
        item.classList.remove('menu__item_active');
      }
    });
  };
  handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      this.activeItem = this.activeItem < 1 ? this.items.length - 1 : this.activeItem - 1;
    }
    if (e.key === 'ArrowRight') {
      this.activeItem = this.activeItem >= this.items.length - 1 ? 0 : this.activeItem + 1;
    }
    this.activeCheck();
  };
  getNode = () => {
    const menu = document.createElement('ul');
    menu.classList.add('menu');
    this.items.forEach((item) => {
      menu.appendChild(item);
    });
    menu.addEventListener('keydown', this.handleKeyPress);
    this.activeCheck();
    return menu;
  };
}

class Item {
  constructor(text) {
    this.text = text;
  }
  getNode() {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu__item');

    const link = document.createElement('a');
    link.href = '#';
    link.innerText = this.text;

    menuItem.appendChild(link);

    return menuItem;
  }
}

class MenuRenderer {
  static render(menu) {
    document.getElementsByTagName('body')[0].appendChild(menu.getNode());
  }
}

const menu = new Menu([new Item('Read'), new Item('View Source'), new Item('View History')]);
MenuRenderer.render(menu);

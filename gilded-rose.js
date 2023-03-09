class Item {
  constructor(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }

  updateQuality() {}
}

class CheezeItem extends Item {
  updateQuality() {
    this.sell_in--;
    if (this.quality < 50) {
      this.quality++;
    }
  }
}

class BackstagePassItem extends Item {
  updateQuality() {
    if (this.sell_in <= 10 && this.sell_in > 5) {
      this.quality += 2;
    } else if (this.sell_in <= 5 && this.sell_in > 0) {
      this.quality += 3;
    } else if (this.sell_in < 0) {
      this.quality = 0;
    } else {
      this.quality++;
    }
    this.sell_in--;
  }
}

class LegendaryItem extends Item {}

class BasicItem extends Item {
  updateQuality() {
    if (this.quality > 0) {
      if (this.sell_in < 0) {
        this.quality -= 2;
      } else {
        this.quality--;
      }
    }
    this.sell_in--;
  }
}

class ConjuredItem extends Item {
  updateQuality() {
    if (this.quality >= 2) {
      this.quality -= 2;
    }
    this.sell_in--;
  }
}

function ItemFactory(name, sell_in, quality) {
  switch (name) {
    case "Aged Brie":
    case "Aged Gouda":
      return new CheezeItem(name, sell_in, quality);
    case "Sulfuras, Hand of Ragnaros":
      return new LegendaryItem(name, sell_in, quality);
    case "Backstage passes to a TAFKAL80ETC concert":
      return new BackstagePassItem(name, sell_in, quality);
    case "Conjured Mana Cake":
      return new ConjuredItem(name, sell_in, quality);
    default:
      return new BasicItem(name, sell_in, quality);
  }
}

var items = [];

items.push(ItemFactory("+5 Dexterity Vest", 10, 20));
items.push(ItemFactory("Aged Brie", 2, 0));
items.push(ItemFactory("Elixir of the Mongoose", 5, 7));
items.push(ItemFactory("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(ItemFactory("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(ItemFactory("Conjured Mana Cake", 3, 6));

function update_quality() {
  for (let item of items) {
    item.updateQuality();
  }
}

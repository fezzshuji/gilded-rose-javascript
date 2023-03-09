class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {}
}

class CheezeItem extends Item {
  updateQuality() {
    this.sellIn--;
    if (this.quality < 50) {
      this.quality++;
    }
  }
}

class BackstagePassItem extends Item {
  updateQuality() {
    if (this.sellIn <= 10 && this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn <= 5 && this.sellIn > 0) {
      this.quality += 3;
    } else if (this.sellIn < 0) {
      this.quality = 0;
    } else {
      this.quality++;
    }
    this.sellIn--;
  }
}

class LegendaryItem extends Item {}

class BasicItem extends Item {
  updateQuality() {
    if (this.quality > 0) {
      if (this.sellIn < 0) {
        this.quality -= 2;
      } else {
        this.quality--;
      }
    }
    this.sellIn--;
  }
}

class ConjuredItem extends Item {
  updateQuality() {
    if (this.quality >= 2) {
      this.quality -= 2;
    }
    this.sellIn--;
  }
}

export function ItemFactory(name, sellIn, quality) {
  switch (name) {
    case "Aged Brie":
    case "Aged Gouda":
      return new CheezeItem(name, sellIn, quality);
    case "Sulfuras, Hand of Ragnaros":
      return new LegendaryItem(name, sellIn, quality);
    case "Backstage passes to a TAFKAL80ETC concert":
      return new BackstagePassItem(name, sellIn, quality);
    case "Conjured Mana Cake":
      return new ConjuredItem(name, sellIn, quality);
    default:
      return new BasicItem(name, sellIn, quality);
  }
}

export const items = [];

items.push(ItemFactory("+5 Dexterity Vest", 10, 20));
items.push(ItemFactory("Aged Brie", 2, 0));
items.push(ItemFactory("Elixir of the Mongoose", 5, 7));
items.push(ItemFactory("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(ItemFactory("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(ItemFactory("Conjured Mana Cake", 3, 6));

export function updateQuality() {
  for (let item of items) {
    item.updateQuality();
  }
}

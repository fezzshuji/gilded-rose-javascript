// export class Item {
//   constructor(name, sellIn, quality) {
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
// }

// export let items = [];

// items.push(new Item("+5 Dexterity Vest", 10, 20));
// items.push(new Item("Aged Brie", 2, 0));
// items.push(new Item("Elixir of the Mongoose", 5, 7));
// items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
// items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
// items.push(new Item("Conjured Mana Cake", 3, 6));

// export const updateQuality = () => {
//   for (let item of items) {
//     if (
//       item.name != "Aged Brie" &&
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       if (item.quality < 50) {
//         item.quality = item.quality + 1;
//         if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.sellIn < 11) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//           if (item.sellIn < 6) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.sellIn = item.sellIn - 1;
//     }
//     if (item.sellIn < 0) {
//       if (item.name != "Aged Brie") {
//         if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.quality > 0) {
//             if (item.name != "Sulfuras, Hand of Ragnaros") {
//               item.quality = item.quality - 1;
//             }
//           }
//         } else {
//           item.quality = item.quality - item.quality;
//         }
//       } else {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// };

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    this.sellIn -= 1;
    if (this.quality > 0) {
      this.quality -= 1;
      if (this.sellIn < 0) {
        this.quality -= 1;
      }
    }
  }
}

export class AgedBrie extends Item {
  updateQuality() {
    this.sellIn -= 1;
    if (this.quality < 50) {
      this.quality += 1;
      if (this.sellIn < 0) {
        this.quality += 1;
      }
    }
  }
}

export class Sulfuras extends Item {
  updateQuality() {}
}

export class BackstagePass extends Item {
  updateQuality() {
    this.sellIn -= 1;
    if (this.quality < 50) {
      this.quality += 1;
      if (this.sellIn < 10) {
        this.quality += 1;
      }
      if (this.sellIn < 5) {
        this.quality += 1;
      }
      if (this.sellIn < 0) {
        this.quality -= this.quality;
      }
    }
  }
}

export class ConjuredItem extends Item {
  updateQuality() {
    this.sellIn -= 1;
    if (this.quality > 0) {
      this.quality -= 2;
      if (this.sellIn < 0) {
        this.quality -= 2;
      }
    }
  }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new AgedBrie("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    item.updateQuality();
  }
};

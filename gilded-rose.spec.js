import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, 
  ConjuredItem, BackstagePass, Sulfuras, AgedBrie  } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("Dexterity Vest", 10, 20);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(19);
    expect(testItem.sellIn).toBe(9);
  });
  
  it("increase quality of backstage passes by 1 when there are 11 days or more", () => {
    const testItem = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 11, 3);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(4);
    //expect(testItem.sellIn).toBe(14);
  });

  it("increase quality of backstage passes by 2 when there are 10 days or less", () => {
    const testItem = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 3);
    items.push(testItem);
    updateQuality();
    expect(testItem.quality).toBe(5);
    //expect(testItem.sellIn).toBe(14);
  });
});

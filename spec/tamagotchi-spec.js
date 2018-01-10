import {Pet} from "./../js/scripts.js"

describe("Pet", function() {
  let doot = new Pet("doot", "He likes watching TV and making new friends!", "banana", "hopscotch");

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("should convert from a number to a string of pipes", function() {
    expect(doot.hunger).toEqual(12);
    expect(doot.meter(doot.hunger)).toEqual("||||||||||||")
  });

  it("should decrease hunger by 1 every 5 seconds", function() {
    doot.hungerDecrease();
    jasmine.clock().tick(5001);
    expect(doot.hunger).toEqual(11);
  });

  it("should decrease happiness by 1 every 4 seconds", function() {
    doot.happyDecrease();
    jasmine.clock().tick(4001);
    expect(doot.happiness).toEqual(11);
  });

  it("should increase hunger by 2 when fed", function() {
    doot.hunger = 5;
    doot.feed();
    expect(doot.hunger).toEqual(7);
  })

  it("should increase hunger by 4 when fed favorite food", function() {
    doot.hunger = 5;
    doot.favFeed();
    expect(doot.hunger).toEqual(9);
  })

  it("should increase happiness by 2 when played with", function() {
    doot.happiness = 5;
    doot.play();
    expect(doot.happiness).toEqual(7);
  })

  it("should increase happiness by 4 when favorite game is played", function() {
    doot.happiness = 5;
    doot.favPlay();
    expect(doot.happiness).toEqual(9);
  })
});

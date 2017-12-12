function Pet(name) {
  this.name = name;
  this.hunger = 12;
  this.happiness = 12;
};

function meter(stat) {
  var string = "";
  for (i=1; i<=stat; i++) {
    string += "|"
  }
  return(string);
};

$(document).ready(function() {
  var petsName = prompt("What do you want to name your pet?")
  var pet = new Pet(petsName);
  $("#pets-name").text(pet.name);

  var timer = setInterval(decrease, 1000);
  $("#hunger").text(meter(pet.hunger));
  $("#happiness").text(meter(pet.happiness));

  function decrease() {
    if (pet.hunger != 0) {
      pet.hunger -= 1;
      $("#hunger").text(meter(pet.hunger));
    }
    if (pet.happiness != 0) {
      pet.happiness -= 1;
      $("#happiness").text(meter(pet.happiness));
    }
  };

  $("#feed").click(function() {
    if (pet.hunger <= 9) {
      pet.hunger += 3;
    } else if (pet.hunger <= 12){
      pet.hunger = 12;
    }
    $("#hunger").text(meter(pet.hunger));
  });

  $("#happy").click(function() {
    if (pet.happiness <= 9) {
      pet.happiness += 3;
    } else if (pet.happiness <= 12) {
      pet.happiness = 12;
    }
    $("#happiness").text(meter(pet.happiness));
  });


});

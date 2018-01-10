$(document).ready(function() {

  $(".pet-img").html("<img src='" + happyImg + "' class='img-big'>");
  $("#pet-description").html(petDescription);

  $("#name-form").submit(function(event) {
    event.preventDefault();
    let petsName = $("input#name").val();
    let pet = new Pet(petsName);
    $("#pets-name").text(pet.name);

    $("#start").hide();
    $("#main-screen").show();

    $("#hunger").text(meter(pet.hunger));
    $("#happiness").text(meter(pet.happiness));

    var hungerTimer = setInterval(happyDisplay, 5000);
    var happyTimer = setInterval(hungerDisplay, 4000);
    var emotionTimer = setInterval(emotion, 1000);

    function hungerDisplay() {
      $("#hunger").text(meter(pet.hunger));
    }

    function happyDisplay() {
      $("#happiness").text(meter(pet.happiness));
    }

    function emotion() {
      if (pet.hunger > 6 && pet.happiness > 6) {
        $(".pet-img").html("<img src='" + happyImg + "' class='img-big'>");
      } else if (pet.hunger < 3 || pet.happiness < 3) {
        $(".pet-img").html("<img src='" + madImg + "' class='img-big'>");
      } else {
        $(".pet-img").html("<img src='" + neutImg + "' class='img-big'>");
      }
    }
    $("#banana").click(function() {
      if (pet.favFood === "banana") {
        pet.favpet.pet.feed();
      } else {
        pet.feed();
      }
    });

    $("#cake").click(function() {
      if (pet.favFood === "cake") {
        pet.favpet.feed();
      } else {
        pet.feed();
      }
    });

    $("#taco").click(function() {
      if (pet.favFood === "taco") {
        pet.favpet.feed();
      } else {
        pet.feed();
      }
    });

    $("#hopscotch").click(function() {
      if (pet.favGame === "hopscotch") {
        pet.favpet.play();
      } else {
        pet.play();
      }
    });

    $("#yo-yo").click(function() {
      if (pet.favGame === "yo-yo") {
        pet.favpet.play();
      } else {
        pet.play();
      }
    });

    $("#soccer").click(function() {
      if (pet.favGame === "soccer") {
        pet.favpet.play();
      } else {
        pet.play();
      }
    });

  });

});

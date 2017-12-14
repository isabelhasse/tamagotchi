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
  for (i=stat; i>=0; i--) {
    string +=" "
  }
  return(string);
};

$(document).ready(function() {
  var random =  Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    var happyImg = "img/doot-happy.gif";
    var madImg = "img/doot-mad.gif";
    var neutImg = "img/doot-neut.gif";
    var petDescription = "He likes watching TV and making new friends!";
    var favFood = "banana";
    var favGame = "hopscotch"
  } else if (random === 2) {
    var happyImg = "img/moot-happy.gif";
    var madImg = "img/moot-mad.gif";
    var neutImg = "img/moot-neut.gif";
    var petDescription = "She is a little shy but she loves to play games!";
    var favFood = "cake";
    var favGame = "yo-yo"
  } else {
    var happyImg = "img/poot-happy.gif";
    var madImg = "img/poot-mad.gif";
    var neutImg = "img/poot-neut.gif";
    var petDescription = "She likes going for walks and reading comic books!";
    var favFood = "taco";
    var favGame = "soccer";
  }

  $(".pet-img").html("<img src='" + happyImg + "' class='img-big'>");
  $("#pet-description").html(petDescription);

  $("#name-form").submit(function(event) {
    event.preventDefault();
    var petsName = $("input#name").val();
    var pet = new Pet(petsName);
    $("#pets-name").text(pet.name);

    $("#start").hide();
    $("#main-screen").show();

    $("#hunger").text(meter(pet.hunger));
    $("#happiness").text(meter(pet.happiness));

    var hungerTimer = setInterval(happyDecrease, 5000);
    var happyTimer = setInterval(hungerDecrease, 4000);
    var emotionTimer = setInterval(emotion, 1000)

    function hungerDecrease() {
      if (pet.hunger != 0) {
        pet.hunger -= 1;
        $("#hunger").text(meter(pet.hunger));
      }
    }

    function happyDecrease() {
      if (pet.happiness != 0) {
        pet.happiness -= 1;
        $("#happiness").text(meter(pet.happiness));
      }
    }

    function emotion() {
      if (pet.hunger > 6 && pet.happiness > 6) {
        $(".pet-img").html("<img src='" + happyImg + "' class='img-big'>");
      } else if (pet.hunger < 3 || pet.happiness < 3) {
        $(".pet-img").html("<img src='" + madImg + "' class='img-big'>");
      } else {
        $(".pet-img").html("<img src='" + neutImg + "' class='img-big'>");
      }
    };

    function feed() {
      if (pet.hunger <= 10) {
        pet.hunger += 2;
      } else if (pet.hunger <= 12){
        pet.hunger = 12;
      }
      $("#hunger").text(meter(pet.hunger));
    };

    function favFeed() {
      if (pet.hunger <= 8) {
        pet.hunger += 4;
      } else if (pet.hunger <= 12) {
        pet.hunger = 12;
      }
      $("#hunger").text(meter(pet.hunger));
    };

    $("#banana").click(function() {
      if (favFood === "banana") {
        favFeed();
      } else {
        feed();
      }
    });

    $("#cake").click(function() {
      if (favFood === "cake") {
        favFeed();
      } else {
        feed();
      }
    });

    $("#taco").click(function() {
      if (favFood === "taco") {
        favFeed();
      } else {
        feed();
      }
    });

    function play() {
      if (pet.happiness <= 10) {
        pet.happiness += 2;
      } else if (pet.happiness <= 12) {
        pet.happiness = 12;
      }
      $("#happiness").text(meter(pet.happiness));
    };

    function favPlay() {
      if (pet.happiness <= 8) {
        pet.happiness += 4;
      } else if (pet.happiness <= 12) {
        pet.happiness = 12;
      }
      $("#happiness").text(meter(pet.happiness));
    }

    $("#hopscotch").click(function() {
      if (favGame === "hopscotch") {
        favPlay();
      } else {
        play();
      }
    });

    $("#yo-yo").click(function() {
      if (favGame === "yo-yo") {
        favPlay();
      } else {
        play();
      }
    });

    $("#soccer").click(function() {
      if (favGame === "soccer") {
        favPlay();
      } else {
        play();
      }
    });

  })

});

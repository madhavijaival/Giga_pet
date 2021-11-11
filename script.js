$(function () {
    // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();

    // When each button is clicked, it will "call" function for that button (functions are below)
    $(".treat-button").click(clickedTreatButton);
    $(".play-button").click(clickedPlayButton);
    $(".exercise-button").click(clickedExerciseButton);
    $(".love-button").click(clickedLoveButton);

    var clear;
    var msgDuration = 50;
    var $msgtreat = "Thank you for Treat :)";
    var $msgplay = "I love to play";
    var $msgexercise = "uhhh..! I am tired";
    var $msglove = "I always be with you";

    // cache DOM
    var $msg = $(".msg");
    var $btntreat = $(".treat-button");
    var $btnplay = $(".play-button");
    var $btnexercise = $(".exercise-button");
    var $btnlove = $(".love-button");

    // render message
    function render(message) {
        hide();

        switch (message) {
            case "treat":
                $msg.addClass("msg-success active").text($msgtreat);
                break;
            case "play":
                $msg.addClass("msg-danger active").text($msgplay);
                break;
            case "exercise":
                $msg.addClass("msg-warning active").text($msgexercise);
                break;
            case "love":
                $msg.addClass("msg-info active").text($msglove);
                break;
        }
    }

    function timer() {
        clearTimeout(clear);
        clear = setTimeout(function () {
            hide();
        }, msgDuration);
    }

    function hide() {
        $msg.removeClass("msg-success msg-danger msg-warning msg-info active");
    }

    // bind events
    $btntreat.on("click", function () {
        render("treat");
    });
    $btnplay.on("click", function () {
        render("play");
    });
    $btnexercise.on("click", function () {
        render("exercise");
    });
    $btnlove.on("click", function () {
        render("love");
    });
    $msg.on("transitionend", timer);
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Ollie", weight: 5, happiness: 0, loyalty: 1 };

function clickedTreatButton() {
    // Increase pet happiness
    pet_info["happiness"] = pet_info["happiness"] + 1;
    // Increase pet weight
    pet_info["weight"] = pet_info["weight"] + 1;
    checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
    // Increase pet happiness
    pet_info["happiness"] = pet_info["happiness"] + 1;
    // Decrease pet weight
    pet_info["weight"] = pet_info["weight"] - 1;
    checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
    // Decrease pet happiness
    pet_info["happiness"] = pet_info["happiness"] - 1;
    // Decrease pet weight
    pet_info["weight"] = pet_info["weight"] - 1;

    checkAndUpdatePetInfoInHtml();
}

function clickedLoveButton() {
    // Increase pet Loyalty
    pet_info["loyalty"] = pet_info["loyalty"] + 1;
    checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();
    updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
    // Add conditional so if weight is lower than zero, set it back to zero

    if (pet_info["weight"] < 1) {
        pet_info["weight"] = 0;
    }

    if (pet_info["happiness"] < 1) {
        pet_info["happiness"] = 0;
    }
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
    $(".name").text(pet_info["name"]);
    $(".weight").text(pet_info["weight"]);
    $(".happiness").text(pet_info["happiness"]);
    $(".loyalty").text(pet_info["loyalty"]);
}

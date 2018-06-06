var tracker = {
    target: 0,
    userScore: 0,
    generator: function () {
        return Math.floor(Math.random() * 101) + 19
    }
};

var buttons = {
    jewels: ["#ruby", "#sapphire", "#topaz", "#emerald"],
    value: 0,
    generator: function () {
        return Math.floor(Math.random() * 11) + 1
    }
};

var score = {
    wins: 0,
    losses: 0
};

var counter = {
    result: 0,
    reset: 1
};

//Initial Start-up
tracker.target = tracker.generator();
$("#target").html(tracker.target);
$("#userTotalScore").html(tracker.userScore);
$("#wins").html(score.wins);
$("#losses").html(score.losses);

$("#crystals").on("click", ".img-jewels", function() {
    //Randomize and Assign values to the jewels
    if(counter.reset === 1) {
        var buttonValue = $('#crystals img').each(function() {
            var i = 0;
            $(buttons.jewels[i]).val(buttons.generator());
            console.log($(buttons.jewels[i]).val());
            i++;
            counter.reset = 0;
        });
    }

    tracker.userScore = tracker.userScore + parseInt($(this).val());
    $("#userTotalScore").html(tracker.userScore);
    // console.log(tracker.userScore);

    //Determine if the user has satisfied win or loss condition
    if(tracker.userScore === tracker.target) {
        alert("You Win!");
        score.wins++;
        $("#wins").html(score.wins);
        counter.reset = 1;
    } else if(tracker.userScore > tracker.target) {
        alert("You Lose. Try again next time");
        score.losses++;
        $("losses").html(score.losses);
        counter.reset = 1;
    }

    //Resetting the values and target, jewel values will be reset in the beginning when the game is replayed
    if(counter.reset === 1) {
        tracker.target = tracker.generator();
        $("#target").html(tracker.target);
        tracker.userScore = 0;
        $("#userTotalScore").html(tracker.userScore);
    }
});


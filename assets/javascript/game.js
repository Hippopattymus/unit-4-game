
var attack;
var defend;
var attackerHP;
var attackerAP;
var attackerCAP;
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var YourCharacter;
var YourDefender;
var myChar = "";
var myDef = "";

function reset() {
    $(".restart").hide();
    $(".attackButton").hide();
    $(".avail").hide();
    $("#yourChar").hide();
    $("#defender").hide();
    $("#picRow").show();

    var myChar = "";
    var myDef = "";

    characters.Huntress.healthPoints = 120;
    characters.Johun.healthPoints = 100;
    characters.Zannah.healthPoints = 150;
    characters.DarBane.healthPoints = 180;

    characters.Huntress.attackPower = 10;
    characters.Johun.attackPower = 12;
    characters.Zannah.attackPower = 14;
    characters.DarBane.attackPower = 16;

    $(".youAttacked").empty();
    $(".attackedBack").empty();
    $(".youDefeated").empty();
    $(".youWon").empty();
    $(".youLose").empty();
    $(".noEnemy").empty();

    $(".hunthp").html(characters.Huntress.healthPoints);
    $(".johunhp").html(characters.Johun.healthPoints);
    $(".zannahhp").html(characters.Zannah.healthPoints);
    $(".darthbhp").html(characters.DarBane.healthPoints);

};


//object of objects
var characters = {

    Huntress: {
        name: "Huntress",
        visual: 'assets/images/Darthcog.jpg',
        healthPoints: 120,
        attackPower: 10,
        fullName: "Darth Cognus",
        counterAttackPower: 10
    },

    Johun: {
        name: "Johun",
        visual: 'assets/images/Johun_Othone.jpg',
        healthPoints: 100,
        attackPower: 12,
        fullName: "Johun Othone",
        counterAttackPower: 5
    },

    Zannah: {
        name: "Zannah",
        visual: 'assets/images/Darth_Zannah.jpg',
        healthPoints: 150,
        attackPower: 14,
        fullName: "Darth Zannah",
        counterAttackPower: 12
    },

    DarBane: {
        name: "DarBane",
        visual: 'assets/images/DarthBane.jpg',
        healthPoints: 180,
        attackPower: 16,
        fullName: "Darth Bane",
        counterAttackPower: 16
    }
};

reset();
$(document).ready(function () {
    $(".firstRow").click(function () {
        if (myChar == "") {
            // appends the chosen character to "yourchar id"
            console.log(this);
            $(this).appendTo("#yourChar");
            myChar = $(this);
            YourCharacter = $(myChar).attr("value");

            console.log(myChar);
            console.log(YourCharacter);

            if (YourCharacter == characters.Huntress.name) {
                attackerHP = characters.Huntress.healthPoints;
                attackerAP = characters.Huntress.attackPower;
                attackerCAP = characters.Huntress.counterAttackPower;
                attackerFN = characters.Huntress.fullName;
                attack = characters.Huntress;
            }
            else if (YourCharacter == characters.Johun.name) {
                attackerHP = characters.Johun.healthPoints;
                attackerAP = characters.Johun.attackPower;
                attackerCAP = characters.Johun.counterAttackPower;
                attackerFN = characters.Johun.fullName;
                attack = characters.Johun;
            }
            else if (YourCharacter == characters.Zannah.name) {
                attackerHP = characters.Zannah.healthPoints;
                attackerAP = characters.Zannah.attackPower;
                attackerCAP = characters.Zannah.counterAttackPower;
                attackerFN = characters.Zannah.fullName;
                attack = characters.Zannah;
            }
            else if (YourCharacter == characters.DarBane.name) {
                attackerHP = characters.DarBane.healthPoints;
                attackerAP = characters.DarBane.attackPower;
                attackerCAP = characters.DarBane.counterAttackPower;
                attackerFN = characters.DarBane.fullName;
                attack = characters.DarBane;
            }

            $("#yourChar").show();
            console.log("Attacker: " + attackerFN)

            for (var i = 0; i < 4; i++) {
                $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);
            }
        }
        $("#picRow").hide();
        $(".avail").show();
    });


    $(".move").click(function () {
        if (myDef === "" && attackerHP > 0) {
            $(".noEnemy").empty();

            $(this).appendTo("#defender");
            myDef = $(this);
            YourDefender = $(myDef).children().attr("value");
            $(".youDefeated").empty();
            console.log(myDef);
            if (YourDefender == characters.Huntress.name) {
                defenderHP = characters.Huntress.healthPoints;
                defenderAP = characters.Huntress.attackPower;
                defenderCAP = characters.Huntress.counterAttackPower;
                defenderFN = characters.Huntress.fullName;
                defend = characters.Huntress;
            }
            else if (YourDefender == characters.Johun.name) {
                defenderHP = characters.Johun.healthPoints;
                defenderAP = characters.Johun.attackPower;
                defenderCAP = characters.Johun.counterAttackPower;
                defenderFN = characters.Johun.fullName;
                defend = characters.Johun;
            }
            else if (YourDefender == characters.Zannah.name) {
                defenderHP = characters.Zannah.healthPoints;
                defenderAP = characters.Zannah.attackPower;
                defenderCAP = characters.Zannah.counterAttackPower;
                defenderFN = characters.Zannah.fullName;
                defend = characters.Zannah;
            }
            else if (YourDefender == characters.DarBane.name) {
                defenderHP = characters.DarBane.healthPoints;
                defenderAP = characters.DarBane.attackPower;
                defenderCAP = characters.DarBane.counterAttackPower;
                defenderFN = characters.DarBane.fullName;
                defend = characters.DarBane;
            }
            else if (YourDefender == -1){
                YourDefender = "";
            }

            console.log("Defender: " + defenderFN);
            $(".attackButton").show();
            $("#defender").show();
        }
    });


    $(".attackButton").click(function () {
        if ($("#defender").children().length == 0) {
            $(".noEnemy").html("No enemy here.");
        }

        if (!(attackerHP < 1) || !(defenderHP < 1)) { //if atthp & defhp arent both 0
            //attacks, counterattacks, and logs both to html
            attackerHP = (attackerHP - defenderCAP);

            $("." + YourCharacter).html(attackerHP); //nifty trick to call a class that varies by YourCharacter

            $(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

            defenderHP = (defenderHP - attackerAP);

            $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");

            $("." + YourDefender).html(defenderHP);

        }
        // if your character defeats the defender
        if (defenderHP <= 0) {

            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").html("You have defeated " + defenderFN + ", you can choose to fight another enemy.");

            //instead of just clearing, overwrites with the original text
            $("#defender").html("<p> Enemy: </p>");

            myDef = "";

            $(".attackButton").hide();
            console.log(attackerAP);
            attackerAP = (attackerAP + 10);

            attack.attackPower = attackerAP;
            console.log("AP: " + attackerAP);

        }



        //If the game was any more extensive it'd be worth breaking the 
        //following if/else statements into a checkWin function
        if (attackerHP <= 0 && $(".move").children().length == 0) {

            $(".restart").show();

            $(".attackButton").hide();


            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").empty();


            $(".winLose").html("You sever a few arms, but are killed in the process.");   
            

            $(".restart").click(function () {
                location.reload(true);
            });

        }

        else if ($(".move").children().length == 0) {

            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").empty();
            $(".noEnemy").empty();


            $(".winLose").html("The Force is With You!");



            $(".restart").show();
            $(".attackButton").hide();
            // When you click "Restart" the game begins again. 
            $(".restart").click(function () {
                location.reload(true);
            });

        }

        else if (attackerHP <= 0) {
            $(".restart").show();
            $(".attackButton").hide();

            $(".youAttacked").empty();
            $(".attackedBack").empty();
            $(".youDefeated").empty();

            $(".winLose").html("You did not have the High Ground.")
 
            $(".restart").click(function () {
                location.reload(true);
            });
        }


    });

});
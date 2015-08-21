var clickCount = 0;



var game = {


        playMain: function() {                          //launches game when you reload the page 


            $("#playerRainbow").on("click", function() {
                game.playRainbow()
            });

            $("#playerCarebear").on("click", function() {
                game.playCarebear()
            });

        },

        playAgainClick: function() {                    //launches playAgain functino on clicking 'Play Again'
            $('.playAgain').unbind("click")
            $('.playAgain').on("click", function() {
                game.playAgain()
            });
        },

        playAgain: function() {                        //This clears everything - the pictures from the boxes, the clickCount, music, winning pictures etc
            console.log('playAgain');
            clickCount = 0
            $(".box").html("");
            $(".whoWon").html("");
            $('.playAgain').unbind("click",function(){game.playRainbow()});
            $('.playAgain').unbind("click",function(){game.playCarebear()});
            $("#playerRainbow").on("click", function() {
                game.playRainbow()
            });

            $("#playerCarebear").on("click", function() {
                game.playCarebear()
            });
            $("#playerCarebear").removeClass("activeplayer");
            $("#playerRainbow").removeClass("activeplayer");
            $('#nyanTopOne').remove()
            $('#nyanTopTwo').remove()
            $('#nyanBottomOne').remove()
            $('#nyanBottomTwo').remove()
            $('#carebear1').remove()
            $('#rainbow1').remove()
            bearSong.pause();
            rainbowSong.pause();
      

        },

        

        carebearWin: function() {       // Awesome stuff that happens once CARE BEAR WINS 

                          $('.imagesrainbow1').prepend($('<img>', { style: "position:absolute", id:"nyanTopOne",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                $('.imagesrainbow1').prepend($('<img>', { style: "position:absolute", id:"nyanTopTwo",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                       $('.imagesrainbow2').prepend($('<img>', { style: "position:absolute", id:"nyanBottomOne",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                $('.imagesrainbow2').prepend($('<img>', { style: "position:absolute", id:"nyanBottomTwo",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));


            $('.playergallery').prepend($('<img>', { style: "position:relative", id:"carebear1",
                    src: "http://i.imgur.com/EdKFg2d.gif" 
                }));

        },


     rainbowWin: function() {       // Awesome stuff that happens once RAINBOW BRITE WINS 
        $('.imagesrainbow1').prepend($('<img>', { style: "position:absolute", id:"nyanTopOne",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                $('.imagesrainbow1').prepend($('<img>', { style: "position:absolute", id:"nyanTopTwo",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                $('.imagesrainbow2').prepend($('<img>', { style: "position:absolute", id:"nyanBottomOne",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                $('.imagesrainbow2').prepend($('<img>', { style: "position:absolute", id:"nyanBottomTwo",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

             $('.playergallery').prepend($('<img>', { style: "position:relative", id:"rainbow1",
                    src: "http://875357559f655c0fd9842374.eventingnation.netdna-cdn.com/wp-content/uploads/2014/11/tumblr_lmqnjjBpZs1qzl5l6o1_500.gif" 
                }));

     },

        


        playCarebear: function() {     //when CARE BEAR is chosen this function sets it up gameplay 

            console.log('playCarebear');

            clickCount = 0
            $("#playerCarebear").addClass("activeplayer");
            $(".box").html("");
            $(".box").on("click", game.boxTextChangeCarebear);
            $("#playerCarebear").off();
            $("#playerRainbow").off();
        },


        boxTextChangeCarebear: function() {   //when CARE BEAR is chosen this function starts the gameplay 
            console.log('boxTextChangeCarebear');
            $("#playerCarebear").addClass("activeplayer");
            game.toggleCarebear();
            game.CarebearFirst($(this));
            clickCount++;
            console.log(clickCount)
            $(this).off();
            game.winning();


        },

        toggleCarebear: function() {         //when CARE BEAR plays first this toggles between the two players in the CB/RB player picks
            console.log('toggleClass');
            if (clickCount % 2 === 0) {

                $("#playerCarebear").removeClass("activeplayer");
                $("#playerRainbow").addClass("activeplayer");


            } else {

                $("#playerRainbow").removeClass("activeplayer");
                $("#playerCarebear").addClass("activeplayer");

            }
        },




        CarebearFirst: function(element) {
            if (clickCount % 2 === 0) {
                element.prepend($('<img>', {
                    src: 'images/carebear.jpg'
                }));
            } else {
                element.prepend($('<img>', {
                    src: 'images/rb7.gif'
                }));
            }

        },



        playRainbow: function() {
            console.log('playRainbow')
            clickCount = 0
            $("#playerRainbow").addClass("activeplayer");
            $(".box").html("");
            $(".box").on("click", game.boxTextChangeRainbow);
            $("#playerRainbow").off()
            $("#playerCarebear").off()
        },


        boxTextChangeRainbow: function() {
        $("#playerRainbow").addClass("activeplayer");
        game.toggleRainbow();
        game.RainbowFirst($(this)); // $(this) -> RainbowFirst ($(this)) -> element (this).
        clickCount++;
        $(this).off();
        game.winning();
    },

    toggleRainbow: function() {
        // console.log('toggleRainbow')
        if (clickCount % 2 === 0) {
            $("#playerRainbow").removeClass("activeplayer");
            $("#playerCarebear").addClass("activeplayer");
        } else {
            $("#playerCarebear").removeClass("activeplayer");
            $("#playerRainbow").addClass("activeplayer");
        }
    },




    RainbowFirst: function(element) {
        console.log('RainbowFirst')
        if (clickCount % 2 === 0) {
            element.prepend($('<img>', {
                src: 'images/rb7.gif'
            }));
        } else {
            element.prepend($('<img>', {
                src: 'images/carebear.jpg'
            }));
        }

    },



    addScoreRainbow: function() {
        var score = parseInt($(".rainbowScore").text()) + 1;
        $(".rainbowScore").text(score);
    },



    addScoreCarebear: function() {
        var score = parseInt($(".carebearScore").text()) + 1;
        $(".carebearScore").text(score);

    },

    givePointToWinner: function(box) {

        if (box === '<img src="images/rb7.gif">') {
            $(".whoWon").append("<h2><p>Rainbow Brite you have won!</p></h2>");
            game.addScoreRainbow();
            game.rainbowWin();
            rainbowSong.load();
             rainbowSong.play();

            console.log("Player O Rainbow Brite you have won!");

        } else if (box === '<img src="images/carebear.jpg">') {
            $(".whoWon").append("<h2><p>Care Bear you have won!</p></h2>");
            game.addScoreCarebear();
            game.carebearWin();
            bearSong.load();
            bearSong.play();
            console.log("Player X Care Bear you have won!");
        }
    },




    winning: function() {

        var box1 = $("#box1").html();
        var box2 = $("#box2").html();
        var box3 = $("#box3").html();
        var box4 = $("#box4").html();
        var box5 = $("#box5").html();
        var box6 = $("#box6").html();
        var box7 = $("#box7").html();
        var box8 = $("#box8").html();
        var box9 = $("#box9").html();

        if (box1 === box2 && box2 === box3 && box3 !== "") {
            game.givePointToWinner(box1);
        } else if (box4 === box5 && box5 === box6 && box6 !== "") {
            game.givePointToWinner(box4);
        } else if (box7 === box8 && box8 === box9 && box9 !== "") {
            game.givePointToWinner(box7);
        } else if (box7 === box8 && box8 === box9 && box9 !== "") {
            game.givePointToWinner(box7);
        } else if (box4 === box5 && box5 === box6 && box6 !== "") {
            game.givePointToWinner(box4);
        } else if (box1 === box2 && box2 === box3 && box3 !== "") {
            game.givePointToWinner(box1);
        } else if (box1 === box5 && box5 === box9 && box9 !== "") {
            game.givePointToWinner(box1);
        } else if (box7 === box5 && box5 === box3 && box3 !== "") {
            game.givePointToWinner(box7);
        } else if (box1 === box4 && box4 === box7 && box7 !== "") {
            game.givePointToWinner(box1);
        } else if (box2 === box5 && box5 === box8 && box8 !== "") {
            game.givePointToWinner(box2);
        } else if (box3 === box6 && box6 === box9 && box9 !== "") {
            game.givePointToWinner(box3);
        } else if (clickCount === 9 && $(".box").html() !== "") {
            $(".whoWon").append("<h2><p>It's a DRAW!</p></h2>");
            console.log("It's a DRAW!");
        }
    }

}




$(document).ready(function() {

    game.playMain();
    game.playAgainClick();

});
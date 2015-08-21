var clickCount = 0;



var game = {


        playMain: function() {


            $("#playerO").on("click", function() {
                game.playNought()
            });

            $("#playerX").on("click", function() {
                game.playCross()
            });

        },

        playAgainClick: function() {
            $('.playAgain').unbind("click")
            $('.playAgain').on("click", function() {
                game.playAgain()
            });
        },

        playAgain: function() {
            console.log('playAgain');
            clickCount = 0
            $(".box").html("");
            $(".whoWon").html("");
            $('.playAgain').unbind("click",function(){game.playNought()});
            $('.playAgain').unbind("click",function(){game.playCross()});
            $("#playerO").on("click", function() {
                game.playNought()
            });

            $("#playerX").on("click", function() {
                game.playCross()
            });
            $("#playerX").removeClass("activeplayer");
            $("#playerO").removeClass("activeplayer");
            $('#nyan').remove()
            $('#carebear1').remove()
            $('#rainbow1').remove()
            bearSong.pause();
            rainbowSong.pause();
      

        },

        

        careBearWin: function() { 

                          $('.imagesrainbow1').prepend($('<img>', { style: "position:absolute", id:"nyanOne",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                $('.imagesrainbow1').prepend($('<img>', { style: "position:absolute", id:"nyanTwo",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                       $('.imagesrainbow2').prepend($('<img>', { style: "position:absolute", id:"nyanOne",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                $('.imagesrainbow2').prepend($('<img>', { style: "position:absolute", id:"nyanTwo",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));


            $('.playergallery').prepend($('<img>', { style: "position:relative", id:"carebear1",
                    src: "http://i.imgur.com/EdKFg2d.gif" 
                }));

        },


     rainbowWin: function() {
        $('.imagesrainbow1').prepend($('<img>', { style: "position:absolute", id:"nyanOne",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                $('.imagesrainbow1').prepend($('<img>', { style: "position:absolute", id:"nyanTwo",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                       $('.imagesrainbow2').prepend($('<img>', { style: "position:absolute", id:"nyanOne",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

                $('.imagesrainbow2').prepend($('<img>', { style: "position:absolute", id:"nyanTwo",
                    src: "http://cdn2.business2community.com/wp-content/uploads/2014/08/tumblr_mjphnqLpNy1s5jjtzo1_4004.gif" 
                }));

             $('.playergallery').prepend($('<img>', { style: "position:relative", id:"rainbow1",
                    src: "http://875357559f655c0fd9842374.eventingnation.netdna-cdn.com/wp-content/uploads/2014/11/tumblr_lmqnjjBpZs1qzl5l6o1_500.gif" 
                }));

     },

        


        playCross: function() {

            console.log('playCross');

            clickCount = 0
            $("#playerX").addClass("activeplayer");
            $(".box").html("");
            $(".box").on("click", game.boxTextChangeCross);
            $("#playerX").off();
            $("#playerO").off();
        },


        boxTextChangeCross: function() {
            console.log('boxTextChangeCross');
            $("#playerX").addClass("activeplayer");
            game.toggleCross();
            game.CrossFirst($(this));
            clickCount++;
            console.log(clickCount)
            $(this).off();
            game.winning();


        },

        toggleCross: function() {
            console.log('toggleClass');
            if (clickCount % 2 === 0) {

                $("#playerX").removeClass("activeplayer");
                $("#playerO").addClass("activeplayer");


            } else {

                $("#playerO").removeClass("activeplayer");
                $("#playerX").addClass("activeplayer");

            }
        },




        CrossFirst: function(element) {
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



        playNought: function() {
            console.log('playNought')
            clickCount = 0
            $("#playerO").addClass("activeplayer");
            $(".box").html("");
            $(".box").on("click", game.boxTextChangeNought);
            $("#playerO").off()
            $("#playerX").off()
        },


        boxTextChangeNought: function() {
        $("#playerO").addClass("activeplayer");
        game.toggleNought();
        game.NoughtFirst($(this)); // $(this) -> noughtFirst ($(this)) -> element (this).
        clickCount++;
        $(this).off();
        game.winning();
    },

    toggleNought: function() {
        // console.log('toggleNought')
        if (clickCount % 2 === 0) {
            $("#playerO").removeClass("activeplayer");
            $("#playerX").addClass("activeplayer");
        } else {
            $("#playerX").removeClass("activeplayer");
            $("#playerO").addClass("activeplayer");
        }
    },




    NoughtFirst: function(element) {
        console.log('NoughtFirst')
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



    addScoreNought: function() {
        var score = parseInt($(".oScore").text()) + 1;
        $(".oScore").text(score);
    },



    addScoreCross: function() {
        var score = parseInt($(".xScore").text()) + 1;
        $(".xScore").text(score);

    },

    givePointToWinner: function(box) {

        if (box === '<img src="images/rb7.gif">') {
            $(".whoWon").append("<h2><p>Rainbow Brite you have won!</p></h2>");
            game.addScoreNought();
            game.rainbowWin();
            rainbowSong.load();
             rainbowSong.play();

            console.log("Player O Rainbow Brite you have won!");

        } else if (box === '<img src="images/carebear.jpg">') {
            $(".whoWon").append("<h2><p>Care Bear you have won!</p></h2>");
            game.addScoreCross();
            game.careBearWin();
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
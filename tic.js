

var clickCount = 0 ; 



var game = { 


// ChoosePlayerNoughtOrCross: function() {
// 		$(".playerbox").click(function() {
// 	$(".activeplayer").removeClass("activeplayer")
// 	$(this).addClass("activeplayer")
// 		}; 
// 	},










// noughtOrCross :  function () {
	
// 	 if ( clickCount % 2 === 0) {
// 		return "O";
// 	} else { 
// 		return "X";
// 	}
// }, 

// $( document ).click(function() {
//   $( "#toggle" ).toggle( "highlight" )


	playMain :function () {
	
		$("#playerO").click(function(){game.playNought()}
		);
		$("#playerX").click(function(){game.playCross()}
		);

	},


	// $("#playerO").removeClass("activeplayer");
	// 	$("#playerX").addClass("activeplayer");
	// 	console.log("hi")
		 // 	$("#playerX").removeClass("activeplayer");
		// $("#playerO").addClass("activeplayer");

		// $("#playerO").removeClass("activeplayer");
		// $("#playerX").addClass("activeplayer");

		// (".activeplayer").toggleClass("playerbox", "activeplayer")

	// 		$(".activeplayer").removeClass("activeplayer");
	// 	$(this).addClass("activeplayer");
	// },

 // $(".playerbox").toggleClass("nonactiveplayer", "activeplayer")

 	//  	$("#playerO").removeClass("activeplayer");
		// $("#playerX").addClass("activeplayer");

	playCross : function() {
		clickCount = 0
		$("#playerX").addClass("activeplayer");
		$(".box").html("");

		$(".box").on("click", game.boxTextChangeCross);
	               

	}, 




 boxTextChangeCross : function () {

     game.toggleCross();
	$(this).html(game.CrossFirst());
	clickCount++;
	console.log(clickCount)
	$(this).off();
	game.winning();
	

},

toggleCross : function() {
	
	 if ( clickCount % 2 === 0) {

	 	$("#playerX").removeClass("activeplayer");
		$("#playerO").addClass("activeplayer");
	

		} else { 

	 	$("#playerO").removeClass("activeplayer");
		$("#playerX").addClass("activeplayer");

	}
}, 





	CrossFirst :  function () {
	
	 if ( clickCount % 2 === 0) {

	return "X";
		} else { 
	return "O";
	}
}, 


	playNought: function() {
				clickCount = 0
				$("#playerO").addClass("activeplayer");
		$(".box").html("");
		$(".box").on("click", game.boxTextChangeNought);

},




 
 boxTextChangeNought : function () {
 	$("#playerO").addClass("activeplayer");
     game.toggleNought();
	$(this).html(game.NoughtFirst());
	clickCount++;
	console.log(clickCount)
	$(this).off();
	game.winning();
	},

	toggleNought: function() {
	
	 if ( clickCount % 2 === 0) {

	 		 	$("#playerO").removeClass("activeplayer");
		$("#playerX").addClass("activeplayer");



		} else { 
			
	 				$("#playerX").removeClass("activeplayer");
		$("#playerO").addClass("activeplayer");


	}
}, 



	 NoughtFirst : function() {
	
	 if ( clickCount % 2 === 0) {
		return "O";
	} else { 
		return "X";
	}

}, 





// $("button").click(function(){
//     $("p").toggle();
// });

// 	playAgain: function() {
// 		clickCount = 0
// 		$(".box").html("");
// 		// game.init()
// 		$(".box").on("click", game.boxTextChange);
// 	     $(".play").on("click", game.playAgain);
// },


//  boxTextChange : function () {
    
// 	$(this).html(game.noughtOrCross());
// 	// $(this).toggle( "highlight" )
// 	clickCount++;
// 	console.log(clickCount)
// 	$(this).off();
// 	game.winning();
	

// },


// $( "#toggle" ).toggle( "highlight" )

// init: function () {

// $(".box").on("click", game.boxTextChange);
// $(".play").on("click", game.playAgain);


// },


winning :function () {
	var box1 = $("#box1").html(); 
	var box2 = $("#box2").html(); 
	var box3 = $("#box3").html(); 
	var box4 = $("#box4").html(); 
	var box5 = $("#box5").html();
	var box6 = $("#box6").html(); 
	var box7 = $("#box7").html(); 
	var box8 = $("#box8").html(); 
	var box9 = $("#box9").html(); 

 
	if (box7===box8 && box8===box9 &&  box9 === "O") {
		alert("Player O you have won!");
	
	} else if (box7===box8 && box8===box9 && box9==="X") {
		alert("Player 2 you have won!");
	
	} else if (box4===box5 && box5===box6 && box6==="O") {
		alert("Player O you have won!");
	} else if (box4===box5 && box5===box6 && box6==="X") {
		alert("Player X you have won!");
	} else if (box1===box2 && box2===box3 && box3==="O") {
		alert("Player O you have won!");
	} else if (box1===box2 && box2===box3 && box3==="X") {
		alert("Player X you have won!");
	} else if (box1===box5 && box5===box9 && box9==="O") {
		alert("Player O you have won!");
	} else if (box1===box5 && box5===box9 && box9==="X") {
		alert("Player X you have won!");
	} else if (box7===box5 && box5===box3 && box3==="O") {
		alert("Player O you have won!");
	} else if (box7===box5 && box5===box3 && box3==="X") {
		alert("Player X you have won!");
	} else if (box1===box4 && box4===box7 && box7==="O") {
		alert("Player O you have won!");
	} else if (box1===box4 && box4===box7 && box7==="X") {
		alert("Player X you have won!");
	} else if (box2===box5 && box5===box8 && box8==="O") {
		alert("Player O you have won!");
	} else if (box2===box5 && box5===box8 && box8==="X") {
		alert("Player X you have won!");
	} else if (box3===box6 && box6===box9 && box9==="O") {
		alert("Player O you have won!");
	} else if (box3===box6 && box6===box9 && box9==="X") {
		alert("Player X you have won!");
	} else if (clickCount === 9) {
		alert("IT'S A DRAW!!!!")
	}
	},
} 



$(document).ready(function() {

	game.playMain();

});

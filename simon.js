$(function(){
  var player = []
  var computer = []

  $('#one').on('click',function(){
     logClick($(this));
     computerTurn();
  });

  $('#two').on('click',function(){
     logClick($(this));

  });

  $('#three').on('click',function(){
     logClick($(this));

  });

  $('#four').on('click',function(){
     logClick($(this));

  });





/*-----Functions------*/

   function logClick(box){

     if(typeof box === "number"){

       box = box.toString();
       box = $("."+box);
       var clicked = box;
       $(clicked).addClass("clicked");
       setTimeout(function(){
         $(clicked).removeClass("clicked");
       },150);

       computer.push($(clicked).attr("id"));
       console.log("Computer: " + computer);

     }else {
       setTimeout(function(){
         console.log("logClick: " + box);
         var clicked = box;
         $(clicked).addClass("clicked");
         setTimeout(function(){
           $(clicked).removeClass("clicked");
         },150);

         player.push($(clicked).attr("id"));
          console.log("Player: " +player);

       },500);


     }







   }

   /*
    1.computer chooses a box:done
    2.computer runs logClicked to animate box and save the "click":done
    3.Player turn
    4.Player clicks box(s) the computer clicked.
    5.Player's clicked are compared to each computer's click
    6.if Player's click is equal to computers, Player clicks again.
    7.if Player's click is not equal to computers, Player gets another chance.


   */



   function getRandomInt(min,max) {//random number generator
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


   function computerTurn(){
     var number = getRandomInt(1,5);
     console.log("computerTurn: " +number)

     console.log(number);
     logClick(number);

   }



});

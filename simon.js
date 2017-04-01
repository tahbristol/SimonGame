$(function(){
  var player = [1];
  var computer = [1];




  $('#startGame').on('click',function(){
      computerTurn();
    //  console.log("player: " +player);
    checkStatus(player, computer)

  });

  $('#test').on('click',function(e){
      e.stopPropagation();
    //console.log("player: " +player);
    //console.log("computer: "+ computer);
    checkStatus(player, computer);


  });

  $('#one').on('click',function(){
    var sound = document.getElementById('oneSound');
        sound.play();

           logClick($(this));
        //   console.log("player = " +player + " " +"computer = "+ computer);
        //   console.log(checkStatus());
      });

  $('#two').on('click',function(){
    var sound = document.getElementById('twoSound');
        sound.play();
     logClick($(this));

  });

  $('#three').on('click',function(){
    var sound = document.getElementById('threeSound');
        sound.play();
     logClick($(this));

  });

  $('#four').on('click',function(){
    var sound = document.getElementById('fourSound');
        sound.play();
     logClick($(this));

  });





/*-----Functions------*/

   function logClick(box){

     if(typeof box === "number"){

       box = box.toString();
       box = $("."+box);
       var clicked = box;

       computer.push($(clicked).attr("id"));
       //console.log(computer);
       computer.forEach(function(item){

            $('#'+item).addClass("clicked");


           setTimeout(function(){
             $('#'+item).removeClass("clicked");
           },250);



       });



      // console.log("Computer: " + computer);

     }else {
       setTimeout(function(){
         //console.log("logClick: " + box);
         var clicked = box;
         $(clicked).addClass("clicked");
         setTimeout(function(){
           $(clicked).removeClass("clicked");
         },150);

         player.push($(clicked).attr("id"));
        //  console.log("Player: " +player);

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
     logClick(number);
   }

   function checkStatus(player, computer){
        if(player === undefined || player.length != computer.length){
            console.log(false);
          }else if(player.toString() === computer.toString() && player.toString() != ""){
                console.log("match");
                console.log(true);
              }

            }



  function player(){

  }





});

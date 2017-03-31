$(function(){
  var player = []
  var computer = []

  $('.one').on('click',function(){
     logClick($(this));

  });

  $('.two').on('click',function(){
     logClick($(this));

  });

  $('.three').on('click',function(){
     logClick($(this));

  });

  $('.four').on('click',function(){
     logClick($(this));

  });




   function logClick(box){
     var clicked = box;
     $(clicked).addClass("clicked");
     setTimeout(function(){
       $(clicked).removeClass("clicked");
     },150);
     player.push($(clicked).attr("class"));
     console.log(player);

   }



});

$(function(){
  var player = []
  var computer = []

  $('.one').on('click',function(){
    console.log(player);
    $(this).css('background-color', 'yellow');
    player.push($(this).attr("class"));
    console.log(player);
  });





});

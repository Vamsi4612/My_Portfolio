var btn = $('#button');
// var btn = document.getElementById("#button")
$("#sc").scroll(function() {
    if ($('#sc').scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
   
});


btn.on('click', function(e) {
  e.preventDefault();
  $('#sc').animate({scrollTop:0}, '300');
});


$('.jsx-3cc39d55e1ae0774').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('#sc').animate({scrollTop: scrollTo+'px'}, '300');
  }
});

$('#re').click(function(e){
  e.preventDefault();
  console.log("sjehbfjehf")
  window.open("https://drive.google.com/file/d/1Q4nR4Hmh9qzmFpBrHoaAnJis48AmUP4n/view?usp=sharing", '_blank');
});

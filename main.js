// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = function(){
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//     }
// }



//  $('.active').removeClass('panel');
// $(this).addClass('panel');

$('button').on('click',function(){
  $('button').removeClass('active');
  $(this).addClass('active');
});
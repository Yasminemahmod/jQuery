

$(".open div").on('click', function() {
  $(".close").animate({width: "250px"}, 1000)
  $(".close ul li").fadeIn(700);
  $(".close ul i").fadeIn(700);
})


$(".close .fa-xmark").on('click', function(e) {
  $(".close").animate({width: "0"}, 1000)
  $(".close ul li").fadeToggle(700);
  $(e.target).fadeToggle(700);
})


$(window).scroll(function() { 
  let top = $(window).scrollTop()
  if( top>= 281){
    // $(".open").css("cssText", "color: #D62E33r !important")
    $(".open").removeClass("text-white")
    $(".open").addClass("text-danger")
    $(".open div").css({"background-color":"pink"})
  } else {
    $(".open").addClass("text-white")
    $(".open").removeClass("text-danger")
    $(".open div").css({"background-color":"transparent"})
  }
})




$("#singers h4").each(function (element) {
  $(this).on('click', function(e) {
    $("#singers p").each(function(ele) {
      $(this).slideUp(700)
    })
    console.log($(e.currentTarget).next());
    $(e.currentTarget).next().slideDown(700)
  })
});




let eventDate = new Date('August 1, 2024 18:00:00 GMT+03:00')
let today = new Date()

let daysDef = Math.floor((eventDate.getTime() - today.getTime())/(1000*60*60*24))
let hoursDef = eventDate.getHours() - today.getHours()
let minDef = eventDate.getMinutes() - today.getMinutes()
let secDef = eventDate.getSeconds() - today.getSeconds()


function getDays() {
  if(hoursDef < 0) {
    $(".days").text(`${daysDef - 1} D`)
    hoursDef = 24 + hoursDef
    return hoursDef
  } else {
    $(".days").text(`${daysDef} D`)
  }
}
function getHours() {
  if(minDef < 0) {
    getDays()
    $(".hours").text(`${hoursDef-1} H`)
    minDef = 60 + minDef
    return minDef
  } else {
    getDays()
    $(".hours").text(`${hoursDef} H`)
  }
}
function getMin() {
  if(secDef < 0) {
    getHours()
    $(".min").text(`${minDef-1} M`)
    secDef = 60 + secDef
    return secDef
  } else {
    getHours()
    $(".min").text(`${minDef} M`)
  }
}
function getSec() {
  if(secDef < 0) {
    getMin()
    $(".sec").text(`${secDef-1} s`)
  } else {
    getMin()
    $(".sec").text(`${secDef} s`)
  }
}
getSec()





let startValue = 0;
let value = 100
$(".count").text(value)
$("#msg").on('keyup', function() {
  if($("#msg").val().length > startValue) {
    startValue++;
    value--;
    $(".count").text(value)
    if(value < 0) {
      $(".count").text("your available character finished")
    }
  }
})
$(window).on('load', function() {
  $("#msg").val("")
  $("#name").val("")
  $("#email").val("")
})
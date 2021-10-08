let onPage = 'Home'

$(".play-icon").click(() => {
  if ($(".video").get(0).paused == false) {
    $(".video").get(0).pause();
    $(".play-icon img").attr("src", "assets/icons/pause.svg");
  } else {
    $(".video").get(0).play();
    $(".play-icon img").attr("src", "assets/icons/play.svg");
  }
});

$(".buttons").click(function (e) {
  $(".video-frame").addClass("animate");

  let url = "assets/videos/" + $(this).attr("id") + ".mp4";
  $("#video source").attr("src", url);
  $("#video")[0].load();

  setTimeout(() => {
    $(".video-frame").removeClass("animate");
  }, 1000);

  setTimeout(() => {
    onPage = $(this).attr("id")
    if(onPage=='Home'){
      $("#Home").addClass("hidden")
      $("#Design, #Photography").removeClass("hidden") 
    } else if(onPage=='Design'){
      $("#Design").addClass("hidden") 
      $("#Home, #Photography").removeClass("hidden")
    } else {
      $("#Home, #Design").removeClass("hidden") 
      $("#Photography").addClass("hidden")
    } 
  }, 500);
});

$("#video").mousemove(function() {
  $("#controls").css("display", "flex")
  setTimeout(() => {
    $("#controls").css("display", "none")
  }, 2500);
})
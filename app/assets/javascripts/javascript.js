//js for listing photos
$(document).ready(function(){
	$("#photos").click(function(){
		$("#list_photos").slideToggle();	
	});	
});

$(document).ready(function(){
	$("#photos_1").click(function(){
		$("#list_photos_1").slideToggle();	
	});	
});

$(document).ready(function(){
	$("#foods").click(function(){
		$("#list_foods").slideToggle();
	})
})

$(document).ready(function(){
	$("#foods_1").click(function(){
		$("#list_foods_1").slideToggle();
	})
})

//js for booking button
$(document).ready(function() {
  $("#booking").on("mouseenter", function() {
	// alert("1");
	$('#pop_up').fadeIn('slow');
    // $(this).addClass("highlight");
	//$("#pop_up").animate({marginTop: "-20px"}, 5000);
	// alert($(this).find("#pop_up").prop("id") + ", ");
  });
  $("#booking").on("mouseleave", function() {
    //$(this).removeClass("highlight");
    //$("#pop_up").animate({"top": "0","opacity": "0"}, "fast");
  	$("#pop_up").fadeOut();
	});
});

//js for group photo
$(document).ready(function() {
  $("#group_name").on("click", function() {
	$('#group').slideToggle('slow')
  });
});

//js for photo viewer
$(document).ready(function(){
	$(".fancybox").fancybox();
});

//js for promo video
$(document).ready(function(){
	$("#ad_video").on("click",function(){
		$("#video").slideToggle();
	})
})



/* maps java
$(document).ready(function(){
      $('#world-map').vectorMap();
		});
}); */




$(document).ready(function() {
	$('#logoNvideoBox').css({height:$(window).height()});
	$('#pageWrapper').removeClass('hide');

	 $(".item_bottom").each(function() {

        $(this).appear(function() {

            $(this).delay(200).animate({

                opacity: 1,

                bottom: "0px"

            }, 1e3)

        })

    });

	

	 $(".item_top").each(function() {

        $(this).appear(function() {

            $(this).delay(200).animate({

                opacity: 1,

                top: "0px"

            }, 1e3)

        })

    });

	

	 $(".item_left").each(function() {

        $(this).appear(function() {

            $(this).delay(200).animate({

                opacity: 1,

                left: "0px"

            }, 1e3)

        })

    });

	

	 $(".item_right").each(function() {

        $(this).appear(function() {

            $(this).delay(200).animate({

                opacity: 1,

                right: "0px"

            }, 1e3)

        })

    });

	

	 $(".item_fade").each(function() {

        $(this).appear(function() {

            $(this).delay(200).animate({

                opacity: 1

            }, 1e3)

        })

    });

	

	$('.video-popup').simpleLightboxVideo();





	$(".newsletter form").submit(function (event) {

		event.preventDefault();

		

		var HTTP_PATH = 'http://czartheme.com/';

		var postData = $(this).serialize();

		var status = $(".newsletter .messages-Box");

		status.removeClass('shake');

		$.ajax({

			type: "POST",

			url: "http://czartheme.com/mailchimp/subscription.php",

			data: postData,

			success: function(data) {

				if (data == "success")

					status.html("Thanks for your interest! We will let you know.").slideDown();

				

				else if (data == "subscribed")

					status.toggleClass('shake').html("This email is already subscribed.").slideDown();

				 

				else if (data == "invalid")

					status.toggleClass('shake').html("Whooops !! Looks Like Your Email Address Is Incorrect<br />That’s Ok Even We Make Mistakes .... Sort of !!").slideDown();

				

				else

					status.toggleClass('shake').html("Whooops!! something went wrong!").slideDown();	

				

			},

			error: function () {

				status.toggleClass('shake').html("Whooops!! something went wrong!").slideDown();

			}

		});

		

	});

	
	
	
	$('.ScrollIco').click(function(){
		$('body').animate({scrollTop:$('#zotash-wrap').offset().top}, 500)
	})
	

});


$(window).bind('resize', function() {
	$('#logoNvideoBox').css({height:$(window).height()});
})





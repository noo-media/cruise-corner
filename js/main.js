
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

//Product Gallery

$(document).ready(function() {
    var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});


$(document).ready(function() {
/* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event){
    	event.preventDefault();
    	var content = $('.modal-body');
    	content.empty();
      	var title = $(this).attr("title");
      	$('.modal-title').html(title);      	
      	content.html($(this).html());
      	$(".modal-profile").modal({show:true});
    });
  });



//Modal
$(document).ready(function () {
//Fade in delay for the background overlay (control timing here)
$("#bkgOverlay").delay(5000).fadeIn(400);
//Fade in delay for the popup (control timing here)
$("#delayedPopup").delay(6000).fadeIn(400);
//Hide dialogue and background when the user clicks the close button
$("#btnClose").click(function (e) {
    HideDialog();
    e.preventDefault();
});
});
//Controls how the modal popup is closed with the close button
function HideDialog() {
    $("#bkgOverlay").fadeOut(400);
    $("#delayedPopup").fadeOut(300);
}



//Controls how many times modal shows using COOKIES
/*
$(document).ready(function() {
if ($.cookie('modal_shown') == null) {
    $.cookie('modal_shown', 'yes', { expires: 7, path: '/' });
    $('#bkgOverlay').modal('show');
    }
});
*/
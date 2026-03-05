let clickCount = 0;
$('.mobile_links_wrapper').hide();

$(document).ready(function(){
	$('.menu').click(function(){
        clickCount++;
        if(clickCount%2==0) {
            $('.mobile_links_wrapper').hide();
        }else{
            $('.mobile_links_wrapper').show();
        }
	});
});
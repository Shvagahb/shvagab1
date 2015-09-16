$(function(){ /* to make sure the script runs after page load */
	$('.item .more_text').hide();
    $('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.item').find('.more_text').toggle(); /* show the .more_text span */

    });

window.onresize = function(event) {
   
	// if(window.innerWidth < 441) {
	// 	var x = document.getElementsByClassName("h6a");
	// 	for(i=0; x.length<11; i++) {
	// 		if(i>3) {
	// 			x[i].innerHTML = text;
	// 		}
	// 	}
	// }
			console.log("snoop drizzlely"); 
   
};

});

$(function(){ /* to make sure the script runs after page load */
	$('.item .more_text').hide();
    $('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.item').find('.more_text').toggle(); /* show the .more_text span */

    });
var x = document.getElementsByClassName("h6a");

window.onresize = function(event) {
console.log(window.innerWidth);   
	if(window.innerWidth < 662) {

		for(i=4; i<11; i++) {
			if(i>3 && i<9) {
				x[i].innerHTML + "<br>";
			}
		}
	}
			// console.log(x); 
   
};

});

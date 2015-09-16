$(function(){ /* to make sure the script runs after page load */
	$('.item .more_text').hide();
    $('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.item').find('.more_text').toggle(); /* show the .more_text span */

    });
var x = document.getElementsByClassName("h6a");
console.log(x);
var breakString = "<br>";

window.onresize = function(event) {
	if(window.innerWidth < 662) {
		for(i=3; i<11; i++) {
			if(i>2 && i<9 && x[i].innerHTML.indexOf(breakString) == -1) {
				console.log("if2nd");
				x[i].innerHTML += "<br>";
			}
		}
	}else {
		console.log("else ran");
		for(i=3; i<11; i++) {
			console.log("forelseran");
			x[i].innerHTML.replace(/<br\s*\/?>/ig, '');
		}
	}
			// console.log(x); 
   
};

});

$(function(){ /* to make sure the script runs after page load */
	$('.item .more_text').hide();
    $('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.item').find('.more_text').toggle(); /* show the .more_text span */

    });
var x = document.getElementsByClassName("h6a");
// for(i=0; i>3, i++) {
// 	if(x.length>3) {
// 		parent.insertAfter(brk, parent.firstChild);
// 	}
// }
console.log(x.length);    
// var brk = document.createElement('br');
// var parent = document.getElementById('grad');
// parent.insertAfter(brk, parent.firstChild);

});

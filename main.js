(function() {


var co = $('span.co').each(function(){
	$('<blockquote></blockquote>', {
		class: "co",
		text: $(this).text()})
				.prependTo($(this).closest('p'));

	// $(this).closest('p').prepend('ola bitches');
});


})();
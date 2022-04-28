jQuery(document).ready(function($) {
	var clipboard = new ClipboardJS( '.js-copytext' );

	clipboard.on('success', function(e) {
	    // console.info('Action:', e.action);
	    // console.info('Text:', e.text);
	    // console.info('Trigger:', e.trigger);

	    // e.clearSelection();
	    console.log( e );
	    $( e.trigger ).text( 'Hotovo!' );
	});

	// clipboard.on('error', function(e) {
	//     console.error('Action:', e.action);
	//     console.error('Trigger:', e.trigger);
	// });
});
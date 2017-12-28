(function ($) {
	// $(document).foundation();
})(jQuery);

jQuery(document).ready(function($) {

	/*
	* Initialize Foundation Sites plugins
	*/

	// $(document).foundation();

	/*
	* SVG 4 everybody
	*/

	// svg4everybody({
	//     polyfill: true // polyfill <use> elements for External Content
	// });

	// Try to detect devices with form jumpy behavior
	var iosClass = 'js-ios-detected';
	var md = new MobileDetect(window.navigator.userAgent);


	if ( md.userAgent() && md.os() ) {
		console.log( md.userAgent() );       // looking for 'Safari'
		console.log( md.os() );              // looking for 'iOS'

		if ( ( md.userAgent() === 'Safari' ) && ( md.os() === 'iOS' ) ) {
			$( '.js-body' ). addClass( iosClass );
		}
	}



	//button to show form anyway on an iOs device
	$( '.js-show-form' ).on( 'click touch', function( e ) {
		console.log( 'show form' );
		$( '.js-body' ).removeClass( iosClass );
	});


});

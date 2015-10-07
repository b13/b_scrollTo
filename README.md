# b_scrollTo
Minimal js scrolling module.

## Installation via bower
	 bower install b_scrollTo -S

## Usage

### Use it as AMD module

	//Scroll to window y-position of 300px.
	require(['b_scrollTo']){
		$.scrollToPixel(300);
	};

### Scroll the window to a defined pixel height

	//With default animation duration of 500ms.
	$.scrollToPixel(100);
	
	//With specific animation duration of 1s.
	$.scrollToPixel(100, 1000);
	
	//If it should not be animated
	$.scrollToPixel(100, 0);
	//OR
	$.scrollToPixel(100, false);
	
	
### Scroll to the top edge of an element

	$.scrollTo(element);
	//OR
	$(element).scrollTo();
	
	//With a specific animation duration of 300ms.
	$.scrollTo(element, 300);
	//OR
	$(element).scrollTo(300);
	
	
	//Without animation
	$.scrollTo(element, 0);
	//OR
	$.scrollTo(element, false);
	//OR
	$(element).scrollTo(0);
	//OR
	$(element).scrollTo(false);
	
	
	//With a specific offset and the default duration. E.g. if you have an header with an height of 300px.
	$.scrollTo(element, null, 300);
	//OR
	$(element).scrollTo(null, 300);
	
### Reacting calling a function after the scrolling has finished.

	$.scrollToPixel(400).done(function(){
		//Do something . . .
	});
	



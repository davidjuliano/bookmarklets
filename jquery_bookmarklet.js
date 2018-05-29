function action() {
	function runWithJQuery(jQueryCode) {
		if(window.jQuery) {
			jQueryCode();
		}
		else {   
			var script = document.createElement('script'); 
			script.type = 'text/javascript';
			script.src = "http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
			script.onload = jQueryCode;
			document.head.appendChild(script);  
		}
	}
	
	function bookmarklet() {
		var el_body = $('body');
		el_body.css('background-color', '#cffc88');
	}
	
	runWithJQuery(action)
}

(function copy_link() {
	var el_story_id = $('[id*="story-id"]');
	var story_id = el_story_id.attr('value');
	var el_permalink = $('[id*="story-permalink"]');
	var permalink = el_permalink.attr('value');
	
	var link = '[[ch' + story_id + ']](' + permalink + ')';
	el_story_id.attr('value', link);
	el_story_id.select();
	document.execCommand('copy');
	el_story_id.attr('value', story_id);
	el_story_id.css('background-color', '#cffc88')
	el_permalink.css('background-color', '#cffc88')
})()


javascript:(function(){var c=$('[id*="story-id"]'),a=c.attr("value"),t=$('[id*="story-permalink"]'),o="[[ch"+a+"]]("+t.attr("value")+")";c.attr("value",o),c.select(),document.execCommand("copy"),c.attr("value",a),c.css("background-color","#cffc88"),t.css("background-color","#cffc88")})();

function runWithJQuery(jQueryCode) {
	if(window.jQuery) {
		jQueryCode();
	}
	else {   
		var script = document.createElement('script'); 
		script.type = 'text/javascript';
		script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
		script.onload = jQueryCode;
		document.head.appendChild(script);  
	}
}

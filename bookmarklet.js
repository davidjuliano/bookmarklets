function bookmarklet() {
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
}

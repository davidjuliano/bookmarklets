use URI::Escape;

$file = @ARGV[0];
$minified = `uglifyjs $file -cm`;
$escaped = uri_escape($minified);
$wrapped = "javascript:($escaped)()";
$link = "<a href=\"$wrapped\">bookmarklet</a>";

print "javascript:($minified)()\n\n";
print "$link\n\n";

# $outfile = 'bookmarklet.min.js';
# open (FILE, ">$outfile") || die "problem opening $outfile\n";
# print FILE "$wrapped\n";
# close(FILE);

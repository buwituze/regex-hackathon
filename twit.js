function twitter() {
    
var twitterRegex = /@\w+/;

var usrnm = "Hey, check out my Twitter: @username123";

var matches = usrnm.match(twitterRegex);

if (matches) {
    console.log(matches[0]);
} else {
    console.log("No Twitter username found.");
}
}
twitter();

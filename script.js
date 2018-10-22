/*Post Conversion Algorithm
Convert to Twitter
OnePostt
10/22/2018
By Jason Cardinale
*/

/*Convert to Twitter

*/

var heading = "This is a test post";
var post = "This test post will test several aspects of the ideal post conversion Algorithm. \
            The user input will first be separated into individual sentences. \
            Then those sentences will be stored in arrays. For this specific instance \
            of the conversion algorithm I will be converting input from the OnePostt text \
            editor to a Tweet. This means that the post must be under 280 characters. \
            The algorithm must be able to pick out the most significant sentences or portions \
            of the post so that the total character count does not exceed 280. However, \
            when the chosen sentences are concatened they must still make logical and \
            grammatical sense.";

var sentences = [];
var words = [];


function convert() {
  var len = post.length();
  sentences = post.split(".");
  for(var i = 0; i < len; i++) {
    words[i] = sentences[i].split(" ");
  }
}

console.log("")

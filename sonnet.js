
//////////Take the contents of the sonnet div and place it in a variable
var sonnetText = document.getElementById("sonnet").innerHTML;
console.log("sonnetText", sonnetText);

//////////Find and output the starting position of the word "orphans"
console.log("The starting position for 'orphans' is @", sonnetText.indexOf("orphans"));
document.getElementById("results").innerHTML = `${"The starting position for 'orphans' is @ " + sonnetText.indexOf("orphans")}`;

//////////Output the number of characters in the sonnet
console.log("The number of characters in Sonnet is ", sonnetText.length );
document.getElementById("results").innerHTML += `<div>${"The number of characters in Sonnet is " + sonnetText.length}<div>`;

//////////Replace the first occurance of the string "winter" with "yuletide"
var newSonnetText = sonnetText.replace("winter", "YULETIDE");
console.log("Our newSonnetText is ", newSonnetText);

//////////Replace all occurances of the string "the" with "a large"
var newNewSonnetText = newSonnetText.replace(/the/g, "A LARGE");
console.log("Our newNewSonnetText is ", newNewSonnetText);

//////////Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = newNewSonnetText;

////////// EXTRA - added extra sonnet with additional "newNew" too
// document.getElementById("sonnet").innerHTML += `<hr/>${newNewSonnetText}`;

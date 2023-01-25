// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let image = document.querySelector(".display-image");
let songName = document.querySelector(".display-song");
let artist = document.querySelector(".display-artist");
let songLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let image = ["https://i.discogs.com/F0KYExH4dWEGliOjgGv3B6L8njve-_GAhj7uZpjCBbA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzMy/MTI0LTE1NDQ3OTI3/NjEtNTk5My5qcGVn.jpeg","https://upload.wikimedia.org/wikipedia/en/2/29/Disclosure_-_Latch_%28feat._Sam_Smith%29.png","https://i.scdn.co/image/ab67616d0000b273ff5429125128b43572dbdccd","https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png","https://upload.wikimedia.org/wikipedia/en/d/de/Say_It_Right.png"];
let songName = ["Tongue Tied","Latch","Love On Top","Back To Black","Say It Right"];
let artist = ["Grouplove","Disclosure,Sam Smith","Beyonce","Amy Winehouse","Nelly Furtado"];
let songLink = ["https://www.youtube.com/watch?v=UCcGuJzewCo","https://www.youtube.com/watch?v=NoL-V7QPVaE","https://www.youtube.com/watch?v=HzC9X_O7bJQ","https://www.youtube.com/watch?v=HzC9X_O7bJQ","https://www.youtube.com/watch?v=4Q4Gy2Z7xZ0","https://www.youtube.com/watch?v=UyHUvm8T6CY"];
//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();

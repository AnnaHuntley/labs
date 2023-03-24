
let lyrics = "";

for (let i = 99; i > 0; i--) {
	lyrics += i + " bottles of beer on the wall, " + i + " bottles of beer.<br>";
	if (i > 1) {
		lyrics += "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.<br><br>";
	} else {
		lyrics += "Take one down and pass it around, no more bottles of beer on the wall.<br><br>";
	}
}

lyrics += "No more bottles of beer on the wall, no more bottles of beer.<br>";
lyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.";

document.getElementById("lyrics").innerHTML = lyrics;

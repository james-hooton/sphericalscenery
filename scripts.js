const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good morning 🌅";
} else if (time < 17) {
  greeting = "Good afternoon 🌤";
} else {
  greeting = "Good evening 🌃";
}
document.getElementById("demo").innerHTML = greeting;
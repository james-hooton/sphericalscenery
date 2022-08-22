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

// Toggle Switch

function toggleCheck() {
  if(document.getElementById("myCheckbox").checked === true){
    map.fitBounds(featureGroup.getBounds())
  } else {
    map.locate({setView: true, maxZoom: 16});
  }
}
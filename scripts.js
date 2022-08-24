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
    if(document.getElementById("myCheckbox").checked === false){
      setInterval(function(){ 
        map.fitBounds(featureGroup.getBounds())
    }, 1000);
  } else {
    map.locate({setView: true, maxZoom: 16});
  }
}

function getToggle () {
  setInterval(toggleCheck, 1000);
}
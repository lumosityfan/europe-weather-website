const { renderToReadableStream } = require("react-dom/server");

document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    if (!event.target.matches("#weather")) return;

    var product = "civil"
    var output = "json"
    var lon = 50
    var lat = 50

    fetch(`http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=${product}&output=${output}`)
      .then((response) => response.json())
      .then((data) => renderData(data))
      .catch(() => console.log("Error"));
});

function renderData(data) {
  
}
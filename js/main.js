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
  const day_one = document.getElementById("day_one");
  const day_two = document.getElementById("day_two");
  const day_three = document.getElementById("day_three");
  const day_four = document.getElementById("day_four");
  const day_five = document.getElementById("day_five");
  const day_six = document.getElementById("day_six");
  const day_seven = document.getElementById("day_seven");
  day_one.innerHTML = "Day One"
  day_two.innerHTML = "Day Two"
  day_three.innerHTML = "Day Three"
  day_four.innerHTML = "Day Four"
  day_five.innerHTML = "Day Five"
  day_six.innerHTML = "Day Six"
  day_seven.innerHTML = "Day Seven"
  console.log(data)
  showCloudCover(data.dataseries[7]["cloudcover"], "One");
  showCloudCover(data.dataseries[15]["cloudcover"], "Two");
  showCloudCover(data.dataseries[23]["cloudcover"], "Three");
  showCloudCover(data.dataseries[31]["cloudcover"], "Four");
  showCloudCover(data.dataseries[39]["cloudcover"], "Five");
  showCloudCover(data.dataseries[47]["cloudcover"], "Six");
  showCloudCover(data.dataseries[55]["cloudcover"], "Seven");
}

function showCloudCover(coverAmount, number){
  const cloudCover = document.getElementById("cloudCover" + number);
  switch(coverAmount) {
    case 1:
      cloudCover.innerHTML = '<img src="./images/clear.png">';
      break;
    case 2:
      cloudCover.innerHTML = '<img src="./images/clear.png">';
      break;
    case 3:
      cloudCover.innerHTML = '<img src="./images/pcloudy.png">';
      break;
    case 4:
      cloudCover.innerHTML = '<img src="./images/pcloudy.png">';
      break;
    case 5:
      cloudCover.innerHTML = '<img src="./images/pcloudy.png">';
      break;
    case 6:
      cloudCover.innerHTML = '<img src="./images/mcloudy.png">';
      break;
    case 7:
      cloudCover.innerHTML = '<img src="./images/mcloudy.png">';
      break;
    case 8:
      cloudCover.innerHTML = '<img src="./images/cloudy.png">';
      break;
    case 9:
      cloudCover.innerHTML = '<img src="./images/cloudy.png">';
      break;
    default:
      cloudCover.innerHTML = '<img src="./images/clear.png">';
      break;
  }
}
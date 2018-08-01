//pans to the country in the text area
function search(){
  //saves user search in variable searchInput
  var searchInput = document.getElementById("search").value;

  var query = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name="+ searchInput"%20college&api_key=6wFglfPgXsvO05HxlOFEXxMuUB2XwGTdy4WMdsqg"

  //replaces %20 with a space
  query= query.replace(/ /g, "%20");
  alert(query); //shows the url

  //Creating a HTTP GET request from our query url
  var request = new XMLHttpRequest();
  request.open('GET', query, false);

  //sending request
  request.send();

  //error check if input is in database
  if (request.readyState != 4 || request.status != 200 || request.responseText == "") {
    window.console.error("Sorry, we couldn't find that college. Try again.");
  }

  //showing us constant status updates, alerts for humans to check
  alert("Ready State:"+ request.readyState);
  alert("Status:"+ request.status);
  alert("Response:"+ request.responseText);

  var collegeinfo = JSON.parse(request.responseText);
  alert(collegeinfo);
  //declaring lon and lat of user input
  var lon = countryInformation[0].latlng[1]
  var lat = countryInformation[0].latlng[0]

});
}

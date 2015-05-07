// JavaScript source code
window.onload = function () {
	
req.open("GET",url);
req.send();
}

var req = new XMLHttpRequest();
var url = "http://www.google.com/calendar/feeds/luikerki-calendar@gmail.com/public/full?alt=json-in-script&callback=insertAgenda&orderby=starttime&max-results=15&singleevents=true&sortorder=ascending&futureevents=true"

req.addEventListener("load", requestLoaded, false);


function requestLoaded(response) {
    var res = response;
}

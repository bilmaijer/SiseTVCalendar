// JavaScript source code
window.onload = function () {
	
req.open("GET",url);
req.send();
}

var req = new XMLHttpRequest();
var key = "AIzaSyDE_JvtqCn80h0oV0TlrXEYaeJbbHLo8Fo";
var id = "vkfojt5isnllkunl2itskbl2d0@group.calendar.google.com";
var url = "https://www.googleapis.com/calendar/v3/calendars/" + id +"/events?key=" + key;

req.addEventListener("load", requestLoaded, false);


function requestLoaded(response) {
    var res = response;
}
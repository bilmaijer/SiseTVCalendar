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


    var events = [];
function requestLoaded(response) {
    var res = JSON.parse(response.currentTarget.response);
    
    //var event = [];
    
    //event.push(res.items);
    var time = (res.items)[0].start.dateTime;
    var name = (res.items)[0].summary;
    console.log(time);
    console.log(name);
}

var myApp = angular.module("myApp", []);

myApp.controller('CalendarItemsCtrl', function($scope){
    $scope.CalendarItems = [{name: "test1"},{name: "test2"}];
});

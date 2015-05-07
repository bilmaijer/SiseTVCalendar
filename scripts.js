// JavaScript source code

var myApp = angular.module("myApp", ['angular.filter']);

myApp.controller('CalendarItemsCtrl', function ($scope, $http) {
    $scope.CalendarItems = [];

    var req = new XMLHttpRequest();
    var key = "AIzaSyDE_JvtqCn80h0oV0TlrXEYaeJbbHLo8Fo";
    var id = "vkfojt5isnllkunl2itskbl2d0@group.calendar.google.com";
    var timeNow = new Date();
    //min end time
    var timeMin = timeNow.toISOString();
    var requrl = "https://www.googleapis.com/calendar/v3/calendars/" + id + "/events?timeMin=" + timeMin + "&key=" + key;

    $http({method: "GET", url: requrl}).success(
            function (data, status, headers, config) {
                data.items.forEach(function (item) {
                    var dateTime = new Date(item.start.dateTime);
                    var time = dateTime.getHours() + ":" + dateTime.getMinutes();
                    var date = weekday[dateTime.getDay()] + ", " + month[dateTime.getMonth()] + " " + dateTime.getDate();
                    var name = item.summary;
                    var event = time + " - " + name;
                    $scope.CalendarItems.push({date: date, event: event});
                });
            });
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

});


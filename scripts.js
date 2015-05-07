// JavaScript source code

var myApp = angular.module("myApp", []);

myApp.controller('CalendarItemsCtrl', function($scope, $http){
        $scope.CalendarItems = [];
        
        var req = new XMLHttpRequest();
        var key = "AIzaSyDE_JvtqCn80h0oV0TlrXEYaeJbbHLo8Fo";
        var id = "vkfojt5isnllkunl2itskbl2d0@group.calendar.google.com";
        var requrl = "https://www.googleapis.com/calendar/v3/calendars/" + id +"/events?key=" + key;

        $http({method:"GET", url: requrl}).success(
                function(data, status, headers, config) {
                    data.items.forEach(function(item){
                        var dateTime = new Date(item.start.dateTime);
                        var time = dateTime.getHours() + ":" + dateTime.getMinutes();
                        var date = dateTime.getDate() + " " + dateTime.getMonth();
                        var name = item.summary;
                        $scope.CalendarItems.push({time: time, name: name, date: date});
                    });
                });
    });  


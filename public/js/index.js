var app = angular.module('app', []);
app.controller('AppCtrl', function AppCtrl($scope,$location) {
    var vm = this;
    vm.socket = io();


    vm.socket.on('ServerHandshake', function(data) {
        vm.serverGrt = data.serverGreeting;
        $scope.$apply(function() {
            vm.sio = "Socket.io working!";
        });
    });

    vm.GoToQueries = function(){
      location.assign('query1.html');
    }
});

var app = angular.module('app', []);
app.controller('AppCtrl', function AppCtrl($scope) {
    var vm = this;
    vm.socket = io();
    vm.bs = "Bootstrap 4 working!";
    vm.angular = "Angular 1.5.11 working!";
    vm.ndjs = "NodeJS working!";

    vm.socket.on('ServerHandshake', function(data) {
        vm.serverGrt = data.serverGreeting;
        $scope.$apply(function() {
            vm.sio = "Socket.io working!";
        });
    });
});

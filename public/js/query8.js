var app = angular.module('app', []);
app.controller('AppCtrl', function AppCtrl($scope, $location, $http) {
  var vm = this;
  vm.socket = io();
  vm.queries = [];
  vm.arrow=true;
  $http.get('http://192.168.0.12:3000/queries/8')
  .then(function(response) {
        vm.data = response.data;
        for (var i = 0; i < vm.data.length; i++) {
          vm.queries.push({index: i+1, name: vm.data[i].name});
          vm.queriesArray(1);
        }
    });

  vm.socket.on('ServerHandshake', function(data) {
    vm.serverGrt = data.serverGreeting;
    $scope.$apply(function() {
      vm.sio = "Socket.io working!";
    });
  });

  vm.page = 1;
  vm.total = 12;

  vm.incrementPage = function(page) {
    if (vm.page < 1) {
      vm.page = page + 1;
      vm.queriesArray(vm.page);
    }
  }

  vm.decrementPage = function(page) {
    if (vm.page > 1) {
      vm.page = page - 1;
      vm.queriesArray(vm.page);
    }
  }

  vm.queriesArray = function(page) {
    vm.page = page;
    vm.array = [];
    if (page * 50 < vm.total) {
      for (var i = 0; i < 50; i++) {
        vm.array.push(vm.queries[i + (page - 1) * 50]);
      }
    } else {
      for (var i = 0; i < (vm.total - (page - 1) * 50); i++) {
        vm.array.push(vm.queries[i + (page - 1) * 50]);
      }
    }
  }

  vm.previous = function(){
    location.assign('query7.html');
  }

  vm.next = function(){
    location.assign('query9.html');
  }
});

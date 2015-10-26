var app = angular.module('shuffling', []);

app.controller('FormController', [function(){

    var vm = this;

    vm.guests = [];

    this.register = function(){



        console.log('register');

        // Add the guest to the array
        vm.guests.push({
            name: vm.guestName,
            transitionDate: vm.transitionDate,
            entryDate: new Date(),
            action: vm.action,
            pickupLocation: vm.location
        });
        console.log(vm.guests);

        // Empty values
        delete vm.guestName;
        delete vm.transitionDate;
        delete vm.entryDate;
        delete vm.action;
        delete vm.location;

        // Redirect to tab 2
        //vm.tab = 2;
        // I think i need a service for this


        };

}]);

app.controller('TabController', [function(){

    var vm = this;

    // Init on first tab
    vm.tab = 1;

}]);

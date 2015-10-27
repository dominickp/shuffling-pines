var app = angular.module('shuffling', []);

app.controller('FormController', [function(){

    var vm = this;

    vm.updateGuests = function() {
        localStorage.setItem('appGuests', JSON.stringify(this.guests));
        console.log('tests');
        console.log(vm.guests);
    };

    // initialize
    vm.guests = JSON.parse(localStorage.getItem('appGuests')) || [];
    vm.updateGuests();



    vm.register = function(){


        //console.log('register');
        //
        //// Add the guest to the array
        //console.log(vm.guests);

        vm.guests.push({
            name: vm.guestName,
            transitionDate: vm.transitionDate,
            entryDate: new Date(),
            action: vm.action,
            pickupLocation: vm.location
        });
        vm.updateGuests();

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

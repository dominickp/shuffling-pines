var app = angular.module('shuffling', []);

app.controller('FormController', [function(){

    var vm = this;

    vm.updateGuests = function() {
        localStorage.setItem('appGuests', JSON.stringify(this.guests));
        console.log(vm.guests);
    };

    // initialize
    var exampleGuests = [
        {name:'Bob Ross', transitionDate:new Date(), action:'pickup', pickupLocation:'Alaska'},
        {name:'Shotaro Kaneda', transitionDate:new Date(), action:'pickup', pickupLocation:'Neo Tokyo'},
        {name:'James Randi', transitionDate:new Date(), action:'pickup', pickupLocation:'Georgia'}
    ];
    vm.guests = JSON.parse(localStorage.getItem('appGuests')) || exampleGuests;
    vm.updateGuests();

    vm.register = function(){

        // Add the guest to the array

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

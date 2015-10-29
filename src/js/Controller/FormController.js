angular.module('shuffling').controller('FormController', ['Guest', 'Tab', function(GuestSvc, TabSvc){

    var vm = this;

    vm.guest = GuestSvc;

    vm.register = function(){
        GuestSvc.addGuest({
            name: vm.guestName,
            transitionDate: vm.transitionDate,
            entryDate: new Date(),
            action: vm.action,
            pickupLocation: vm.location
        });

        // Empty values
        delete vm.guestName;
        delete vm.transitionDate;
        delete vm.entryDate;
        delete vm.action;
        delete vm.location;

        // Set tab to view guests
        TabSvc.setCurrentTab(2);
    };

}]);
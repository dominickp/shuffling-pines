angular.module('shuffling').controller('FormController', ['Guest', 'Tab', '$window', function(GuestSvc, TabSvc, $window){

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

    vm.updateGuestStatus = function(guest_key, status){
        GuestSvc.setGuestStatus(guest_key, status);
        console.log('FormController');
    };

    vm.removeGuest = function(guest_key, overrideConfirm){
        if(overrideConfirm === true){
            GuestSvc.removeGuest(guest_key);
        } else {
            if ($window.confirm('Are you sure you want to remove this guest?')) {
                GuestSvc.removeGuest(guest_key);
            } else {
                console.log('Denied confirmation.');
            }
        }

    };

}]);
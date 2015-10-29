var app = angular.module('shuffling', []);

app.controller('FormController', ['Guest', function(GuestSvc){

    var vm = this;

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
    };

}]);

app.controller('TabController', [function(){

    var vm = this;

    // Init on first tab
    vm.tab = 1;

}]);

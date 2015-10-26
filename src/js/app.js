var app = angular.module('shuffling', [])
    .controller('FormController', [function(){

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


            };

    }])
    .controller('TabController', [function(){

        var vm = this;

        // Init on first tab
        vm.tab = 1;

    }]);

describe('FormController', function(){

    //angular.mock.module
    beforeEach(module('shuffling'));

    var formController, GuestSvc, TabSvc;

    //angular.mock.inject
    beforeEach(angular.mock.inject(function($controller){
        formController = $controller('FormController');
    }));

    beforeEach(function(){
        inject(function($injector) {
            GuestSvc = $injector.get('Guest');
            TabSvc = $injector.get('Tab');
        });
    });


    describe('Guest registration', function(){

        beforeEach(function(){
            GuestSvc.guests = [];

            formController.guestName = 'John Harvard';
            formController.transitionDate = new Date();
            formController.entryDate = new Date();
            formController.action = 'dropoff';
            formController.location = 'Anywhere';

            formController.register();
        });

        it('should register a new guests', function(){
            expect(GuestSvc.guests[0].name).toBe('John Harvard');
        });

        it('should clear the values after doing so', function(){
            expect(formController.guestName).toBeUndefined();
            expect(formController.transitionDate).toBeUndefined();
            expect(formController.entryDate).toBeUndefined();
            expect(formController.action).toBeUndefined();
            expect(formController.location).toBeUndefined();
        });

        it('should change tabs after doing so', function(){
            expect(TabSvc.current_tab).toBe(2);
        });
    });


    describe('Guest modification', function(){

        var ExampleGuests;
        var $mockedWindow;

        beforeEach(function(){
            inject(function($injector, $window) {
                ExampleGuests = $injector.get('ExampleGuests');
                $mockedWindow = $window;
            });

            GuestSvc.guests = ExampleGuests;

        });

        it('should be able to mark a drop-off to arrived', function(){
            var guest_id = 1;
            var startAction = GuestSvc.guests[guest_id].action;
            var newStartAction = 'arrived';

            formController.updateGuestStatus(guest_id, newStartAction);

            expect(startAction).toBe('dropoff');
            expect(GuestSvc.guests[guest_id].action).toBe(newStartAction);
            expect(GuestSvc.guests[guest_id].action).not.toBe(startAction);
        });

        it('should be able to mark a pickup to arrived', function(){
            var guest_id = 2;
            var startAction = GuestSvc.guests[guest_id].action;
            var newStartAction = 'arrived';

            formController.updateGuestStatus(guest_id, newStartAction);

            expect(startAction).toBe('pickup');
            expect(GuestSvc.guests[guest_id].action).toBe(newStartAction);
            expect(GuestSvc.guests[guest_id].action).not.toBe(startAction);
        });

        it('should be able to mark an arrived to pickup', function(){
            var guest_id = 0;
            var startAction = GuestSvc.guests[guest_id].action;
            var newStartAction = 'pickup';

            formController.updateGuestStatus(guest_id, newStartAction);

            expect(startAction).toBe('arrived');
            expect(GuestSvc.guests[guest_id].action).toBe(newStartAction);
            expect(GuestSvc.guests[guest_id].action).not.toBe(startAction);
        });

        it('shouldn\'t remove an existing guest without confirmation', function(){
            var guestCount = GuestSvc.guests.length;
            formController.removeGuest(0);
            expect(GuestSvc.guests.length).toBe(guestCount);
        });

        it('should remove an existing guest with confirmation', function(){
            var guestCount = GuestSvc.guests.length;
            // Overriding confirm() dialog window
            formController.removeGuest(0, true);
            $mockedWindow.confirm('OK');
            expect(GuestSvc.guests.length).toBe(guestCount-1);
        });
        
    });



});
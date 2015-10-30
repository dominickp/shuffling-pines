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

    it('should register a new guests', function(){

        GuestSvc.guests = [];

        formController.guestName = 'John Harvard';
        formController.transitionDate = new Date();
        formController.entryDate = new Date();
        formController.action = 'dropoff';
        formController.location = 'Anywhere';

        formController.register();

        expect(GuestSvc.guests[0].name).toBe('John Harvard');

        it('should clear the values after doing so', function(){
            expect(formController.guestName).toBeNull();
            expect(formController.transitionDate).toBeNull();
            expect(formController.entryDate).toBeNull();
            expect(formController.action).toBeNull();
            expect(formController.location).toBeNull();
        });

        it('should change tabs after doing so', function(){
            expect(TabSvc.current_tab).toBe(2);
        });
    });

});
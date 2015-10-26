describe('FormController', function(){

    //angular.mock.module
    beforeEach(module('shuffling'));


    var formController;

    //angular.mock.inject
    beforeEach(angular.mock.inject(function($controller){
        formController = $controller('FormController');
    }));


    it('should register a new guests', function(){

        formController.guestName = 'John Harvard';
        formController.transitionDate = new Date();
        formController.entryDate = new Date();
        formController.action = 'dropoff';
        formController.location = 'Anywhere';

        formController.register();

        expect(formController.guests[0].name).toBe('John Harvard');
    });
});
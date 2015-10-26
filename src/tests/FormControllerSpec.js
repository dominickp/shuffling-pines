describe('FormController', function(){

    //angular.mock.module
    beforeEach(module('shuffling'));


    var formController;

    //angular.mock.inject
    beforeEach(angular.mock.inject(function($controller){
        formController = $controller('FormController');
    }));


    it('should register guests', function(){
        expect(true).toBe(true);
    });
});
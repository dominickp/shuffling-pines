describe('Tab', function(){

    //angular.mock.module
    beforeEach(module('shuffling'));

    var GuestSvc;

    beforeEach(function(){
        inject(function($injector) {
            GuestSvc = $injector.get('Guest');
        });
    });

    it('should load some guests on init if localStorage is empty', function(){
        localStorage.clear();
        expect(GuestSvc.guests.length).toBeGreaterThan(0);
    });

    it('should add a new guest', function(){
        var guestCount = GuestSvc.guests.length;
        GuestSvc.addGuest({name:'David Spade', transitionDate:new Date(), action:'pickup', pickupLocation:'NY'});
        expect(GuestSvc.guests.length).toBe(guestCount+1);
    });

    it('should remove an existing guest', function(){
        var guestCount = GuestSvc.guests.length;
        GuestSvc.removeGuest(0);
        expect(GuestSvc.guests.length).toBe(guestCount-1);
    });


});
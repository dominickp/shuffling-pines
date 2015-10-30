describe('Tab', function(){

    //angular.mock.module
    beforeEach(module('shuffling'));

    var GuestSvc;

    beforeEach(function(){
        //module($provide.service)
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

    it('should update the action of an existing guest', function(){
        var startAction = GuestSvc.guests[0].action;
        var newStartAciton = 'some_other_action';
        GuestSvc.setGuestStatus(0, newStartAciton);
        expect(GuestSvc.guests[0].action).toBe(newStartAciton);
        expect(GuestSvc.guests[0].action).not.toBe(startAction);
    });


});
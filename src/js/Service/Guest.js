angular.module('shuffling').service('Guest', ['ExampleGuests', function(ExampleGuests){
    var svc = this;

    svc.updateGuests = function() {
        localStorage.setItem('appGuests', JSON.stringify(svc.guests));
        console.log(svc.guests);
    };

    svc.guests = JSON.parse(localStorage.getItem('appGuests')) || ExampleGuests;
    svc.updateGuests();


    svc.addGuest = function(user){
        // Add the guest to the array
        svc.guests.push(user);
        svc.updateGuests();
    };

    svc.removeGuest = function(key){
        // Add the guest to the array
        svc.guests.splice(key, 1);
        svc.updateGuests();
    };

    svc.setGuestStatus = function(guest_key, status){
        svc.guests[guest_key].action = status;
        svc.updateGuests();
        console.log('Guest');
    };

}]);

angular.module('shuffling').value('ExampleGuests', [
    {name:'Bob Ross', transitionDate:new Date(), action:'pickup', pickupLocation:'Alaska'},
    {name:'Shotaro Kaneda', transitionDate:new Date(), action:'pickup', pickupLocation:'Neo Tokyo'},
    {name:'James Randi', transitionDate:new Date(), action:'pickup', pickupLocation:'Georgia'}
]);
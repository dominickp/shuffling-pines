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

}]);

angular.module('shuffling').value('ExampleGuests', [
    {name:'Bob Ross', transitionDate:new Date(), action:'pickup', pickupLocation:'Alaska'},
    {name:'Shotaro Kaneda', transitionDate:new Date(), action:'pickup', pickupLocation:'Neo Tokyo'},
    {name:'James Randi', transitionDate:new Date(), action:'pickup', pickupLocation:'Georgia'}
]);
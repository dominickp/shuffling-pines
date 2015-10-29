angular.module('shuffling').service('Guests', function(){
    var svc = this;
    svc.guests = [];

    svc.getUsers = function(callback){
        //$http.get('http://jsonplaceholder.typicode.com/users')
        $http.get('/users.json')
            .then(function(response){
                svc.users = response.data;
                if(callback){
                    callback();
                }
            });
    };

});

angular.module('shuffling').value('ExampleGuests', [
    {name:'Bob Ross', transitionDate:new Date(), action:'pickup', pickupLocation:'Alaska'},
    {name:'Shotaro Kaneda', transitionDate:new Date(), action:'pickup', pickupLocation:'Neo Tokyo'},
    {name:'James Randi', transitionDate:new Date(), action:'pickup', pickupLocation:'Georgia'}
]);
angular.module('shuffling').service('Tab', [function(){
    var svc = this;

    svc.current_tab = 1;

    svc.setCurrentTab = function(tab_number){
        svc.current_tab = tab_number;
    };

    svc.getCurrentTab = function(){
        return svc.current_tab;
    };

}]);
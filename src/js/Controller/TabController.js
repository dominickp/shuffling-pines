angular.module('shuffling').controller('TabController', ['Tab', function(TabSvc){

    var vm = this;

    // Init on first tab
    vm.tab = TabSvc;

}]);

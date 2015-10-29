describe('TabController', function(){

    //angular.mock.module
    beforeEach(module('shuffling'));

    var tabController, TabSvc;

    //angular.mock.inject
    beforeEach(angular.mock.inject(function($controller){
        tabController = $controller('TabController');
    }));

    beforeEach(function(){
        inject(function($injector) {
            TabSvc = $injector.get('Tab');
        });
    });

    it('should load the first tab', function(){
        expect(TabSvc.current_tab).toBe(1);
    });

});
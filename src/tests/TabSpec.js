describe('Tab', function(){

    //angular.mock.module
    beforeEach(module('shuffling'));

    var TabSvc;

    beforeEach(function(){
        inject(function($injector) {
            TabSvc = $injector.get('Tab');
        });
    });

    it('should start at tab 1', function(){
        expect(TabSvc.current_tab).toBe(1);
    });

    it('should be able to get the current tab', function(){
        var theCurrentTab = TabSvc.getCurrentTab();
        expect(theCurrentTab).toBe(TabSvc.current_tab);
        expect(theCurrentTab).not.toBeNull();
    });

    it('should be able to set a new current tab', function(){
        var theCurrentTab = TabSvc.getCurrentTab();
        var newTabNumber = 3;

        TabSvc.setCurrentTab(newTabNumber);

        expect(theCurrentTab).not.toBe(TabSvc.getCurrentTab());
        expect(TabSvc.getCurrentTab()).toBe(newTabNumber);
    });

});
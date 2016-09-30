(function() {
    'use strict';

    angular
        .module('adminApp.tables')
        .controller('DatatablesController', DatatablesController);

    DatatablesController.$inject = [];

    /* @ngInject */
    function DatatablesController() {
        var vm = this;

        activate();

        function activate() {
          vm.datatable = {
            columns: [
              { "title": "Engine" },
              { "title": "Browser" },
              { "title": "Platform" },
              { "title": "Version" },
              { "title": "Grade" }
            ],
            dataSet: [
              ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
              ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
              ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
              ['Trident','Internet Explorer 6','Win 98+','6','A'],
              ['Trident','Internet Explorer 7','Win XP SP2+','7','A'],
              ['Trident','AOL browser (AOL desktop)','Win XP','6','A'],
              ['Gecko','Firefox 1.0','Win 98+ / OSX.2+','1.7','A'],
              ['Gecko','Firefox 1.5','Win 98+ / OSX.2+','1.8','A'],
              ['Gecko','Firefox 2.0','Win 98+ / OSX.2+','1.8','A'],
              ['Gecko','Firefox 3.0','Win 2k+ / OSX.3+','1.9','A'],
              ['Gecko','Camino 1.0','OSX.2+','1.8','A'],
              ['Gecko','Camino 1.5','OSX.3+','1.8','A'],
              ['Gecko','Netscape 7.2','Win 95+ / Mac OS 8.6-9.2','1.7','A'],
              ['Gecko','Netscape Browser 8','Win 98SE+','1.7','A'],
              ['Gecko','Netscape Navigator 9','Win 98+ / OSX.2+','1.8','A'],
              ['Gecko','Mozilla 1.0','Win 95+ / OSX.1+',1,'A'],
              ['Gecko','Mozilla 1.1','Win 95+ / OSX.1+',1.1,'A'],
              ['Gecko','Mozilla 1.2','Win 95+ / OSX.1+',1.2,'A'],
              ['Gecko','Mozilla 1.3','Win 95+ / OSX.1+',1.3,'A'],
              ['Gecko','Mozilla 1.4','Win 95+ / OSX.1+',1.4,'A'],
              ['Gecko','Mozilla 1.5','Win 95+ / OSX.1+',1.5,'A'],
              ['Gecko','Mozilla 1.6','Win 95+ / OSX.1+',1.6,'A'],
              ['Gecko','Mozilla 1.7','Win 98+ / OSX.1+',1.7,'A'],
              ['Gecko','Mozilla 1.8','Win 98+ / OSX.1+',1.8,'A'],
              ['Gecko','Seamonkey 1.1','Win 98+ / OSX.2+','1.8','A']
            ]
          };
        }
    }
})();

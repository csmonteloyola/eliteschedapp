(function () {
    'use strict';

    angular.module('eliteApp').controller('LeaguesCtrl', ['$state', 'eliteApi', LeaguesCtrl]);

    function LeaguesCtrl($state, eliteApi) {
        var vm = this;
        
        /*var data = eliteApi.getLeagues();

        console.log(data);
        vm.leagues = data;*/
        eliteApi.getLeagues().then(function(data){
    		vm.leagues = data;
        });

        vm.selectLeague = function(id){
        	eliteApi.setLeagueId(id);
            $state.go("app.teams");
        }

    };
})();
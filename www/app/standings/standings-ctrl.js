(function(){
	'use strict';

	angular.module("eliteApp").controller("StandingsCtrl", ['eliteApi', StandingsCtrl]);

	function StandingsCtrl(eliteApi){
		var vm = this;

		/*var data = eliteApi.getLeagueData();
			vm.standings = data.standings;
		*/
		eliteApi.getLeagueData().then(function(data){
    		vm.standings = data.standings;
        });
	}



})();
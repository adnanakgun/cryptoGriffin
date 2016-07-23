(function() {
	"use strict";
	angular.module('cryptoGriffin').controller('cryptoGriffinController', 
	['$scope', 'scrambleTool', function ($scope, scrambleTool) {

		$scope.model = {
			alphabetData: [{
				label: 'English',
				array: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
			}, {
				label: 'German',
				array: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','ä','ö','ü','ß']
			}, {
				label: 'Spanish',
				array: ['a','b','c','c','d','e','f','g','h','i','j','k','l','l','m','n','ñ','o','p','q','r','r','s','t','u','v','w','x','y','z']
			}],
			userSettings: {},
			scrambleSettings: {},
			selectedSection: 'scramble',
			viewHelp: false
		};

		if(window.localStorage.getItem('keyText') === null){
			window.localStorage.setItem('keyText', 'The Quick Brown Fox Jumps Over The Lazy Dog');
		}

		if(window.localStorage.getItem('alphabetIndex') === null){
			window.localStorage.setItem('alphabetIndex', 0); // english - abcdefghijklmnopqrstuvwxyz
		}

		if(!window.localStorage.getItem('isNotFirstView')){
			window.localStorage.setItem('isNotFirstView', true);
			$scope.model.viewHelp = true;
		}


		$scope.model.userSettings = {
			keyText: window.localStorage.getItem('keyText'),
			alphabetIndex: window.localStorage.getItem('alphabetIndex'),
			selectedAlphabet: $scope.model.alphabetData[window.localStorage.getItem('alphabetIndex')]
		};

		$scope.model.scrambleSettings = scrambleTool.getScrambleSettings($scope.model.userSettings.keyText, $scope.model.userSettings.selectedAlphabet.array);

		$scope.selectSection = function(str){
			$scope.model.selectedSection = str;
		};


	}]);
})();
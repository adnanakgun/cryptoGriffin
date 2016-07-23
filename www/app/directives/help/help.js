(function() {
	"use strict";
	angular.module('cryptoGriffin').directive('help', function () {
                
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            templateUrl: 'app/directives/help/help.html',
            link: function ($scope) {
                
                $scope.isSelected = function(){
                    return $scope.model.viewHelp; 
                };

                $scope.close = function(){
                    $scope.model.viewHelp = false; 
                };
            }
        };
    });
})();
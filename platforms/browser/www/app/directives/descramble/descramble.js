(function() {
	"use strict";
	angular.module('cryptoGriffin').directive('descramble', ['scrambleTool', 'navTool', function (scrambleTool, navTool) {
                
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            templateUrl: 'app/directives/descramble/descramble.html',
            link: function ($scope) {
                
                $scope.isSelected = function(section){
                    return navTool.isSelectedSection($scope.model.selectedSection, section);
                }

                $scope.decode = function(){
                    return scrambleTool.decode($scope.encodedText, $scope.model);
                };
            }
        };
    }]);
})();
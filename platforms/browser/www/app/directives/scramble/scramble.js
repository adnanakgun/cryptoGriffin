(function() {
	"use strict";
	angular.module('cryptoGriffin').directive('scramble', ['scrambleTool', 'navTool', function (scrambleTool, navTool) {
                
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            templateUrl: 'app/directives/scramble/scramble.html',
            link: function ($scope) {


                $scope.isSelected = function(section){
                    return navTool.isSelectedSection($scope.model.selectedSection, section);
                };

                $scope.encode = function(){
                    return scrambleTool.encode($scope.plainText, $scope.model);
                };
            }
        };
    }]);
})();
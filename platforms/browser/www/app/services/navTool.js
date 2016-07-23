(function () {
    "use strict";
    angular.module('cryptoGriffin').factory('navTool', function () {        

		return {
            isSelectedSection: function(userAction, section){
                return userAction === section;
            }
		}

    });
})();
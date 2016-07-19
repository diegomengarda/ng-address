angular.module('App', ['ngAddress'])
    .controller('AppCtrl', ['$scope', function ($scope) {

        $scope.model = {};
        $scope.adresses = [];

        $scope.save = function (model) {
            console.log(model);
            return;
        };

    }]);
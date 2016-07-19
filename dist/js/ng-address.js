/**
 * NgAddress Directive
 *
 * @author Diego Mengarda <github.com/diegomengarda>
 */
angular.module('ngAddress', [])
    .directive('ngAddress', NgAddress);

function NgAddress() {
    return {
        templateUrl: '../dist/address.html',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            adresses: '=',
            minLength: '@'
        },
        controller: ['$scope', function ($scope) {

            var minLength = $scope.minLength ? parseInt($scope.minLength) : 1;

            if ($scope.adresses === undefined || $scope.adresses.length < minLength) {
                $scope.adresses = [];
                addAddress();
            }

            $scope.$watch('adresses', function () {
                if ($scope.adresses === undefined || $scope.adresses.length < minLength) {
                    if ($scope.adresses === undefined) {
                        $scope.adresses = [];
                    }
                    addAddress();
                }
            }, true);

            $scope.addAddress = function () {
                addAddress();
            };

            $scope.removeAddress = function (index) {
                $scope.adresses.splice(index, 1);
            };

            function addAddress() {
                $scope.adresses.push(
                    {
                        postcode: '',
                        street: '',
                        number: ''
                    }
                );
            }

        }]
    };
}
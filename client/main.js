import 'angular';
import '1237anjasdbhsbd712b3hbas'; // it's a temp npm package of angular-meteor
import './app.html';

angular.module('app', [
    'angular-meteor',
    'angular-templates'
  ])
  .directive('app', () => ({
    templateUrl: 'client/app.html',
    controller($scope) {
      $scope.test = 'it works!';
    }
  }))

angular.module('blogHome',[]);
angular.module('blogHome').controller('Api', function($scope, $http) {
    $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens/')
        .then(function(response) {
            $scope.posts = response.data;
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
});
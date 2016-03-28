app.controller('forecastCtrl', ['$scope', '$resource', '$routeParams', 'myService', function($scope, $resource, $routeParams, myService){

   $scope.city = myService.city;
    
    $scope.days = $routeParams.days || 2;
    $scope.weather =  $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=0746601e80084e7a14c97a2a9a9d355d', 
            {callback: 'JSON_CALLBACK'},
            {get: {method: 'JSONP'}} 
            );
    $scope.weatherResult = $scope.weather.get({
        
        q: $scope.city,
        cnt: $scope.days
    });
    console.log($scope.weatherResult);
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
    };
        
    $scope.convertDate = function(dt) {
        
        return new Date(dt * 1000);
    };    
    
}]);

app.controller('homeCtrl', ['$scope', '$resource', 'myService', function($scope, $resource, myService){
    
     $scope.city = myService.city;
    
    $scope.$watch('city', function(){
       myService.city = $scope.city;
    });
        
}]);
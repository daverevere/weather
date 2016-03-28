app.config(function($routeProvider){
   $routeProvider
   .when('/', {
       templateUrl: 'pages/home.htm',
       controller: 'homeCtrl'
   })
   .when('/forecast', {
       templateUrl: 'pages/forecast.htm',
       controller: 'forecastCtrl'
   })
   .when('/forecast/:days', {
       templateUrl: 'pages/forecast.htm',
       controller: 'forecastCtrl'
   })
    
});
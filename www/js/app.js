
var app = angular.module("opensearcher", ['ionic']);


app.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

});

//Todas las rutas para la aplicacion

app.config(function($stateProvider,$urlRouterProvider) {
  //ruta para la página inicial
  $stateProvider.state('home',{
    url: '/',
    templateUrl: 'home.html'
  });

   $urlRouterProvider.otherwise("/");

});
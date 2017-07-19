angular.module('associadosAPP').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider,$urlRouterProvider){
    $stateProvider.state('dashboard',{
      url : "/dashboard",
      templateUrl : "dashboard/dashboard.html"
      
    }).state('associados',{
      url : "/associados",
      templateUrl : "associados/index.html"
      
    })
    
    $urlRouterProvider.otherwise('/dashboard')
    
  }
  
])
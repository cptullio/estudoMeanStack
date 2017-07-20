angular.module('associadosAPP').controller('AssociadosCtrl', [
  '$scope',
  '$http',
  '$location',
  'msgs',
  'tabs',
  'consts',
  AssociadosController
])

function AssociadosController($scope, $http, $location, msgs, tabs, consts) {

  $scope.getAssociados = function() {
    const page = parseInt($location.search().page) || 1
    const url = `${consts.apiUrl}/associados?skip=${(page - 1) * 10}&limit=10`
    $http.get(url).then(function(resp) {
      $scope.associados = resp.data
      $scope.associado = {}
      
      $http.get(`${consts.apiUrl}/associados/count`).then(function(resp) {
        $scope.pages = Math.ceil(resp.data.value / 10)
        tabs.show($scope, {tabList: true, tabCreate: true})
      })
    })
  }

  $scope.createAssociado = function() {
    const url = `${consts.apiUrl}/associados`;
    $http.post(url, $scope.associado).then(function(response) {
      $scope.associado = {}
      $scope.getAssociados()
      
      msgs.addSuccess('Operação realizada com sucesso!!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabUpdate = function(billingCycle) {
    $scope.billingCycle = billingCycle
    
    tabs.show($scope, {tabUpdate: true})
  }

  $scope.updateBillingCycle = function() {
    const url = `${consts.apiUrl}/billingCycles/${$scope.billingCycle._id}`
    $http.put(url, $scope.billingCycle).then(function(response) {
      $scope.billingCycle = {}
    
      $scope.getBillingCycles()
      tabs.show($scope, {tabList: true, tabCreate: true})
      msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabDelete = function(billingCycle) {
    $scope.billingCycle = billingCycle
    
    tabs.show($scope, {tabDelete: true})
  }

  $scope.deleteBillingCycle = function() {
    const url = `${consts.apiUrl}/billingCycles/${$scope.billingCycle._id}`
    $http.delete(url, $scope.billingCycle).then(function(response) {
       $scope.billingCycle = {}
    
       $scope.getBillingCycles()
       tabs.show($scope, {tabList: true, tabCreate: true})
       msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
       msgs.addError(resp.data)
    })
  }

  $scope.addDebt = function(index) {
    $scope.billingCycle.debts.splice(index + 1, 0, {})
  }

  
  $scope.getAssociados()
}
angular.module('associadosAPP').controller('DashboardCtrl', [
  '$http',
  'consts',
  DashboardController
])

function DashboardController($http, consts) {
  const vm = this
  vm.getSummary = function() {
    
    //vm.qtdeAssociados = 10
    
    
    const url = `${consts.apiUrl}/associados/count`;
    $http.get(url).then(function(response) {
      const {value = 0} = response.data
      vm.qtdeAssociados = value
     
    })
  }

  vm.getSummary()
}
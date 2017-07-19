angular.module('associadosAPP').constant('consts', {
  appName: 'Associados APP',
  version: '1.0',
  owner: 'cptullio',
  year: '2017',
  site: 'http://github.com/cptullio',
  apiUrl: 'http://estudomeanstack-carlospm548719.codeanyapp.com:3003/api/',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
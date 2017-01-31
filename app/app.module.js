angular.module('app', [
    'templates',
    'ui.router',
    'LocalStorageModule',
    'directives',
    'services',
    'home',
    'register',
    'login',
])
    .config(function ($urlRouterProvider, $stateProvider, localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('yourPrefix');
        $urlRouterProvider.otherwise('/home');
    })
    .run(function () {

    });
angular.module('services')
    .service('User', User);

function User($state, localStorageService) {

    var vm = this;
    vm.currentUser = null;
    vm.userToken = null;

    this.isLoggedIn = () => vm.currentUser !== null;

    this.logIn = (user, token) => {
        localStorageService.set('currentUser', user);
        localStorageService.set('userToken', token);
        this.getLoggedInUser();
        $state.go('home');
    };

    this.getLoggedInUser = () => {
        vm.currentUser = localStorageService.get('currentUser');
    };

    this.getUserToken = () => {
        return localStorageService.get('userToken');
    };

    this.logout = () => {
        localStorageService.remove('currentUser');
        localStorageService.remove('userToken');
        vm.currentUser = null;
        vm.userToken = null;
        $state.go('login');
    };
}
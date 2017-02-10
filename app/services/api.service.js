angular.module('services')
    .service('API', API);

function API($http, User) {

    this.post = (route, body) => {
        var token = User.getUserToken();
        return $http.post(route, {data: body, token: token});
    };

    this.get = (route) => {
        var token = User.getUserToken();
        return $http.get(route + '?token=' + token);
    };

    this.delete = (route, body) => {
        var token = User.getUserToken();
        return $http.get(route + '?token=' + token + '?body=' + body);
    };

    this.patch = (route, body) => {
        var token = User.getUserToken();
        return $http.patch(route, {data: body, token: token});
    };
}
(function () {
    'use strict';

    angular
        .module('jhipsterSimpleApplicationApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();

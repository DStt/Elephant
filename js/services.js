'use strict';
angular.module('myApp.services', [])
        .value('version', '0.0.1')
        .factory('restService', function ($http, $location) {
            return {
                get: function (url, func, data) {
                    return $http({
                        method: "POST",
                        url: remote_ws + url + ".php?func=" + func + "&pass=" + window.localStorage.getItem("password"),
                        data: data,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        cache: false
                    })
                            .success(function (data, status, headers, config) {
                                if (data.status == "error") {
                                    $location.path("/login");
                                }
                                return data;
                            })
                            .error(function (data, status, headers, config) {

                                data.result = "ERROR";
                                data.status = status;
                                return data;
                            });
                }
            };
        })
        .directive('showFocus', function ($timeout) {
            return function (scope, element, attrs) {
                scope.$watch(attrs.showFocus,
                        function (newValue) {
                            $timeout(function () {
                                newValue &&  element[0].focus();
                            });
                        }, true);
            };
        });
'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
        .controller('loginCtrl', ['$scope', '$location', 'restService', function ($scope, $location, restService) {
                $scope.password = ""
                $scope.go = function () {
                    window.localStorage.setItem("password", $scope.password);
                    restService.get("init", "try", []).then(function (result) {
                        if (result.data.status == "ok") {
                            window.localStorage.setItem("password", result.data.password);
                            $location.path("/home");
                        } else {
                            $scope.error = "Username or password are wrong";
                        }
                    });
                };
            }])
		.controller('modalHelpCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
		
			  $scope.close = function () {
				$modalInstance.close();
			  };
		  
		}])
        .controller('homeCtrl', ['$scope', '$location', '$modal', 'restService', function ($scope, $location, $modal, restService) {
                $scope.logout = function () {
                    window.localStorage.removeItem("password");
                    $location.path("/login");

                };

				$scope.help = function(){
					var modalInstance = $modal.open({
					  templateUrl: 'view/modalHelp.html',
					  controller: 'modalHelpCtrl'
					});
				};

                // Clients func
                $scope.clientsUpdate = function () {
                    restService.get("clients", "list", []).then(function (result) {
                        $scope.clients = result.data.clients;
                    });
                };

                $scope.clientAdd = function () {
                    if ($scope.newClient != "") {
                        restService.get("clients", "add", {"name": $scope.newClient}).then(function (result) {
                            $scope.clients = result.data.clients;
                        });
                    }
                    $scope.newClient = "";
                    //$scope.projectsUpdate(null);
                };

                $scope.clientUpdate = function (client) {
                    if ($scope.clientSelected.id != null) {
                        restService.get("clients", "update", $scope.clientSelected).then(function (result) {
                            //$scope.clients = result.data.clients;
                            client.show = !client.show;
                        });
                    }
                };

                $scope.clientDelete = function (client) {
                    if (client != null && window.confirm("Delete Client " + client.name + "?")) {
                        restService.get("clients", "delete", client).then(function (result) {
                            $scope.clients = result.data.clients;
                            $scope.projectsUpdate(null);
                        });
                    }
                };

                // Clients model
                $scope.clients = [];
                $scope.newClient = "";
                $scope.clientsUpdate();

                $scope.clientSelected = {};

                // Project func
                $scope.projectsUpdate = function (client) {
                    $scope.clientSelected = client;
                    $scope.projectSelected = {};
                    $scope.projects = [];
                    $scope.datas = [];

                    if (client == null) {
                        return;
                    }
                    restService.get("projects", "list", {"client_id": $scope.clientSelected.id}).then(function (result) {
                        $scope.projects = result.data.projects;
                    });
                };

                $scope.projectAdd = function () {
                    if ($scope.newProject != "" && $scope.clientSelected.id != null) {
                        restService.get("projects", "add", {"name": $scope.newProject, "client_id": $scope.clientSelected.id}).then(function (result) {
                            $scope.projects = result.data.projects;
                        });
                    }
                    $scope.newProject = "";
                    //$scope.datasUpdate(null);
                };

                $scope.projectUpdate = function () {
                    if ($scope.projectSelected.id != null) {
                        restService.get("projects", "update", $scope.projectSelected).then(function (result) {
                            $scope.projects = result.data.projects;
                        });
                    }
                };

                $scope.projectDelete = function (project) {
                    if (project != null && window.confirm("Delete Project " + project.name + "?")) {
                        restService.get("projects", "delete", project).then(function (result) {
                            $scope.projects = result.data.projects;
                            $scope.projectSelected={};
                            $scope.datasUpdate(null);
                        });
                    }
                };
                // Project Model
                $scope.projects = [];
                $scope.newProjects = "";

                $scope.projectSelected = {};


                // Data func
                $scope.datasUpdate = function (project) {
                    $scope.resetData();
                    if (project == null) {
                        $scope.datas = [];
                        return;
                    }
                    $scope.projectSelected = project;
                    restService.get("datas", "list", {"project_id": $scope.projectSelected.id}).then(function (result) {
                        $scope.newData.project_id = $scope.projectSelected.id;
                        $scope.datas = result.data.datas;
                    });
                };

                $scope.dataAdd = function () {
                    if ($scope.newData.name != "" && $scope.projectSelected.id != null) {
                        restService.get("datas", "add", $scope.newData).then(function (result) {
                            $scope.datas = result.data.datas;
                            $scope.resetData();
                            $scope.newData.project_id = $scope.projectSelected.id;
                        });
                    }
                };

                $scope.resetData = function () {
                    $scope.newData = {};
                    $scope.newData.project_id = $scope.projectSelected.id;
                };

                $scope.dataUpdate = function (data) {
                    if (data != null) {
                        restService.get("datas", "update", data).then(function (result) {
                            $scope.datas = result.data.datas;
                        });
                    }
                };

                $scope.dataDelete = function (data) {
                    if (data != null && window.confirm("Delete Data " + data.name + "?")) {
                        restService.get("datas", "delete", data).then(function (result) {
                            $scope.datas = result.data.datas;
                        });
                    }
                };

                // Data Model
                $scope.datas = [];
                $scope.newData = {};

            }]);




var aceApp = angular.module('aceDetail', []);

aceApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

aceApp.controller('detailController', function($scope, $http) {
    $http.get('/api/lawyer/106/').
    success(function(data, status, headers, config) {
        $scope.data = data;
    }).
    error(function(data, status, headers, config) {
        alert(data.message);
    });

    $scope.get_timeSlots = function() {
        $http({
            url: '/api/cart/',
            method: "GET",
            params: {
                'stage': '1',
                'lawyer_id': 106
            }
        }).
        success(function(data, status, headers, config) {
            $scope.time_slots = data;
        }).
        error(function(data, status, headers, config) {
            alert(data.message);
        });
    };

    $scope.select_timeSlot = function(date, from_time, to_time) {
        from_date = date + from_time;
        to_date = date + to_time;
        $http({
            url: '/api/cart/',
            method: "GET",
            params: {
                'stage': '2',
                'lawyer_id': 106,
                'from_timestamp': from_date,
                'to_timestamp': to_date
            }
        }).
        success(function(data, status, headers, config) {
            $scope.transaction_id = data;
            $(".slots-group").toggle();
            $(".confirm_appointment").show();
        }).
        error(function(data, status, headers, config) {
            alert(data.message);
        });
    };
    $scope.user_details_submit = function() {
        
        $http({
            url: '/api/cart/',
            method: "GET",
            params: {
                'stage': '3',
                'lawyer_id': 106,
                'transaction_id': $scope.transaction_id,
                'name': $scope.name,
                'email': $scope.email,
                'mobile': $scope.mobile,
                'reason': $scope.reason                
            }
        }).
        success(function(data, status, headers, config) {
            alert(data);
            //$scope.transaction_id = data;
            //$(".slots-group").toggle();
            //$(".confirm_appointment").show();
        }).
        error(function(data, status, headers, config) {
            alert(data.message);
        });
        
      };
    
});
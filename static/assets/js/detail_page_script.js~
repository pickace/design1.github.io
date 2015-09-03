var aceApp = angular.module('aceDetail', []);

aceApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');         
});

aceApp.controller('detailController', function($scope, $http) {
    //$http.get('/api/lawyer/1/').
    //success(function(data, status, headers, config) {
        data = {"name":"Krishna Kumar Sharma","gender":"M","email":"test@test.com","alt_email":"demo@dem.com","mobile":"9876543210","alt_mobile":"9876543210","telephone":"05144220037","fax":null,"client_rating_avg":"3.00","client_rating_count":0,"system_rating_avg":"5.00","recommendations":100,"review_count":123,"total_experience":10,"fees":"1000.00","designation":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat","client_visit_service":true,"free_consultation":true,"online_booking":true,"reviews":[{"timestamp":"2015-08-19T17:06:34.599638","reviewer_name":"lorm","verified_user":true,"message":"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,","recommended":true,"client_rating":3},{"timestamp":"2015-08-19T17:06:34.600482","reviewer_name":"lorwem","verified_user":true,"message":"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,","recommended":false,"client_rating":4},{"timestamp":"2015-08-19T17:06:34.600998","reviewer_name":"ipsum","verified_user":false,"message":"Lorem","recommended":true,"client_rating":5},{"timestamp":"2015-08-19T17:06:34.601483","reviewer_name":"1","verified_user":true,"message":"l","recommended":false,"client_rating":2}],"social_links":{"website":"http://pro.jsonlint.com/","twitter_handle":"http://pro.jsonlint.com/","fb_page":"http://pro.jsonlint.com/","blog":"http://pro.jsonlint.com/","linkedln":"http://pro.jsonlint.com/"},"academics":[{"name":"matrics","timestamp":"2015-08-25"},{"name":"secondary","timestamp":"2015-08-25"},{"name":"third is here ","timestamp":"2015-08-25"},{"name":"third is here ","timestamp":"2015-08-26"},{"name":"ma","timestamp":"2015-08-25"}],"memberships":[{"name":"First","from_date":"2015-08-26","to_date":"2015-08-26"},{"name":"First","from_date":"2015-08-26","to_date":"2015-08-28"},{"name":"Second","from_date":"2015-08-26","to_date":"2015-08-26"},{"name":"Fourth","from_date":"2015-08-26","to_date":"2015-08-26"}],"awards":[{"name":"asdhasjkhksahksahdkjsafh a","received_at":"2015-08-26"}],"experiences":[{"name":"asdasd","from_date":"2015-08-26","to_date":"2015-08-26"}],"registrations":[{"name":"First ","registered_at":"2015-08-26"}],"image":{"image":"http://localhost:8000/media/profile_pics/2.jpg"},"address":[{"address":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{"address":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}],"languages":[{"name":"Hindi"},{"name":"English"},{"name":"German"}],"practice_type":[{"name":"Private Practice"},{"name":"Public Interest Law"}],"specializations":[{"name":"Entertainment"},{"name":"Municipal"},{"name":"Finance"},{"name":"Maritime law\n"},{"name":"Advertising law\n"},{"name":"Agency law\n"},{"name":"Alcohol law\n"},{"name":"Alternative dispute resolution\n"},{"name":"Animal law\n"},{"name":"Banking law\n"},{"name":"Bankruptcy law\n"}],"services":[{"name":"Divorce"},{"name":"Bill"},{"name":"Politics"}]};
        $scope.data = data;
    //}).
    //error(function(data, status, headers, config) {
    //    alert(data.message);
    //});

    //$scope.get_timeSlots = function() {
    //    $http({
    //        url: '/api/cart/',
    //        method: "GET",
    //        params: {
    //            'stage': '1',
    //            'lawyer_id': 1
    //        }
    //    }).
    //    success(function(data, status, headers, config) {            
            data = [{"date":"2015-09-03","each_slot_in_minutes":30,"slots":[{"start_time":"09:00:00","availability":0,"to_time":"09:30:00"},{"start_time":"09:30:00","availability":0,"to_time":"10:00:00"},{"start_time":"10:00:00","availability":0,"to_time":"10:30:00"},{"start_time":"10:30:00","availability":0,"to_time":"11:00:00"},{"start_time":"13:00:00","availability":0,"to_time":"13:30:00"},{"start_time":"13:30:00","availability":0,"to_time":"14:00:00"},{"start_time":"17:00:00","availability":0,"to_time":"17:30:00"},{"start_time":"17:30:00","availability":0,"to_time":"18:00:00"},{"start_time":"18:00:00","availability":0,"to_time":"18:30:00"},{"start_time":"18:30:00","availability":0,"to_time":"19:00:00"},{"start_time":"19:00:00","availability":0,"to_time":"19:30:00"},{"start_time":"19:30:00","availability":0,"to_time":"20:00:00"},{"start_time":"22:00:00","availability":0,"to_time":"22:30:00"},{"start_time":"22:30:00","availability":0,"to_time":"23:00:00"}]},{"date":"2015-09-04","each_slot_in_minutes":30,"slots":[{"start_time":"09:00:00","availability":0,"to_time":"09:30:00"},{"start_time":"09:30:00","availability":0,"to_time":"10:00:00"},{"start_time":"10:00:00","availability":0,"to_time":"10:30:00"},{"start_time":"10:30:00","availability":0,"to_time":"11:00:00"},{"start_time":"13:00:00","availability":0,"to_time":"13:30:00"},{"start_time":"13:30:00","availability":0,"to_time":"14:00:00"},{"start_time":"17:00:00","availability":0,"to_time":"17:30:00"},{"start_time":"17:30:00","availability":0,"to_time":"18:00:00"},{"start_time":"18:00:00","availability":0,"to_time":"18:30:00"},{"start_time":"18:30:00","availability":0,"to_time":"19:00:00"},{"start_time":"19:00:00","availability":0,"to_time":"19:30:00"},{"start_time":"19:30:00","availability":0,"to_time":"20:00:00"},{"start_time":"22:00:00","availability":0,"to_time":"22:30:00"},{"start_time":"22:30:00","availability":0,"to_time":"23:00:00"}]},{"date":"2015-09-05","each_slot_in_minutes":30,"slots":[{"start_time":"09:00:00","availability":0,"to_time":"09:30:00"},{"start_time":"09:30:00","availability":0,"to_time":"10:00:00"},{"start_time":"10:00:00","availability":0,"to_time":"10:30:00"},{"start_time":"10:30:00","availability":0,"to_time":"11:00:00"},{"start_time":"13:00:00","availability":0,"to_time":"13:30:00"},{"start_time":"13:30:00","availability":0,"to_time":"14:00:00"},{"start_time":"17:00:00","availability":0,"to_time":"17:30:00"},{"start_time":"17:30:00","availability":0,"to_time":"18:00:00"},{"start_time":"18:00:00","availability":0,"to_time":"18:30:00"},{"start_time":"18:30:00","availability":0,"to_time":"19:00:00"},{"start_time":"19:00:00","availability":0,"to_time":"19:30:00"},{"start_time":"19:30:00","availability":0,"to_time":"20:00:00"},{"start_time":"22:00:00","availability":0,"to_time":"22:30:00"},{"start_time":"22:30:00","availability":0,"to_time":"23:00:00"}]},{"date":"2015-09-06","each_slot_in_minutes":30,"slots":[{"start_time":"09:00:00","availability":0,"to_time":"09:30:00"},{"start_time":"09:30:00","availability":0,"to_time":"10:00:00"},{"start_time":"10:00:00","availability":0,"to_time":"10:30:00"},{"start_time":"10:30:00","availability":0,"to_time":"11:00:00"},{"start_time":"13:00:00","availability":0,"to_time":"13:30:00"},{"start_time":"13:30:00","availability":0,"to_time":"14:00:00"},{"start_time":"17:00:00","availability":0,"to_time":"17:30:00"},{"start_time":"17:30:00","availability":0,"to_time":"18:00:00"},{"start_time":"18:00:00","availability":0,"to_time":"18:30:00"},{"start_time":"18:30:00","availability":0,"to_time":"19:00:00"},{"start_time":"19:00:00","availability":0,"to_time":"19:30:00"},{"start_time":"19:30:00","availability":0,"to_time":"20:00:00"},{"start_time":"22:00:00","availability":0,"to_time":"22:30:00"},{"start_time":"22:30:00","availability":0,"to_time":"23:00:00"}]},{"date":"2015-09-07","each_slot_in_minutes":30,"slots":[{"start_time":"09:00:00","availability":0,"to_time":"09:30:00"},{"start_time":"09:30:00","availability":0,"to_time":"10:00:00"},{"start_time":"10:00:00","availability":0,"to_time":"10:30:00"},{"start_time":"10:30:00","availability":0,"to_time":"11:00:00"},{"start_time":"13:00:00","availability":0,"to_time":"13:30:00"},{"start_time":"13:30:00","availability":0,"to_time":"14:00:00"},{"start_time":"17:00:00","availability":0,"to_time":"17:30:00"},{"start_time":"17:30:00","availability":0,"to_time":"18:00:00"},{"start_time":"18:00:00","availability":0,"to_time":"18:30:00"},{"start_time":"18:30:00","availability":0,"to_time":"19:00:00"},{"start_time":"19:00:00","availability":0,"to_time":"19:30:00"},{"start_time":"19:30:00","availability":0,"to_time":"20:00:00"},{"start_time":"22:00:00","availability":0,"to_time":"22:30:00"},{"start_time":"22:30:00","availability":0,"to_time":"23:00:00"}]},{"date":"2015-09-08","each_slot_in_minutes":30,"slots":[{"start_time":"09:00:00","availability":0,"to_time":"09:30:00"},{"start_time":"09:30:00","availability":0,"to_time":"10:00:00"},{"start_time":"10:00:00","availability":0,"to_time":"10:30:00"},{"start_time":"10:30:00","availability":0,"to_time":"11:00:00"},{"start_time":"13:00:00","availability":0,"to_time":"13:30:00"},{"start_time":"13:30:00","availability":0,"to_time":"14:00:00"},{"start_time":"17:00:00","availability":0,"to_time":"17:30:00"},{"start_time":"17:30:00","availability":0,"to_time":"18:00:00"},{"start_time":"18:00:00","availability":0,"to_time":"18:30:00"},{"start_time":"18:30:00","availability":0,"to_time":"19:00:00"},{"start_time":"19:00:00","availability":0,"to_time":"19:30:00"},{"start_time":"19:30:00","availability":0,"to_time":"20:00:00"},{"start_time":"22:00:00","availability":0,"to_time":"22:30:00"},{"start_time":"22:30:00","availability":0,"to_time":"23:00:00"}]},{"date":"2015-09-09","each_slot_in_minutes":30,"slots":[{"start_time":"09:00:00","availability":0,"to_time":"09:30:00"},{"start_time":"09:30:00","availability":0,"to_time":"10:00:00"},{"start_time":"10:00:00","availability":0,"to_time":"10:30:00"},{"start_time":"10:30:00","availability":0,"to_time":"11:00:00"},{"start_time":"13:00:00","availability":0,"to_time":"13:30:00"},{"start_time":"13:30:00","availability":0,"to_time":"14:00:00"},{"start_time":"17:00:00","availability":0,"to_time":"17:30:00"},{"start_time":"17:30:00","availability":0,"to_time":"18:00:00"},{"start_time":"18:00:00","availability":0,"to_time":"18:30:00"},{"start_time":"18:30:00","availability":0,"to_time":"19:00:00"},{"start_time":"19:00:00","availability":0,"to_time":"19:30:00"},{"start_time":"19:30:00","availability":0,"to_time":"20:00:00"},{"start_time":"22:00:00","availability":0,"to_time":"22:30:00"},{"start_time":"22:30:00","availability":0,"to_time":"23:00:00"}]},{"date":"2015-09-10","each_slot_in_minutes":30,"slots":[{"start_time":"09:00:00","availability":0,"to_time":"09:30:00"},{"start_time":"09:30:00","availability":0,"to_time":"10:00:00"},{"start_time":"10:00:00","availability":0,"to_time":"10:30:00"},{"start_time":"10:30:00","availability":0,"to_time":"11:00:00"},{"start_time":"13:00:00","availability":0,"to_time":"13:30:00"},{"start_time":"13:30:00","availability":0,"to_time":"14:00:00"},{"start_time":"17:00:00","availability":0,"to_time":"17:30:00"},{"start_time":"17:30:00","availability":0,"to_time":"18:00:00"},{"start_time":"18:00:00","availability":0,"to_time":"18:30:00"},{"start_time":"18:30:00","availability":0,"to_time":"19:00:00"},{"start_time":"19:00:00","availability":0,"to_time":"19:30:00"},{"start_time":"19:30:00","availability":0,"to_time":"20:00:00"},{"start_time":"22:00:00","availability":0,"to_time":"22:30:00"},{"start_time":"22:30:00","availability":0,"to_time":"23:00:00"}]},{"date":"2015-09-11","each_slot_in_minutes":30,"slots":[{"start_time":"09:00:00","availability":0,"to_time":"09:30:00"},{"start_time":"09:30:00","availability":0,"to_time":"10:00:00"},{"start_time":"10:00:00","availability":0,"to_time":"10:30:00"},{"start_time":"10:30:00","availability":0,"to_time":"11:00:00"},{"start_time":"13:00:00","availability":0,"to_time":"13:30:00"},{"start_time":"13:30:00","availability":0,"to_time":"14:00:00"},{"start_time":"17:00:00","availability":0,"to_time":"17:30:00"},{"start_time":"17:30:00","availability":0,"to_time":"18:00:00"},{"start_time":"18:00:00","availability":0,"to_time":"18:30:00"},{"start_time":"18:30:00","availability":0,"to_time":"19:00:00"},{"start_time":"19:00:00","availability":0,"to_time":"19:30:00"},{"start_time":"19:30:00","availability":0,"to_time":"20:00:00"},{"start_time":"22:00:00","availability":0,"to_time":"22:30:00"},{"start_time":"22:30:00","availability":0,"to_time":"23:00:00"}]},{"date":"2015-09-12","each_slot_in_minutes":30,"slots":[{"start_time":"09:00:00","availability":0,"to_time":"09:30:00"},{"start_time":"09:30:00","availability":0,"to_time":"10:00:00"},{"start_time":"10:00:00","availability":0,"to_time":"10:30:00"},{"start_time":"10:30:00","availability":0,"to_time":"11:00:00"},{"start_time":"13:00:00","availability":0,"to_time":"13:30:00"},{"start_time":"13:30:00","availability":0,"to_time":"14:00:00"},{"start_time":"17:00:00","availability":0,"to_time":"17:30:00"},{"start_time":"17:30:00","availability":0,"to_time":"18:00:00"},{"start_time":"18:00:00","availability":0,"to_time":"18:30:00"},{"start_time":"18:30:00","availability":0,"to_time":"19:00:00"},{"start_time":"19:00:00","availability":0,"to_time":"19:30:00"},{"start_time":"19:30:00","availability":0,"to_time":"20:00:00"},{"start_time":"22:00:00","availability":0,"to_time":"22:30:00"},{"start_time":"22:30:00","availability":0,"to_time":"23:00:00"}]}];
            $scope.time_slots = data;
    //    }).
    //    error(function(data, status, headers, config) {
    //        alert(data.message);
    //    });
   // };

    $scope.select_timeSlot = function(date, from_time, to_time) {
        $scope.date = date;
        $scope.from_time = from_time;
        $scope.to_time = to_time;
        $scope.from_timestamp = date + from_time;
        $scope.to_timestamp = date + to_time;        
        //$http({
        //    url: '/api/cart/',
        //    method: "GET",
        //    params: {
        //        'stage': '2',
        //        'lawyer_id': 1,
        //        'from_timestamp': $scope.from_timestamp,
        //        'to_timestamp': $scope.to_timestamp
        //    }
        //}).
        //success(function(data, status, headers, config) {
            data = 19;
            $scope.transaction_id = data;            
            $(".slots-group").toggle();
            $(".confirm_appointment").show();
        //}).
        //error(function(data, status, headers, config) {
        //    alert(data.message);
        //});
    };
    $scope.user_details_submit = function() {        
        //$http({
        //    url: '/api/cart/',
        //    method: "GET",
        //    params: {
        //        'stage': '3',
        //        'lawyer_id': 1,
        //        'transaction_id': $scope.transaction_id,
        //        'name': $scope.name,
        //        'email': $scope.email,
        //        'mobile': $scope.mobile,
        //        'reason': $scope.reason        
        //    }
        //}).
        //success(function(data, status, headers, config) {
            $(".confirm_appointment").toggle();
            $(".submit_otp").show();
        //}).
        //error(function(data, status, headers, config) {
        //    alert(data.message);
        //});
        
      };
    $scope.submit_OTP = function() {        
        //$http({
        //    url: '/api/cart/',
        //    method: "GET",
        //    params: {
        //        'stage': '4',
        //        'lawyer_id': 1,
        //        'transaction_id': $scope.transaction_id,                
        //        'mobile_otp': $scope.mobile_otp
        //    }
        //}).
        //success(function(data, status, headers, config) {            
            $(".submit_otp").toggle();
            $(".thank_you").show();
       // }).
        //error(function(data, status, headers, config) {
        //    alert(data.message);
        //});
        
      };
    
});

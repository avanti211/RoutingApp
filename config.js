app.controller("bindingCtrl",function($scope){
              
 });

app.controller("jsonCtrl",function($scope,$http){
    
    $http.get('data.json').then(function(resp){
        $scope.student=resp.data.student;
        
    });    
    
});



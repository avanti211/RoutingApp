app.service("additionService",function(){
    this.add=function(no1,no2){          
        return no1+no2;            
    }            
});
        
app.controller("additionCtrl",['$scope','additionService',function($scope,additionService){
     $scope.addition=function(){         
        $scope.ans=additionService.add($scope.no1,$scope.no2);            
     }
}]);


app.service("subtractionService",function(){
    this.sub=function(no1,no2){
        return no1-no2;
    }
});

app.controller("subtractionCtrl",['$scope','subtractionService',function($scope,subtractionService){
    $scope.subtraction=function(){
        $scope.ans=subtractionService.sub($scope.no1,$scope.no2);
    }
}]);

app.service("multiplicationService",function(){
   this.multi=function(no1,no2){
       return no1*no2;
   } 
});

app.controller("multiplicationCtrl",['$scope','multiplicationService',function($scope,multiplicationService){
    $scope.multiplication=function(){
        $scope.ans=multiplicationService.multi($scope.no1,$scope.no2);
    }    
}]);

app.service("divisionService",function(){
   this.divi=function(no1,no2){
       return no1/no2;
   }    
});

app.controller("divisionCtrl",['$scope','divisionService',function($scope,divisionService){
    $scope.division=function(){
        $scope.ans=divisionService.divi($scope.no1,$scope.no2);
    }
}]);
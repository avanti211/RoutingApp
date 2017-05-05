app.config(function($routeProvider){
    $routeProvider
        .when("/binding",{
        templateUrl:"binding.html"
    })
        .when("/table",{
        templateUrl:"table.html"    
    })
    
        .when("/services",{
        templateUrl:"services.html"          
    })
    
        .when("/validation",{
        templateUrl:"validation.html"          
    })
});
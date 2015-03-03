angular
  .module('angularExpenseApp', [
  ])
  .controller('expenseController', function ($scope) {
    $scope.friends= ["allo", "gobhi", "piyaaz"];
    $scope.currencies = [
      {name:"USD",exc_rate:"60.0"},
      {name:"INR",exc_rate:"1"},
      {name:"EUR",exc_rate:"70.0"}
    ];
    $scope.expense = '';
    $scope.expenses = [];
    $scope.filtr = { };
    $scope.currencyfiltr = { };
    $scope.setCurrency = function(name){
      this.cname = name;
      for (var key in $scope.expenses) {
        if ($scope.expenses.hasOwnProperty(key)) {
            if (this.cname == "INR") {
              if (key.currency == "EUR") {
                      key.amount = key.amount * 70.0;
              }
              else {
                      key.amount = key.amount * 60.0;
              }
            }
            else if (this.cname == "EUR") {
              if (key.currency == "INR") {
                  key.amount = key.amount / 70.0;  
              }
              else {
                  key.amount = (key.amount /70)*60;
              }
            }
            else{
              if (key.currency == "INR") {
                  key.amount = key.amount / 60.0;
              }
              else {
                  key.amount = (key.amount / 60.0)*70.0
              }
            }
            }
            }
          };

    $scope.addExpense = function (expense) {
      $scope.expenses.push($scope.expense);
      $scope.expense = '';
    };
  });

angular
  .module('angularExpenseApp', [
  ])
  .controller('expenseController', function ($scope) {
    $scope.friends= ["Sandy","Andy","Mandy","Xandy"];
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
      var _cname = name;
      for (var key in $scope.expenses) {
            if (_cname == "INR") {
              if (key.currency == "EUR") {
                      key.amount = key.amount * 70.0;
              }
              else {
                      key.amount = key.amount * 60.0;
              }
            }
            else if (_cname == "EUR") {
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
          };

    $scope.addExpense = function (expense) {
      if (Object.keys(expense).length > 1){
        $scope.expenses.push($scope.expense);
        $scope.expense = '';
      }
    };
  });

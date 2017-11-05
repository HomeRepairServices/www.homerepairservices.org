window.onload = function() {
  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);
  $('input[type=range]').rangeslider();
}

function ViewModel() {

  this.qualify = new QualificationModel();

}

function QualificationModel() {
  var $scope = this;

  $scope.homeOwner = ko.observable(true);
  $scope.ageBased = ko.observable(true);
  $scope.overSixty = ko.observable(false);
  $scope.household = ko.observable(1);
  $scope.income = ko.observable(20000);
  $scope.qualified = ko.observable(true);

  $scope.incomeText = ko.computed(function() {
    return $scope.income() + ' yr';
  });


  var checkQualifications = ko.computed(function() {
    if (!$scope.homeOwner()) {
      $scope.homeRepairs(false);
      $scope.otherServices(false);
      return;
    }

    var household = $scope.household();
    INCOME_LIMITS.forEach(function(householdLimit) {
      if (householdLimit['Household'] == household) {

        var limit;
        if ($scope.ageBased()) {
          if ($scope.overSixty()) {
            limit = householdLimit['Over 60'];
          } else {
            limit = householdLimit['Under 60'];
          }
        } else {
          limit = householdLimit['All ages'];
        }

        var qualified = $scope.income() <= limit;
        $scope.qualified(qualified);

      }
    });
  });

}

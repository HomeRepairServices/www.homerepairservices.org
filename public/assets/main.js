window.onload = function() {
  $('input[type="range"]').rangeslider({
    polyfill: false
  });

  $('.household-input .rangeslider__handle').html('<i class="fa fa-caret-left"></i><span class="handle-value" data-bind="text: qualify.household"></span><i class="fa fa-caret-right"></i>');
  $('.income-input .rangeslider__handle').html('<i class="fa fa-caret-left"></i><span class="handle-value" data-bind="text: qualify.incomeText"></span><i class="fa fa-caret-right"></i>');

  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);

  $('input[type="range"]').change();
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
    return '$' + $scope.income();
  });

  $scope.$services = $('.income-limited-service');

  var checkQualifications = ko.computed(function() {
    if (!$scope.homeOwner()) {
      $scope.$services.css('display', 'none');
      return;
    }

    var household = $scope.household();
    INCOME_LIMITS.forEach(function(householdLimit) {
      if (householdLimit['Household'] == household) {
        var income = $scope.income();
        var ageBasedQualified;
        if ($scope.overSixty()) {
          ageBasedQualified = income <= householdLimit['Over 60'];
        } else {
          ageBasedQualified = income <= householdLimit['Under 60'];
        }
        var allAgesQualified = income <= householdLimit['All ages'];

        var showing = $scope.$services.map(function() {
          if ($(this).data('uses-age-based-criteria') == 1) {
            if (ageBasedQualified) {
              $(this).slideDown(500);
              return true;
            } else {
              $(this).slideUp(500);
              return false;
            }
          } else {
            if (allAgesQualified) {
              $(this).slideDown(500);
              return true;
            } else {
              $(this).slideUp(500);
              return false;
            }
          }
        }).toArray();
        console.log(showing);
        if (showing.some(function(a) {return a;})) {
          $('#unqualified').slideUp(500);
        } else {
          $('#unqualified').slideDown(500);
        }
      }
    });
  });

}

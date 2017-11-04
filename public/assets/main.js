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

  // variables
  $scope.homeOwner = ko.observable(true);
  $scope.overSixty = ko.observable(false);
  $scope.household = ko.observable(1);
  $scope.income = ko.observable(20000);

  // show info
  $scope.incomeText = ko.computed(function() {
    return $scope.income() + ' yr';
  });

  // check qualifications
  $scope.homeRepairs = ko.observable(true);
  $scope.otherServices = ko.observable(true);

  var checkQualifications = ko.computed(function() {
    if (!$scope.homeOwner()) {
      $scope.homeRepairs(false);
      $scope.otherServices(false);
      return;
    }

    // other services for all ages
    // are the same as over 60 home repairs

    var matrix = [
      [0, 0],
      // < 60, > 60  | household
      [23250, 37150],// 1
      [26550, 42450],// 2
      [29850, 47750],// 3
      [33150, 53050],// 4
      [35850, 57300],// 5
      [38500, 61550],// 6
      [41150, 65800],// 7
      [43800, 70050],// 8
      [46450, 74250],// 9
      [49100, 78500]// 10
    ];

    var household = $scope.household();
    var income = $scope.income();

    var limit = matrix[household][1];
    var qualified = income <= limit;

    $scope.otherServices(qualified);

    if ($scope.overSixty()) {
      $scope.homeRepairs(qualified);
    } else {
      limit = matrix[household][0];
      qualified = income <= limit;
      $scope.homeRepairs(qualified);
    }
  });

}

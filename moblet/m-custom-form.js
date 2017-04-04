/* eslint no-undef: [0]*/
module.exports = {
  title: "mCustomForm",
  style: "m-custom-form.less",
  template: 'm-custom-form.html',
  i18n: {
    pt: "lang/pt-BR.json",
    en: "lang/en-US.json"
  },
  link: function() {},
  controller: function(
    $scope,
    $mDataLoader
  ) {

    var options = {
    };
    
    $scope.answers = [];
    
    $scope.$watch('answers', function() {console.log($scope.answers)}, true);
    
    var init = function() {
      $scope.moblet.isLoading = true;
      $mDataLoader.load($scope.moblet, options, false)
        .then(function(data) {
          // Put the data from the feed in the $scope object
          $scope.moblet.isLoading = false;
          $scope.fields = data['form-fields'];
        });
    };

    init();
  }
};

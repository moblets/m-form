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
    $uMoblet,
    $uFeedLoader,
    $filter,
    $ionicScrollDelegate,
    $uAlert,
    $timeout
  ) {
    var init = function() {
      $scope.isLoading = true;
      $scope.moblet = $uMoblet.load();
      var options = {
        offset: 1,
        items: 25
      };
      $uFeedLoader.load($scope.moblet, options, false)
        .then(function(data) {
          // Put the data from the feed in the $scope object
          $scope.data = data;
        });
    };

    init();
  }
};

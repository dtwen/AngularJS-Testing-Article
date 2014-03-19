//
// test/midway/requestsSpec.js
//
describe("Midway: Testing Requests", function() {

  var tester;
  beforeEach(function() {
    if(tester) {
      tester.destroy();
    }
    tester = ngMidwayTester('App');
  });

  it("should goto the videos_path by default", function(done) {
    tester.visit('/', function() {
      expect(tester.viewElement().html()).toContain('app-youtube-listings');
      done();
    });
  });

  it("should have a working video_path request", function(done) {
    var url = ROUTER.routePath('video_path', { id : 10 });
    tester.visit(url, function() {
      var $params = tester.inject('$routeParams');
      expect(parseInt($params.id)).toEqual(10);

      expect(tester.viewElement().html()).toContain('app-youtube-profile');
      done();
    });
  });

  it("should have a working other_path request", function(done) {
    var url = ROUTER.routePath('other_path');
    tester.visit(url, function() {
      expect(tester.viewElement().html()).toContain('other page');
      done();
    });
  });

});

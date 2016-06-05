(function(app){
  app.ThirdComponent =
  ng.core.Component({
    selector : 'my-third-component',
    template : '<p>hello</p>'
  })
  .Class({
    constructor : function(){

    }
  })
})(window.app || (window.app = {}));

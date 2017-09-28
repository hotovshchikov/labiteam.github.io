$(function () {
  'use strict';

  var posts = {};

  var promise = new Promise(function (resolve, reject) {
    $.ajax({
      url: 'https://api.myjson.com/bins/o79k1',
      dataType: 'json',
      type: 'GET',
      success: resolve,
      error: reject
    });
  });

  promise
    .then(function (data) {
      posts = data;
      var templateArticle = $('#template').html(),
        compileTemplate = Handlebars.compile(templateArticle),
        result = compileTemplate(data),
        content = $('.articles__item');
      content.html(result);

// get last options key to change value without :
      data.posts.map((item) => {
        var opt = item,
            optArr = Object.keys(opt.options),
            lastOpt = optArr[optArr.length - 1];
        $('.options__item:last-child .options__title').html(lastOpt);
        });
    })
    .catch(function (error) {
      console.log(error);
    });

})();



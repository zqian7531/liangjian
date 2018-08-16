 $.fn.spin = function(opts) {
    this.each(function() {
      var $this = $(this),
          data = $this.data();

      if (data.spinner) {
        data.spinner.stop();
        delete data.spinner;
      }
      if (opts !== false) {
        data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
      }
    });
    return this;
  };
  $('#preview1').spin();
  $('#preview2').spin({color: '#fff'});

  //Remove spinner upon click
  $('.preview').click(function() {
    $(this).spin(false);
  });



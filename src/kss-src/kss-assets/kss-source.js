(function (window, document) {
  'use strict';

  var KssSource = function (config) {
    this.bodyClass = config.bodyClass || 'kss-source-mode';
    this.detailsClass = config.detailsClass || 'kss-source';

    this.init();
  };

  KssSource.prototype.init = function () {
    var self = this;
    // Initialize all source toggle buttons.
    document.querySelectorAll('a[data-kss-source]').forEach(function (el) {
      el.onclick = self.showSource.bind(self);
    });
  };

  // Activation function that takes the ID of the element that will receive
  // fullscreen focus.
  KssSource.prototype.showSource = function () {
    var body = document.getElementsByTagName('body')[0],
      enabled = body.classList.contains(this.bodyClass),
      className = 'kss-source--open';

    document.querySelectorAll('.' + this.detailsClass).forEach(function (el) {
      if (!enabled) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += '' + className;
        }
      } else {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }
    });

    // Toggle the markup mode.
    body.classList.toggle(this.bodyClass);
  };

  // Export to DOM global space.
  window.KssSource = KssSource;

})(window, document);

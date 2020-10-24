//
// Scrollbar
//

'use strict'

const Scrollbar = (function() {
  // Variables

  const $scrollbar = $('.scrollbar-inner')

  // Methods

  function init() {
    $scrollbar.scrollbar().scrollLock()
  }

  // Events

  if ($scrollbar.length) {
    init()
  }
})()

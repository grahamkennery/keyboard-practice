'use strict';

(function () {
  // Supported layouts
  const LAYOUTS = {
    COLEMAK: 'colemak',
    QWERTY: 'qwerty'
  };

  // Add event listeners
  document.body.addEventListener('keydown', e => down('.' + e.code));
  document.body.addEventListener('keyup', e => up('.' + e.code));
  document.querySelector('#colemak-tab').addEventListener('click', () => changeLayout(LAYOUTS.COLEMAK));
  document.querySelector('#qwerty-tab').addEventListener('click', () => changeLayout(LAYOUTS.QWERTY));

  /**
   * Changes the layout to the specified type
   * @param  {String} layout - The LAYOUT to switch to
   */
  function changeLayout (layout) {
    if (!LAYOUTS[layout]) {
      throw new Error('Unsupported layout: ' + layout);
    }

    // Deselect all tabs
    document.querySelectorAll('tab').forEach(el => el.classList.remove('active'));

    // Select correct tab
    document.querySelector('#' + layout + '-tab').classList.add('active');

    // Switch keyboard class
    var keyboard = document.querySelector('keyboard');
    keyboard.className = layout;
  }

  /**
   * Called when a key is pressed - Set that key as active
   * @param  {Number} key - keyCode of the key that was pressed
   */
  function down (key) {
    var keys = document.querySelectorAll(key);

    keys.forEach(el => el.classList.add('active'));
  }

  /**
   * Called when a key is released - Unset that key as active
   * @param  {Number} key - keyCode of the key that was released
   */
  function up (key) {
    var keys = document.querySelectorAll(key);

    keys.forEach(el => el.classList.remove('active'));
  }
})();

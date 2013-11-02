
# checkbox-range

  Support shift clicking to select a range of checkboxes.
  
  [Try the demo](http://adamsanderson.github.io/checkbox-range/) if you're curious.

## Installation

    $ component install adamsanderson/checkbox-range

## API

  Call `checkboxRange` on a parent container to enable this behavior:
  
    var checkboxRange = require('checkbox-range');
    var list = document.querySelector('.check-list');

    checkboxRange(list);

  Now whenever a user holds shift, they will select or deselect all the checkboxes, just like a text or file selection.
  
  Each checkbox range is independent, so selections will not span multiple checkbox ranges.
  
## Supported Browsers
  
  Chrome and IE8+ should work just fine.  Firefox works, but only if the user shift clicks on a checkbox, not a label.  This is due to a [long outstanding bug](https://bugzilla.mozilla.org/show_bug.cgi?id=559506).

## License

  MIT

---

Adam Sanderson (http://monkeyandcrow.com)
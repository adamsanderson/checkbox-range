
# checkbox-range

  Support shift clicking to select a range of checkboxes.

## Installation

    $ component install adamsanderson/checkbox-range

## API

  Call `checkboxRange` on a parent container to enable this behavior:
  
    var checkboxRange = require('checkbox-range');
    var list = document.querySelector('.check-list');

    checkboxRange(list);

  Now whenever a user holds shift, they will select or deselect all the checkboxes, just like a text or file selection.
  
  Each checkbox range is independent, so selections will not span multiple checkbox ranges.

## License

  MIT

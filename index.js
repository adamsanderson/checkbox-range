var events = require("event");

module.exports = checkboxRange;

function checkboxRange(root) {
  var lastInput;
  
  events.bind(root, "click", function(event){
    var input = event.target || event.srcElement;
    var checked;
    
    if (isCheckbox(input)) {
      
      if (lastInput && event.shiftKey) {
        setAllBetween(root, lastInput, input);
      }
      
      lastInput = input;
    }
  });
  
  // Prevent IE8 from selecting text between the checkboxes when shift clicking
  events.bind(root, "selectstart", function(event){
    return !event.shiftKey;
  });
}

function isCheckbox(el) {
  return (el.tagName == 'INPUT' && el.type == "checkbox");
}

function setAllBetween(parent, start, end) {
  var checked = start.checked;
  var inputs  = parent.getElementsByTagName('INPUT');
  var inRange = false;
  var el;
  
  for (var i=0, len=inputs.length; i < len; i++) {
    el = inputs[i];
    if (!isCheckbox(el)) continue;
    
    if (el == start || el == end) {
      inRange    = !inRange;
      el.checked = checked;
    } else if (inRange) {
      el.checked = checked;
    }
    
  }
}
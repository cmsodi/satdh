/* 
The function toggleAcc takes an HTML element as an input (el) and toggles an "active" class for that element. It also toggles the visibility of the element's next sibling element (panel) by expanding or collapsing its height. When the height of the panel is not set (if (panel.style.maxHeight){...), it will be expanded to its full height (panel.scrollHeight). When the height of panel is set (else {...), it will be collapsed by setting panel.style.maxHeight to null.
*/

function toggleAcc(el) {
  el.classList.toggle("active")
  var panel = el.nextElementSibling;
  if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

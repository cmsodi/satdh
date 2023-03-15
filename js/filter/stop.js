/* 
The function "stop()" is used to remove all "animateTransform" elements from a HTML document. The function retrieves all elements with the tag name "animateTransform" using the "document.querySelectorAll" method, and then removes each element from its parent node using the "removeChild" method.
*/

function stop() {
    var animateElements = document.querySelectorAll("animateTransform");
    animateElements.forEach(function(element) {
      element.parentNode.removeChild(element);
    });
  }
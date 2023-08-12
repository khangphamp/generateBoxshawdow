export default {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      // Check if the clicked element is outside the bound element
      if (!(el === event.target || el.contains(event.target))) {
        // Call the provided method when a click outside occurs
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
};

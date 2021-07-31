export let appendBefore = function (child, parent) {
  parent.parentNode.insertBefore(child, parent);
};

export let appendAfter = function (child, parent) {
  parent.parentNode.insertBefore(child, parent.nextSibling);
};

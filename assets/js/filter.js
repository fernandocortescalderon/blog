// Filtro por pilar del índice. Sin JavaScript se muestran todos los posts.
(function () {
  var bar = document.querySelector('.filter');
  if (!bar) return;
  var buttons = bar.querySelectorAll('button[data-filter]');
  var cards = document.querySelectorAll('.post-card');
  var empty = document.querySelector('[data-empty]');
  var valid = Array.prototype.map.call(buttons, function (b) { return b.dataset.filter; });

  function apply(filter) {
    if (valid.indexOf(filter) === -1) filter = 'todos';
    var visible = 0;
    cards.forEach(function (card) {
      var show = filter === 'todos' || card.dataset.pillar === filter;
      card.hidden = !show;
      if (show) visible++;
    });
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.filter === filter ? 'true' : 'false');
    });
    if (empty) empty.hidden = visible > 0;
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.dataset.filter;
      history.replaceState(null, '', f === 'todos' ? location.pathname : '#' + f);
      apply(f);
    });
  });

  window.addEventListener('hashchange', function () { apply(location.hash.slice(1)); });
  bar.hidden = false;
  apply(location.hash.slice(1));
})();

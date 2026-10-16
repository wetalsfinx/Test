// =====================================================
//  «Это я» — одно имя на все тренажёры (с 16.10).
//  Запоминает имя и магазин на этом телефоне и сам
//  подставляет их в следующий тренажёр и на страницу go.html.
//  Подключается строкой <script src="me.js"></script>
//  ПОСЛЕ stores.js. Входной тест не подключаем.
// =====================================================
(function () {
  var KEY = 'go585_me';
  function get() { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
  function words(s) { return String(s || '').trim().split(/\s+/).filter(function (w) { return w.length > 1; }); }
  function fill() {
    var n = document.getElementById('userName'), c = document.getElementById('userCity'), me = get();
    if (!n || !c) return;
    if (window.fillStores585) window.fillStores585();
    if (me && !n.value) n.value = me.name;
    if (me && !c.value) { for (var i = 0; i < c.options.length; i++) if (c.options[i].value === me.city) c.value = me.city; }
    if (!n.dataset.me585) {
      n.dataset.me585 = '1';
      var save = function () {
        var name = n.value.trim().replace(/\s+/g, ' ');
        if (words(name).length >= 2 && c.value) set({ name: name, city: c.value });
      };
      n.addEventListener('change', save); c.addEventListener('change', save);
      document.addEventListener('click', function (e) { if (e.target && e.target.closest && e.target.closest('button')) save(); }, true);
    }
  }
  fill();
  document.addEventListener('DOMContentLoaded', fill);
})();

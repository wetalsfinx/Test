// =====================================================
//  СПИСОК МАГАЗИНОВ 585GOLD — меняйте только здесь
//  Один магазин — одна строка, в кавычках, с запятой в конце.
//  Если город повторяется — пишите город и адрес.
// =====================================================
window.STORES_585 = [
  'СПб, Новочеркасский, 28/19',
  'СПб, Дыбенко, 27',
  'Самара',
  'Казань',
  'Тюмень',
  'Черкесск',
  'Ульяновск',
  'Нальчик',
];

// ---- ниже ничего менять не нужно ----
window.fillStores585 = function () {
  document.querySelectorAll('select#userCity').forEach(function (sel) {
    if (sel.dataset.stores585) return;
    var first = sel.options[0], cur = sel.value;
    sel.innerHTML = '';
    if (first && !first.value) sel.appendChild(first);
    window.STORES_585.forEach(function (s) { var o = document.createElement('option'); o.value = o.textContent = s; sel.appendChild(o); });
    if (cur && window.STORES_585.indexOf(cur) >= 0) sel.value = cur;
    sel.dataset.stores585 = '1';
  });
};
window.fillStores585();
document.addEventListener('DOMContentLoaded', window.fillStores585);

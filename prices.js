// ═══════════════════════════════════════════════════════════════════════
// СИСТЕМА УПРАВЛЕНИЯ ЦЕНАМИ Invisible Doors
// ═══════════════════════════════════════════════════════════════════════
// Все цены хранятся в этом файле как DEFAULTS.
// При загрузке страницы пытаемся подгрузить переопределения из localStorage
// (ключ idloft_prices) — это то, что админ изменил через admin_prices.html.
//
// В калькуляторе doors_calc.html вместо хардкода
//   let petly = 3000;
// используем
//   let petly = PRICES.dop.petly_agb;
//
// Если админ ничего не менял — берётся дефолт. Если менял — берётся из LS.
// ═══════════════════════════════════════════════════════════════════════

const PRICES_KEY = 'idloft_prices';

const PRICES_DEFAULTS = {
  // ─── ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ ───────────────────────────────────────────
  dop: {
    torc_zashelka:        { val: 1000,  label: 'Торцевая защёлка' },
    otboy:                { val: 5000,  label: 'Отбойная пластина' },
    petly_agb:            { val: 3000,  label: 'Петля AGB (доп.)' },
    petly_agb_six:        { val: 4000,  label: 'Петля AGB (6 шт.+)' },
    petly_dovod:          { val: 20500, label: 'Петля с доводчиком' },
    invisible_dovod:      { val: 19900, label: 'Скрытый доводчик' },
    fire_protection:      { val: 6000,  label: 'Противопожарная пропитка' },
    shumka:               { val: 6000,  label: 'Шумоизоляция' },
    lvl_napolneniye:      { val: 10000, label: 'LVL наполнение' },
    stopor:               { val: 5000,  label: 'Стопор' },
    autoporog:            { val: 5500,  label: 'Автопорог / ветропорог' },
    reshetka_white:       { val: 7000,  label: 'Вентрешётка белая' },
    reshetka_black:       { val: 7000,  label: 'Вентрешётка чёрная' },
    reshetka_ral:         { val: 11000, label: 'Вентрешётка RAL' },
    laz_standart:         { val: 5000,  label: 'Лаз для питомца стандарт' },
    laz_cat:              { val: 10000, label: 'Лаз для кошки' },
    laz_vrez:             { val: 5000,  label: 'Врезка люка для лаза' },
    magic_zarez:          { val: 5000,  label: 'Зарез без механизма (Magic)' },
    tenevoy_one_side:     { val: 6000,  label: 'Теневой зазор (1 сторона)' },
    tenevoy_doble_side:   { val: 9000,  label: 'Теневой зазор (2 стороны)' },
    srez_width:           { val: 3000,  label: 'Срез по ширине' },
    emal_zerkalo_al:      { val: 9000,  label: 'Эмаль + зеркало + AL кромка' },
    frez_pod_dovod:       { val: 6000,  label: 'Фрезеровка под доводчик' },
    torec_ral:            { val: 8000,  label: 'Торец AL_RAL для премиум' },
    sync_system:          { val: 6000,  label: 'Система синхронизации (DUO)' },
    penal_price:          { val: 0,     label: 'Механизм Пенал' },
  },

  // ─── МЕХАНИЗМЫ MAGIC ────────────────────────────────────────────────
  magic_mech: {
    archi:                { val: 33000, label: 'Механизм ARCHI' },
    armadillo:            { val: 36000, label: 'Механизм Armadillo' },
    magic2:               { val: 41000, label: 'Механизм Magic2' },
    magic_1100:           { val: 36000, label: 'Механизм Magic 1100' },
  },

  // ─── ТЕНЕВОЙ ПЛИНТУС ────────────────────────────────────────────────
  plintus_tenevoy: {
    one_side:             { val: 17000, label: 'Теневой плинтус (1 сторона)' },
    two_side:             { val: 22000, label: 'Теневой плинтус (2 стороны)' },
    light:                { val: 3000,  label: 'Подсветка плинтуса' },
  },

  // ─── ПЛИНТУС (ЦЕНА ЗА П.М.) ─────────────────────────────────────────
  plintus_pm: {
    micro_mini:           { val: 680,   label: 'Микро-мини, п.м.' },
    micro_maxi:           { val: 850,   label: 'Микро-макси, п.м.' },
    tenevoy:              { val: 850,   label: 'Теневой, п.м.' },
    skryty_cherny:        { val: 950,   label: 'Скрытый чёрный, п.м.' },
    skryty_mate_chrom:    { val: 850,   label: 'Скрытый матовый хром, п.м.' },
  },

  // ─── LOFT МЕХАНИЗМЫ ─────────────────────────────────────────────────
  loft: {
    base:                 { val: 16400, label: 'Loft базовый механизм' },
    torc:                 { val: 12100, label: 'Loft торцевой механизм' },
  },

  // ─── ЗАМКИ ──────────────────────────────────────────────────────────
  lock: {
    standart:             { val: 0,     label: 'Штатный замок' },
    fire:                 { val: 5000,  label: 'Противопожарный замок' },
    antipanika:           { val: 7000,  label: 'Антипаника-ручки' },
    rasporka:             { val: 3000,  label: 'Антипаника распорка' },
    touch:                { val: 3000,  label: 'AGB Touch (врезка)' },
    push_handle:          { val: 5000,  label: 'PUSH-ручка' },
    bonaiti:              { val: 4000,  label: 'Bonaiti' },
    skrytaya_ruchka:      { val: 24000, label: 'Скрытая ручка (без фикс.)' },
    skrytaya_ruchka_fix:  { val: 27000, label: 'Скрытая ручка (с фикс.)' },
    electro_atel:         { val: 12000, label: 'Электромех. соленоидный AT-EL800' },
    electro_frez:         { val: 6000,  label: 'Электромех. замок (врезка)' },
    skud:                 { val: 6000,  label: 'СКУД замок (врезка)' },
    urban:                { val: 2000,  label: 'Врезка Urban' },
    change_lock_color:    { val: 2500,  label: 'Смена цвета замка' },
  },

  // ─── ПАНЕЛИ ─────────────────────────────────────────────────────────
  panel: {
    hpl:                  { val: 7000,  label: 'HPL панель' },
    egger:                { val: 10000, label: 'Egger панель' },
  },

  // ─── AL КРОМКА (РАСПАШНЫЕ) ──────────────────────────────────────────
  al_kromka: {
    chrome:               { val: 5000,  label: 'AL Хром' },
    cherny:               { val: 5000,  label: 'AL Чёрная' },
    shampan:              { val: 13000, label: 'AL Шампань' },
    ral:                  { val: 4000,  label: 'AL RAL' },
  },

  // ─── AL КРОМКА (ОТКАТНЫЕ) ───────────────────────────────────────────
  al_kromka_otkat: {
    chrome:               { val: 4000,  label: 'AL Хром (откатная)' },
    cherny:               { val: 5000,  label: 'AL Чёрная (откатная)' },
    shampan:              { val: 5000,  label: 'AL Шампань (откатная)' },
  },

  // ─── ДЕКОРАТИВНЫЕ КОМПЛЕКТАЦИИ ──────────────────────────────────────
  decor: {
    black_edition:        { val: 5000,  label: 'Black Edition (полотно)' },
    shampan_edition:      { val: 8000,  label: 'Champagne Edition (полотно)' },
    korob_ral:            { val: 6000,  label: 'Короб RAL (доп.)' },
    korob_black:          { val: 5000,  label: 'Короб чёрный (доп.)' },
    korob_shampan:        { val: 5000,  label: 'Короб шампань (доп.)' },
  },

  // ─── ШПОН ───────────────────────────────────────────────────────────
  spon: {
    zakaz:                { val: 12000, label: 'Шпон под заказ (доп.)' },
    panel_zakaz:          { val: 8000,  label: 'Шпон-панель под заказ (доп.)' },
  },
};

// ═══════════════════════════════════════════════════════════════════════
// ЗАГРУЗКА ЦЕН
// ═══════════════════════════════════════════════════════════════════════

// Глубокое копирование DEFAULTS чтобы не мутировать оригинал
function clonePrices(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Загружает текущие цены: дефолты + переопределения из localStorage
function loadPrices() {
  const prices = clonePrices(PRICES_DEFAULTS);
  try {
    const overrides = JSON.parse(localStorage.getItem(PRICES_KEY) || '{}');
    // overrides имеет формат { 'category.key': value }
    Object.keys(overrides).forEach(path => {
      const parts = path.split('.');
      if (parts.length !== 2) return;
      const [cat, key] = parts;
      if (prices[cat] && prices[cat][key]) {
        prices[cat][key].val = overrides[path];
      }
    });
  } catch(e) {
    console.warn('PRICES load error:', e);
  }
  return prices;
}

// Глобальный объект цен — доступен везде
const PRICES = loadPrices();

// Помощник: получить цену по пути 'dop.shumka' → 6000
function getPrice(path) {
  const parts = path.split('.');
  if (parts.length !== 2) return 0;
  const [cat, key] = parts;
  return (PRICES[cat] && PRICES[cat][key]) ? PRICES[cat][key].val : 0;
}

// Сохранение переопределений (используется в admin_prices.html)
function savePriceOverride(path, value) {
  try {
    const overrides = JSON.parse(localStorage.getItem(PRICES_KEY) || '{}');
    overrides[path] = value;
    localStorage.setItem(PRICES_KEY, JSON.stringify(overrides));
    // Также обновим в памяти
    const parts = path.split('.');
    if (parts.length === 2 && PRICES[parts[0]] && PRICES[parts[0]][parts[1]]) {
      PRICES[parts[0]][parts[1]].val = value;
    }
    return true;
  } catch(e) {
    console.error('PRICES save error:', e);
    return false;
  }
}

// Сброс всех переопределений (вернуть к дефолтам)
function resetAllPrices() {
  localStorage.removeItem(PRICES_KEY);
}

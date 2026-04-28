// ═══════════════════════════════════════════════════════════════════════
// СИСТЕМА УПРАВЛЕНИЯ ЦЕНАМИ Invisible Doors
// ═══════════════════════════════════════════════════════════════════════
// Все цены хранятся в этом файле как DEFAULTS.
// При загрузке страницы пытаемся подгрузить переопределения из localStorage
// (ключ idloft_prices) — это то, что админ изменил через admin_prices.html.
// ═══════════════════════════════════════════════════════════════════════

const PRICES_KEY = 'idloft_prices';

const PRICES_DEFAULTS = {
  // ═══════════════════════════════════════════════════════════════════
  // 1. БАЗОВЫЕ ЦЕНЫ ПОЛОТНА — матрица по высоте × толщине × типу
  // ═══════════════════════════════════════════════════════════════════
  base_skrytaya: {
    h2000_t40:  { val: 37100, label: 'Скрытая, h≤2000, толщина 40' },
    h2000_t60:  { val: 57400, label: 'Скрытая, h≤2000, толщина 60' },
    h2199_t40:  { val: 40000, label: 'Скрытая, h≤2199, толщина 40' },
    h2199_t60:  { val: 58400, label: 'Скрытая, h≤2199, толщина 60' },
    h2300_t40:  { val: 44400, label: 'Скрытая, h≤2300, толщина 40' },
    h2300_t60:  { val: 67700, label: 'Скрытая, h≤2300, толщина 60' },
    h2400_t40:  { val: 47600, label: 'Скрытая, h≤2400, толщина 40' },
    h2400_t60:  { val: 73800, label: 'Скрытая, h≤2400, толщина 60' },
    h2700_t40:  { val: 67400, label: 'Скрытая, h≤2700, толщина 40' },
    h2700_t60:  { val: 76100, label: 'Скрытая, h≤2700, толщина 60' },
    h2701_t40:  { val: 75000, label: 'Скрытая, h>2700, толщина 40' },
    h2701_t60:  { val: 84100, label: 'Скрытая, h>2700, толщина 60' },
  },
  base_magic_loft: {
    h2000_t40:  { val: 19900, label: 'Magic/Loft, h=2000, t=40' },
    h2000_t55:  { val: 21900, label: 'Magic/Loft, h=2000, t=55' },
    h2000_t60:  { val: 22900, label: 'Magic/Loft, h=2000, t=60' },
    h2100_t40:  { val: 21900, label: 'Magic/Loft, h≤2100, t=40' },
    h2100_t55:  { val: 24900, label: 'Magic/Loft, h≤2100, t=55' },
    h2100_t60:  { val: 25900, label: 'Magic/Loft, h≤2100, t=60' },
    h2400_t40:  { val: 24900, label: 'Magic/Loft, h≤2400, t=40' },
    h2400_t55:  { val: 27900, label: 'Magic/Loft, h≤2400, t=55' },
    h2400_t60:  { val: 28900, label: 'Magic/Loft, h≤2400, t=60' },
    h2401_t40:  { val: 38900, label: 'Magic/Loft, h>2400, t=40' },
    h2401_t55:  { val: 41900, label: 'Magic/Loft, h>2400, t=55' },
    h2401_t60:  { val: 42900, label: 'Magic/Loft, h>2400, t=60' },
    polotno_frez_addition: { val: 2000, label: 'Доплата «Полотно+фрезеровка»' },
  },
  base_penal: {
    h2000:  { val: 19900, label: 'Пенал, h=2000' },
    h2100:  { val: 21900, label: 'Пенал, h≤2100' },
    h2400:  { val: 24900, label: 'Пенал, h≤2400' },
    h3000:  { val: 38900, label: 'Пенал, h≤3000' },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 2. ЦЕНЫ ПЕНАЛА (механизм + короб) — матрица высота × ширина
  // ═══════════════════════════════════════════════════════════════════
  penal_mech: {
    h2100_w900:   { val: 74000,  label: 'Пенал, h≤2100, w≤900' },
    h2100_w1000:  { val: 85000,  label: 'Пенал, h≤2100, w=1000' },
    h2100_w1200:  { val: 90000,  label: 'Пенал, h≤2100, w=1200' },
    h2300_w900:   { val: 79000,  label: 'Пенал, h≤2300, w≤900' },
    h2300_w1000:  { val: 89900,  label: 'Пенал, h≤2300, w=1000' },
    h2300_w1200:  { val: 94500,  label: 'Пенал, h≤2300, w=1200' },
    h2400_w900:   { val: 80000,  label: 'Пенал, h=2400, w≤900' },
    h2400_w1000:  { val: 90000,  label: 'Пенал, h=2400, w=1000' },
    h2400_w1200:  { val: 103500, label: 'Пенал, h=2400, w=1200' },
    h2700_w900:   { val: 96100,  label: 'Пенал, h≤2700, w≤900' },
    h2700_w1000:  { val: 105300, label: 'Пенал, h≤2700, w=1000' },
    h2700_w1200:  { val: 188800, label: 'Пенал, h≤2700, w=1200' },
    h3000_w900:   { val: 109000, label: 'Пенал, h≤3000, w≤900' },
    h3000_w1000:  { val: 117900, label: 'Пенал, h≤3000, w=1000' },
    h3000_w1200:  { val: 125000, label: 'Пенал, h≤3000, w=1200' },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 3. ЦЕНЫ ПОКРЫТИЙ (эмаль) — полная матрица по толщине × высоте × типу
  // ═══════════════════════════════════════════════════════════════════
  // ВАЖНО: для t=55 и t=60 значение mate с противопожарной (fireProtection)
  // ставится в PRICES.emal_fire_protection.t55_mate (фикс. 25000)
  emal_fire_protection: {
    t55_mate:  { val: 25000, label: 'Эмаль матовая t=55 с противопожаркой (фикс)' },
  },

  // Magic/Loft (любая толщина)
  emal_magic_loft: {
    h2000_glyanec:    { val: 30700, label: 'Эмаль глянец, Magic/Loft, h=2000' },
    h2000_mate:       { val: 19800, label: 'Эмаль матовая, Magic/Loft, h=2000' },
    h2000_supermate:  { val: 27800, label: 'Эмаль супермат, Magic/Loft, h=2000' },
    h2100_glyanec:    { val: 30700, label: 'Эмаль глянец, Magic/Loft, h≤2100' },
    h2100_mate:       { val: 19900, label: 'Эмаль матовая, Magic/Loft, h≤2100' },
    h2100_supermate:  { val: 27900, label: 'Эмаль супермат, Magic/Loft, h≤2100' },
    h2400_glyanec:    { val: 30700, label: 'Эмаль глянец, Magic/Loft, h≤2400' },
    h2400_mate:       { val: 19900, label: 'Эмаль матовая, Magic/Loft, h≤2400' },
    h2400_supermate:  { val: 27900, label: 'Эмаль супермат, Magic/Loft, h≤2400' },
    h3500_glyanec:    { val: 24100, label: 'Эмаль глянец, Magic/Loft, h≤3500' },
    h3500_mate:       { val: 13300, label: 'Эмаль матовая, Magic/Loft, h≤3500' },
    h3500_supermate:  { val: 21300, label: 'Эмаль супермат, Magic/Loft, h≤3500' },
    // Особые перезаписи zerkalo_m1 на разных высотах для Magic/Loft
    h2100_zerkalo_m1: { val: 10000, label: 'Зеркало M1 Magic/Loft, h≤2100' },
    h2400_zerkalo_m1: { val: 12000, label: 'Зеркало M1 Magic/Loft, h≤2400' },
    h3500_zerkalo_m1: { val: 12000, label: 'Зеркало M1 Magic/Loft, h≤3500' },
  },

  emal_t40: {
    h2000_glyanec: { val: 30500, label: 'Эмаль глянец, t=40, h=2000' },
    h2000_mate:    { val: 18000, label: 'Эмаль матовая, t=40, h=2000' },
    h2100_glyanec: { val: 30500, label: 'Эмаль глянец, t=40, h≤2100' },
    h2100_mate:    { val: 20000, label: 'Эмаль матовая, t=40, h≤2100' },
    h2300_glyanec: { val: 31500, label: 'Эмаль глянец, t=40, h≤2300' },
    h2300_mate:    { val: 20000, label: 'Эмаль матовая, t=40, h≤2300' },
    h2400_glyanec: { val: 30500, label: 'Эмаль глянец, t=40, h≤2400' },
    h2400_mate:    { val: 24000, label: 'Эмаль матовая, t=40, h≤2400' },
    h2700_glyanec: { val: 18500, label: 'Эмаль глянец, t=40, h≤2700' },
    h2700_mate:    { val: 10000, label: 'Эмаль матовая, t=40, h≤2700' },
    h3500_glyanec: { val: 16500, label: 'Эмаль глянец, t=40, h≤3500' },
    h3500_mate:    { val: 8000,  label: 'Эмаль матовая, t=40, h≤3500' },
  },

  emal_t55: {
    h2000_glyanec:    { val: 27800, label: 'Эмаль глянец, t=55, h=2000' },
    h2000_mate:       { val: 15800, label: 'Эмаль матовая, t=55, h=2000 (без пожарки)' },
    h2000_supermate:  { val: 23800, label: 'Эмаль супермат, t=55, h=2000' },
    h2199_glyanec:    { val: 27400, label: 'Эмаль глянец, t=55, h≤2199' },
    h2199_mate:       { val: 15900, label: 'Эмаль матовая, t=55, h≤2199 (без пожарки)' },
    h2199_supermate:  { val: 23900, label: 'Эмаль супермат, t=55, h≤2199' },
    h2300_glyanec:    { val: 27500, label: 'Эмаль глянец, t=55, h≤2300' },
    h2300_mate:       { val: 15500, label: 'Эмаль матовая, t=55, h≤2300 (без пожарки)' },
    h2300_supermate:  { val: 23500, label: 'Эмаль супермат, t=55, h≤2300' },
    h2400_glyanec:    { val: 26300, label: 'Эмаль глянец, t=55, h≤2400' },
    h2400_mate:       { val: 19300, label: 'Эмаль матовая, t=55, h≤2400 (без пожарки)' },
    h2400_supermate:  { val: 27300, label: 'Эмаль супермат, t=55, h≤2400' },
    h2700_glyanec:    { val: 16500, label: 'Эмаль глянец, t=55, h≤2700' },
    h2700_mate:       { val: 7500,  label: 'Эмаль матовая, t=55, h≤2700 (без пожарки)' },
    h2700_supermate:  { val: 15500, label: 'Эмаль супермат, t=55, h≤2700' },
    h3500_glyanec:    { val: 13900, label: 'Эмаль глянец, t=55, h≤3500' },
    h3500_mate:       { val: 4900,  label: 'Эмаль матовая, t=55, h≤3500 (без пожарки)' },
    h3500_supermate:  { val: 12900, label: 'Эмаль супермат, t=55, h≤3500' },
  },

  emal_t60: {
    h2000_glyanec:    { val: 23800, label: 'Эмаль глянец, t=60, h=2000' },
    h2000_mate:       { val: 8400,  label: 'Эмаль матовая, t=60, h=2000' },
    h2000_supermate:  { val: 16400, label: 'Эмаль супермат, t=60, h=2000' },
    h2199_glyanec:    { val: 23800, label: 'Эмаль глянец, t=60, h≤2199' },
    h2199_mate:       { val: 8400,  label: 'Эмаль матовая, t=60, h≤2199' },
    h2199_supermate:  { val: 16400, label: 'Эмаль супермат, t=60, h≤2199' },
    h2300_glyanec:    { val: 23900, label: 'Эмаль глянец, t=60, h≤2300' },
    h2300_mate:       { val: 8600,  label: 'Эмаль матовая, t=60, h≤2300' },
    h2300_supermate:  { val: 16600, label: 'Эмаль супермат, t=60, h≤2300' },
    h2400_glyanec:    { val: 20800, label: 'Эмаль глянец, t=60, h≤2400' },
    h2400_mate:       { val: 5400,  label: 'Эмаль матовая, t=60, h≤2400' },
    h2400_supermate:  { val: 13400, label: 'Эмаль супермат, t=60, h≤2400' },
    h2700_glyanec:    { val: 29100, label: 'Эмаль глянец, t=60, h≤2700' },
    h2700_mate:       { val: 13700, label: 'Эмаль матовая, t=60, h≤2700' },
    h2700_supermate:  { val: 21700, label: 'Эмаль супермат, t=60, h≤2700' },
    h3000_glyanec:    { val: 29100, label: 'Эмаль глянец, t=60, h<3000' },
    h3000_mate:       { val: 13700, label: 'Эмаль матовая, t=60, h<3000' },
    h3000_supermate:  { val: 21700, label: 'Эмаль супермат, t=60, h<3000' },
  },

  emal_penal: {
    h2000_glyanec:    { val: 30000, label: 'Эмаль глянец, Пенал, h=2000' },
    h2000_mate:       { val: 20000, label: 'Эмаль матовая, Пенал, h=2000' },
    h2000_supermate:  { val: 28000, label: 'Эмаль супермат, Пенал, h=2000' },
    h2100_glyanec:    { val: 31000, label: 'Эмаль глянец, Пенал, h<2100' },
    h2100_mate:       { val: 20000, label: 'Эмаль матовая, Пенал, h<2100' },
    h2100_supermate:  { val: 28000, label: 'Эмаль супермат, Пенал, h<2100' },
    h2400_glyanec:    { val: 30000, label: 'Эмаль глянец, Пенал, h≤2400' },
    h2400_mate:       { val: 19000, label: 'Эмаль матовая, Пенал, h≤2400' },
    h2400_supermate:  { val: 27000, label: 'Эмаль супермат, Пенал, h≤2400' },
    h3000_glyanec:    { val: 24000, label: 'Эмаль глянец, Пенал, h≤3000' },
    h3000_mate:       { val: 13000, label: 'Эмаль матовая, Пенал, h≤3000' },
    h3000_supermate:  { val: 20000, label: 'Эмаль супермат, Пенал, h≤3000' },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 4. ЦЕНЫ ШПОНА — полная матрица
  // ═══════════════════════════════════════════════════════════════════
  spon_magic_loft: {
    h2000_standart: { val: 24700, label: 'Шпон стандарт, Magic/Loft, h=2000' },
    h2000_lux:      { val: 41500, label: 'Шпон люкс, Magic/Loft, h=2000' },
    h2000_lux_plus: { val: 54700, label: 'Шпон люкс+, Magic/Loft, h=2000' },
    h2100_standart: { val: 28300, label: 'Шпон стандарт, Magic/Loft, h≤2100' },
    h2100_lux:      { val: 43900, label: 'Шпон люкс, Magic/Loft, h≤2100' },
    h2100_lux_plus: { val: 57100, label: 'Шпон люкс+, Magic/Loft, h≤2100' },
    h2400_standart: { val: 27700, label: 'Шпон стандарт, Magic/Loft, h≤2400' },
    h2400_lux:      { val: 49900, label: 'Шпон люкс, Magic/Loft, h≤2400' },
    h2400_lux_plus: { val: 65500, label: 'Шпон люкс+, Magic/Loft, h≤2400' },
    h3500_standart: { val: 25300, label: 'Шпон стандарт, Magic/Loft, h≤3500' },
    h3500_lux:      { val: 46800, label: 'Шпон люкс, Magic/Loft, h≤3500' },
    h3500_lux_plus: { val: 60100, label: 'Шпон люкс+, Magic/Loft, h≤3500' },
  },

  spon_t40: {
    h2000_standart: { val: 24500, label: 'Шпон стандарт, t=40, h=2000' },
    h2000_lux:      { val: 36500, label: 'Шпон люкс, t=40, h=2000' },
    h2000_lux_plus: { val: 46500, label: 'Шпон люкс+, t=40, h=2000' },
    h2100_standart: { val: 24500, label: 'Шпон стандарт, t=40, h≤2100' },
    h2100_lux:      { val: 36500, label: 'Шпон люкс, t=40, h≤2100' },
    h2100_lux_plus: { val: 46500, label: 'Шпон люкс+, t=40, h≤2100' },
    h2300_standart: { val: 25500, label: 'Шпон стандарт, t=40, h≤2300' },
    h2300_lux:      { val: 38500, label: 'Шпон люкс, t=40, h≤2300' },
    h2300_lux_plus: { val: 50500, label: 'Шпон люкс+, t=40, h≤2300' },
    h2400_standart: { val: 25500, label: 'Шпон стандарт, t=40, h≤2400' },
    h2400_lux:      { val: 39500, label: 'Шпон люкс, t=40, h≤2400' },
    h2400_lux_plus: { val: 51500, label: 'Шпон люкс+, t=40, h≤2400' },
    h2700_standart: { val: 17500, label: 'Шпон стандарт, t=40, h≤2700' },
    h2700_lux:      { val: 30500, label: 'Шпон люкс, t=40, h≤2700' },
    h2700_lux_plus: { val: 43500, label: 'Шпон люкс+, t=40, h≤2700' },
    h3500_standart: { val: 14500, label: 'Шпон стандарт, t=40, h≤3500' },
    h3500_lux:      { val: 30500, label: 'Шпон люкс, t=40, h≤3500' },
    h3500_lux_plus: { val: 42500, label: 'Шпон люкс+, t=40, h≤3500' },
  },

  spon_t55: {
    h2000_standart: { val: 23300, label: 'Шпон стандарт, t=55, h=2000' },
    h2000_lux:      { val: 35300, label: 'Шпон люкс, t=55, h=2000' },
    h2000_lux_plus: { val: 45300, label: 'Шпон люкс+, t=55, h=2000' },
    h2199_standart: { val: 22400, label: 'Шпон стандарт, t=55, h≤2199' },
    h2199_lux:      { val: 34400, label: 'Шпон люкс, t=55, h≤2199' },
    h2199_lux_plus: { val: 44400, label: 'Шпон люкс+, t=55, h≤2199' },
    h2300_standart: { val: 23000, label: 'Шпон стандарт, t=55, h≤2300' },
    h2300_lux:      { val: 36000, label: 'Шпон люкс, t=55, h≤2300' },
    h2300_lux_plus: { val: 48000, label: 'Шпон люкс+, t=55, h≤2300' },
    h2400_standart: { val: 22800, label: 'Шпон стандарт, t=55, h≤2400' },
    h2400_lux:      { val: 36800, label: 'Шпон люкс, t=55, h≤2400' },
    h2400_lux_plus: { val: 48800, label: 'Шпон люкс+, t=55, h≤2400' },
    h2700_standart: { val: 16000, label: 'Шпон стандарт, t=55, h≤2700' },
    h2700_lux:      { val: 29000, label: 'Шпон люкс, t=55, h≤2700' },
    h2700_lux_plus: { val: 42000, label: 'Шпон люкс+, t=55, h≤2700' },
    h3500_standart: { val: 12400, label: 'Шпон стандарт, t=55, h≤3500' },
    h3500_lux:      { val: 28400, label: 'Шпон люкс, t=55, h≤3500' },
    h3500_lux_plus: { val: 40400, label: 'Шпон люкс+, t=55, h≤3500' },
  },

  spon_t60: {
    h2000_standart: { val: 20500, label: 'Шпон стандарт, t=60, h=2000' },
    h2000_lux:      { val: 32500, label: 'Шпон люкс, t=60, h=2000' },
    h2000_lux_plus: { val: 42500, label: 'Шпон люкс+, t=60, h=2000' },
    h2199_standart: { val: 22100, label: 'Шпон стандарт, t=60, h≤2199' },
    h2199_lux:      { val: 34100, label: 'Шпон люкс, t=60, h≤2199' },
    h2199_lux_plus: { val: 44100, label: 'Шпон люкс+, t=60, h≤2199' },
    h2300_standart: { val: 19300, label: 'Шпон стандарт, t=60, h≤2300' },
    h2300_lux:      { val: 32300, label: 'Шпон люкс, t=60, h≤2300' },
    h2300_lux_plus: { val: 44300, label: 'Шпон люкс+, t=60, h≤2300' },
    h2400_standart: { val: 17100, label: 'Шпон стандарт, t=60, h≤2400' },
    h2400_lux:      { val: 30100, label: 'Шпон люкс, t=60, h≤2400' },
    h2400_lux_plus: { val: 42100, label: 'Шпон люкс+, t=60, h≤2400' },
    h2700_standart: { val: 33600, label: 'Шпон стандарт, t=60, h≤2700' },
    h2700_lux:      { val: 46600, label: 'Шпон люкс, t=60, h≤2700' },
    h2700_lux_plus: { val: 58600, label: 'Шпон люкс+, t=60, h≤2700' },
    h3000_standart: { val: 30800, label: 'Шпон стандарт, t=60, h<3000' },
    h3000_lux:      { val: 46800, label: 'Шпон люкс, t=60, h<3000' },
    h3000_lux_plus: { val: 58800, label: 'Шпон люкс+, t=60, h<3000' },
  },

  spon_penal: {
    h2000_standart: { val: 24000, label: 'Шпон стандарт, Пенал, h=2000' },
    h2000_lux:      { val: 41000, label: 'Шпон люкс, Пенал, h=2000' },
    h2000_lux_plus: { val: 51000, label: 'Шпон люкс+, Пенал, h=2000' },
    h2100_standart: { val: 28000, label: 'Шпон стандарт, Пенал, h<2100' },
    h2100_lux:      { val: 44000, label: 'Шпон люкс, Пенал, h<2100' },
    h2100_lux_plus: { val: 54000, label: 'Шпон люкс+, Пенал, h<2100' },
    h2400_standart: { val: 28000, label: 'Шпон стандарт, Пенал, h≤2400' },
    h2400_lux:      { val: 44000, label: 'Шпон люкс, Пенал, h≤2400' },
    h2400_lux_plus: { val: 54000, label: 'Шпон люкс+, Пенал, h≤2400' },
    h3000_standart: { val: 25000, label: 'Шпон стандарт, Пенал, h≤3000' },
    h3000_lux:      { val: 47000, label: 'Шпон люкс, Пенал, h≤3000' },
    h3000_lux_plus: { val: 57000, label: 'Шпон люкс+, Пенал, h≤3000' },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 4b. GLASS_WORK — доплаты за стекло/зеркало с двух сторон + AL-кромка
  // (только для t=55 — для других толщин все = 0)
  // ═══════════════════════════════════════════════════════════════════
  glass_work_t55: {
    h2000_glass:        { val: 9300,  label: 'glass_work, t=55, h=2000' },
    h2000_glass_two:    { val: 9300,  label: 'glass_work_two, t=55, h=2000' },
    h2000_al:           { val: 10300, label: 'glass_al_work, t=55, h=2000' },
    h2000_al_two:       { val: 10300, label: 'glass_al_work_two, t=55, h=2000' },
    h2199_glass:        { val: 8400,  label: 'glass_work, t=55, h≤2199' },
    h2199_glass_two:    { val: 8400,  label: 'glass_work_two, t=55, h≤2199' },
    h2199_al:           { val: 9400,  label: 'glass_al_work, t=55, h≤2199' },
    h2199_al_two:       { val: 9400,  label: 'glass_al_work_two, t=55, h≤2199' },
    h2300_glass:        { val: 8000,  label: 'glass_work, t=55, h≤2300' },
    h2300_glass_two:    { val: 7500,  label: 'glass_work_two, t=55, h≤2300' },
    h2300_al:           { val: 9000,  label: 'glass_al_work, t=55, h≤2300' },
    h2300_al_two:       { val: 9000,  label: 'glass_al_work_two, t=55, h≤2300' },
    h2400_glass:        { val: 9800,  label: 'glass_work, t=55, h≤2400' },
    h2400_glass_two:    { val: 9300,  label: 'glass_work_two, t=55, h≤2400' },
    h2400_al:           { val: 10800, label: 'glass_al_work, t=55, h≤2400' },
    h2400_al_two:       { val: 10800, label: 'glass_al_work_two, t=55, h≤2400' },
    h2700_glass:        { val: -3000, label: 'glass_work, t=55, h≤2700' },
    h2700_glass_two:    { val: -3500, label: 'glass_work_two, t=55, h≤2700' },
    h2700_al:           { val: -1000, label: 'glass_al_work, t=55, h≤2700' },
    h2700_al_two:       { val: -1000, label: 'glass_al_work_two, t=55, h≤2700' },
    h3500_glass:        { val: 4400,  label: 'glass_work, t=55, h≤3500' },
    h3500_glass_two:    { val: 3900,  label: 'glass_work_two, t=55, h≤3500' },
    h3500_al:           { val: 8400,  label: 'glass_al_work, t=55, h≤3500' },
    h3500_al_two:       { val: 6400,  label: 'glass_al_work_two, t=55, h≤3500' },
  },

  // glass_work для t=60 (al — фиксированно −5000 на h<2700, дальше 0)
  glass_work_t60: {
    h2400_al:           { val: -5000, label: 'glass_al_work, t=60, h≤2400' },
    h2400_al_two:       { val: -5000, label: 'glass_al_work_two, t=60, h≤2400' },
    h2700_al:           { val: 0,     label: 'glass_al_work, t=60, h≤2700' },
    h2700_al_two:       { val: 0,     label: 'glass_al_work_two, t=60, h≤2700' },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 5. ЦЕНЫ ЗЕРКАЛ И ПЛЁНКИ
  // ═══════════════════════════════════════════════════════════════════
  glass_high: {
    zerkalo_m1_t60:    { val: 14000, label: 'Зеркало M1, h>2400, t=60' },
    zerkalo_m1_t40:    { val: 12000, label: 'Зеркало M1, h>2400, t=40' },
    zerkalo_m1_other:  { val: 14000, label: 'Зеркало M1, h>2400, остальные t' },
    plenka_t60:        { val: 14000, label: 'Плёнка, h>2400, t=60' },
    plenka_t40:        { val: 13000, label: 'Плёнка, h>2400, t=40' },
    plenka_other:      { val: 14000, label: 'Плёнка, h>2400, остальные t' },
    ral_addition:      { val: 28000, label: 'Покраска RAL, h>2400' },
  },
  glass_low: {
    zerkalo_m1_default: { val: 12000, label: 'Зеркало M1, h≤2400 (база)' },
    zerkalo_m1_t40:     { val: 10000, label: 'Зеркало M1, h≤2400, t=40' },
    plenka_t60:         { val: 12000, label: 'Плёнка, h≤2400, t=60' },
    plenka_t40:         { val: 11000, label: 'Плёнка, h≤2400, t=40' },
    plenka_other:       { val: 12000, label: 'Плёнка, h≤2400, остальные t' },
    ral_addition:       { val: 26000, label: 'Покраска RAL, h≤2400' },
    uvs:                { val: 4000,  label: 'УВС (h≤2400)' },
  },
  glass_addons: {
    svet_addition:        { val: 6000,  label: 'Доплата за «осветлённое» (+M1)' },
    graf_addition:        { val: 6000,  label: 'Доплата за «графит»' },
    graf_mate_addition:   { val: 12000, label: 'Доплата за «графит матовое»' },
    bronz_addition:       { val: 6000,  label: 'Доплата за «бронза»' },
    bronz_mate_addition:  { val: 12000, label: 'Доплата за «бронза матовая»' },
    lacobel_standart:     { val: 6000,  label: 'Доплата за лакобель стандарт' },
    lacobel:              { val: 14000, label: 'Доплата за лакобель премиум' },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 6. НАЦЕНКИ И КОЭФФИЦИЕНТЫ
  // ═══════════════════════════════════════════════════════════════════
  markup: {
    individual:     { val: 50, label: 'Индивидуальный тип, %' },
    mansard:        { val: 50, label: 'Мансардная дверь, %' },
    spon_diagonal:  { val: 20, label: 'Шпон диагональ, %' },
    spon_gorizont:  { val: 10, label: 'Шпон горизонт, %' },
    nonstandard:    { val: 10000, label: 'Нестандартный размер (доплата ₽)' },
  },

  // ═══════════════════════════════════════════════════════════════════
  // 7. ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ
  // ═══════════════════════════════════════════════════════════════════
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
    penal_price:          { val: 0,     label: 'Механизм Пенал (база)' },
  },
  magic_mech: {
    archi:                { val: 33000, label: 'Механизм ARCHI' },
    armadillo:            { val: 36000, label: 'Механизм Armadillo' },
    magic2:               { val: 41000, label: 'Механизм Magic2' },
    magic_1100:           { val: 36000, label: 'Механизм Magic 1100' },
  },
  plintus_tenevoy: {
    one_side:             { val: 17000, label: 'Теневой плинтус (1 сторона)' },
    two_side:             { val: 22000, label: 'Теневой плинтус (2 стороны)' },
    light:                { val: 3000,  label: 'Подсветка плинтуса' },
  },
  plintus_pm: {
    micro_mini:           { val: 680,   label: 'Микро-мини, п.м.' },
    micro_maxi:           { val: 850,   label: 'Микро-макси, п.м.' },
    tenevoy:              { val: 850,   label: 'Теневой, п.м.' },
    skryty_cherny:        { val: 950,   label: 'Скрытый чёрный, п.м.' },
    skryty_mate_chrom:    { val: 850,   label: 'Скрытый матовый хром, п.м.' },
  },
  loft: {
    base:                 { val: 16400, label: 'Loft базовый механизм' },
    torc:                 { val: 12100, label: 'Loft торцевой механизм' },
  },
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
  panel: {
    hpl:                  { val: 7000,  label: 'HPL панель' },
    egger:                { val: 10000, label: 'Egger панель' },
  },
  // Цены панелей-полотен (отдельная категория от обычных панелей)
  panel_polotno: {
    spon_t8_standart:     { val: 14000, label: 'Полотно-панель шпон-стандарт, t=8мм' },
    spon_t8_lux:          { val: 17000, label: 'Полотно-панель шпон-люкс, t=8мм' },
    spon_t8_lux_plus:     { val: 20000, label: 'Полотно-панель шпон-люкс+, t=8мм' },
    spon_t10_standart:    { val: 18000, label: 'Полотно-панель шпон-стандарт, t=10мм' },
    spon_t10_lux:         { val: 21000, label: 'Полотно-панель шпон-люкс, t=10мм' },
    spon_t10_lux_plus:    { val: 24000, label: 'Полотно-панель шпон-люкс+, t=10мм' },
    other:                { val: 12000, label: 'Полотно-панель прочее (по умолчанию)' },
  },
  // Замена цвета фурнитуры
  furnitura_color: {
    standart:             { val: 4000, label: 'Замена цвета фурнитуры (стандарт)' },
    gold_mate:            { val: 4500, label: 'Замена цвета фурнитуры (gold mate)' },
  },
  // Доп.покрытия
  glanec_lak: {
    inside:               { val: 15000, label: 'Покрытие глянцевым лаком (вн.сторона)' },
  },
  // Короб RAL — доплата если торец тоже AL_RAL
  korob_addons: {
    ral_torec_addition:   { val: 2000, label: 'Короб RAL — доплата если торец AL_RAL' },
  },
  al_kromka: {
    chrome:               { val: 5000,  label: 'AL Хром' },
    cherny:               { val: 5000,  label: 'AL Чёрная' },
    shampan:              { val: 13000, label: 'AL Шампань' },
    ral:                  { val: 4000,  label: 'AL RAL' },
  },
  al_kromka_otkat: {
    chrome:               { val: 4000,  label: 'AL Хром (откатная)' },
    cherny:               { val: 5000,  label: 'AL Чёрная (откатная)' },
    shampan:              { val: 5000,  label: 'AL Шампань (откатная)' },
  },
  decor: {
    black_edition:        { val: 5000,  label: 'Black Edition (полотно)' },
    shampan_edition:      { val: 8000,  label: 'Champagne Edition (полотно)' },
    korob_ral:            { val: 6000,  label: 'Короб RAL (доп.)' },
    korob_black:          { val: 5000,  label: 'Короб чёрный (доп.)' },
    korob_shampan:        { val: 5000,  label: 'Короб шампань (доп.)' },
  },
  spon: {
    zakaz:                { val: 12000, label: 'Шпон под заказ (доп.)' },
    panel_zakaz:          { val: 8000,  label: 'Шпон-панель под заказ (доп.)' },
  },
};

// ═══════════════════════════════════════════════════════════════════════
// ЗАГРУЗКА ЦЕН
// ═══════════════════════════════════════════════════════════════════════

function clonePrices(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadPrices() {
  const prices = clonePrices(PRICES_DEFAULTS);
  try {
    const overrides = JSON.parse(localStorage.getItem(PRICES_KEY) || '{}');
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

const PRICES = loadPrices();

function getPrice(path) {
  const parts = path.split('.');
  if (parts.length !== 2) return 0;
  const [cat, key] = parts;
  return (PRICES[cat] && PRICES[cat][key]) ? PRICES[cat][key].val : 0;
}

function savePriceOverride(path, value) {
  try {
    const overrides = JSON.parse(localStorage.getItem(PRICES_KEY) || '{}');
    overrides[path] = value;
    localStorage.setItem(PRICES_KEY, JSON.stringify(overrides));
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

function resetAllPrices() {
  localStorage.removeItem(PRICES_KEY);
}

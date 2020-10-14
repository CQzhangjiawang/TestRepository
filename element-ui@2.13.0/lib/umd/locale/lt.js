(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/lt', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.lt = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Valyti'
      },
      datepicker: {
        now: 'Dabar',
        today: '?iandien',
        cancel: 'At?aukti',
        clear: 'Valyti',
        confirm: 'OK',
        selectDate: 'Pasirink dat?',
        selectTime: 'Pasirink laik?',
        startDate: 'Data nuo',
        startTime: 'Laikas nuo',
        endDate: 'Data iki',
        endTime: 'Laikas iki',
        prevYear: 'Metai atgal',
        nextYear: 'Metai ? priek?',
        prevMonth: 'M?n. atgal',
        nextMonth: 'M?n. ? priek?',
        year: '',
        month1: 'Sausis',
        month2: 'Vasaris',
        month3: 'Kovas',
        month4: 'Balandis',
        month5: 'Gegu??',
        month6: 'Bir?elis',
        month7: 'Liepa',
        month8: 'Rugpj?tis',
        month9: 'Rugs?jis',
        month10: 'Spalis',
        month11: 'Lapkritis',
        month12: 'Gruodis',
        // week: 'savait?',
        weeks: {
          sun: 'S.',
          mon: 'Pr.',
          tue: 'A.',
          wed: 'T.',
          thu: 'K.',
          fri: 'Pn.',
          sat: '?.'
        },
        months: {
          jan: 'Sau',
          feb: 'Vas',
          mar: 'Kov',
          apr: 'Bal',
          may: 'Geg',
          jun: 'Bir',
          jul: 'Lie',
          aug: 'Rugp',
          sep: 'Rugs',
          oct: 'Spa',
          nov: 'Lap',
          dec: 'Gruo'
        }
      },
      select: {
        loading: 'Kraunasi',
        noMatch: 'Duomen? nerasta',
        noData: 'N?ra duomen?',
        placeholder: 'Pasirink'
      },
      cascader: {
        noMatch: 'Duomen? nerasta',
        loading: 'Kraunasi',
        placeholder: 'Pasirink',
        noData: 'N?ra duomen?'
      },
      pagination: {
        goto: 'Eiti ?',
        pagesize: '/p',
        total: 'Viso {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: '?inut?',
        confirm: 'OK',
        cancel: 'At?aukti',
        error: 'Klaida ?vestuose duomenyse'
      },
      upload: {
        deleteTip: 'spauskite "Trinti" nor?dami pa?alinti',
        delete: 'Trinti',
        preview: 'Per?i?r?ti',
        continue: 'Toliau'
      },
      table: {
        emptyText: 'Duomen? nerasta',
        confirmFilter: 'Patvirtinti',
        resetFilter: 'Atstatyti',
        clearFilter: 'I?valyti',
        sumText: 'Suma'
      },
      tree: {
        emptyText: 'N?ra duomen?'
      },
      transfer: {
        noMatch: 'Duomen? nerasta',
        noData: 'N?ra duomen?',
        titles: ['S?ra?as 1', 'S?ra?as 2'],
        filterPlaceholder: '?vesk rakta?od?',
        noCheckedFormat: 'Viso: {total}',
        hasCheckedFormat: 'Pa?ym?ta {checked} i? {total}'
      },
      image: {
        error: 'FAILED' // to be translated
      },
      pageHeader: {
        title: 'Back' // to be translated
      },
      popconfirm: {
        confirmButtonText: 'Yes', // to be translated
        cancelButtonText: 'No' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});
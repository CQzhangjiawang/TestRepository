(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/cs-CZ', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.csCZ = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Vymazat'
      },
      datepicker: {
        now: 'Te?',
        today: 'Dnes',
        cancel: 'Zru?it',
        clear: 'Vymazat',
        confirm: 'OK',
        selectDate: 'Vybrat datum',
        selectTime: 'Vybrat ?as',
        startDate: 'Datum za??tku',
        startTime: '?as za??tku',
        endDate: 'Datum konce',
        endTime: '?as konce',
        prevYear: 'P?edchoz? rok',
        nextYear: 'P???t? rok',
        prevMonth: 'P?edchoz? m?s?c',
        nextMonth: 'P???t? m?s?c',
        day: 'Den',
        week: 'T?den',
        month: 'M?s?c',
        year: 'Rok',
        month1: 'Leden',
        month2: '?nor',
        month3: 'B?ezen',
        month4: 'Duben',
        month5: 'Kv?ten',
        month6: '?erven',
        month7: '?ervenec',
        month8: 'Srpen',
        month9: 'Z???',
        month10: '??jen',
        month11: 'Listopad',
        month12: 'Prosinec',
        weeks: {
          sun: 'Ne',
          mon: 'Po',
          tue: '?t',
          wed: 'St',
          thu: '?t',
          fri: 'P?',
          sat: 'So'
        },
        months: {
          jan: 'Led',
          feb: '?no',
          mar: 'B?e',
          apr: 'Dub',
          may: 'Kv?',
          jun: '?er',
          jul: '?vc',
          aug: 'Srp',
          sep: 'Z??',
          oct: '??j',
          nov: 'Lis',
          dec: 'Pro'
        }
      },
      select: {
        loading: 'Na??t?n?',
        noMatch: '??dn? shoda',
        noData: '??dn? data',
        placeholder: 'Vybrat'
      },
      cascader: {
        noMatch: '??dn? shoda',
        loading: 'Na??t?n?',
        placeholder: 'Vybrat',
        noData: '??dn? data'
      },
      pagination: {
        goto: 'J?t na',
        pagesize: 'na stranu',
        total: 'Celkem {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Zpr?va',
        confirm: 'OK',
        cancel: 'Zru?it',
        error: 'Neplatn? vstup'
      },
      upload: {
        deleteTip: 'Stisknout pro smaz?n?',
        delete: 'Vymazat',
        preview: 'N?hled',
        continue: 'Pokra?ovat'
      },
      table: {
        emptyText: '??dn? data',
        confirmFilter: 'Potvrdit',
        resetFilter: 'Resetovat',
        clearFilter: 'V?e',
        sumText: 'Celkem'
      },
      tree: {
        emptyText: '??dn? data'
      },
      transfer: {
        noMatch: '??dn? shoda',
        noData: '??dn? data',
        titles: ['Seznam 1', 'Seznam 2'],
        filterPlaceholder: 'Kl??ov? slovo',
        noCheckedFormat: '{total} polo?ek',
        hasCheckedFormat: '{checked}/{total} vybr?no'
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
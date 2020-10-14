(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/ee', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ee = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'T?hjenda'
      },
      datepicker: {
        now: 'Praegu',
        today: 'T?na',
        cancel: 'T?hista',
        clear: 'T?hjenda',
        confirm: 'OK',
        selectDate: 'Vali kuup?ev',
        selectTime: 'Vali kellaaeg',
        startDate: 'Alguskuup?ev',
        startTime: 'Algusaeg',
        endDate: 'L?pukuup?ev',
        endTime: 'L?puaeg',
        prevYear: 'Eelmine aasta',
        nextYear: 'J?rgmine aasta',
        prevMonth: 'Eelmine kuu',
        nextMonth: 'J?rgmine kuu',
        year: '',
        month1: 'Jaanuar',
        month2: 'Veebruar',
        month3: 'M?rts',
        month4: 'Aprill',
        month5: 'Mai',
        month6: 'Juuni',
        month7: 'Juuli',
        month8: 'August',
        month9: 'September',
        month10: 'Oktoober',
        month11: 'November',
        month12: 'Detsember',
        // week: 'n?dal',
        weeks: {
          sun: 'P',
          mon: 'E',
          tue: 'T',
          wed: 'K',
          thu: 'N',
          fri: 'R',
          sat: 'L'
        },
        months: {
          jan: 'Jaan',
          feb: 'Veeb',
          mar: 'M?r',
          apr: 'Apr',
          may: 'Mai',
          jun: 'Juun',
          jul: 'Juul',
          aug: 'Aug',
          sep: 'Sept',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dets'
        }
      },
      select: {
        loading: 'Laadimine',
        noMatch: 'Sobivad andmed puuduvad',
        noData: 'Andmed puuduvad',
        placeholder: 'Vali'
      },
      cascader: {
        noMatch: 'Sobivad andmed puuduvad',
        loading: 'Laadimine',
        placeholder: 'Vali',
        noData: 'Andmed puuduvad'
      },
      pagination: {
        goto: 'Mine lehele',
        pagesize: '/page',
        total: 'Kokku {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Teade',
        confirm: 'OK',
        cancel: 'T?hista',
        error: 'Vigane sisend'
      },
      upload: {
        deleteTip: 'Vajuta "Kustuta", et eemaldada',
        delete: 'Kustuta',
        preview: 'Eelvaate',
        continue: 'J?tka'
      },
      table: {
        emptyText: 'Andmed puuduvad',
        confirmFilter: 'Kinnita',
        resetFilter: 'Taasta',
        clearFilter: 'K?ik',
        sumText: 'Summa'
      },
      tree: {
        emptyText: 'Andmed puuduvad'
      },
      transfer: {
        noMatch: 'Sobivad andmed puuduvad',
        noData: 'Andmed puuduvad',
        titles: ['Loend 1', 'Loend 2'],
        filterPlaceholder: 'Sisesta m?rks?na',
        noCheckedFormat: '{total} objekti',
        hasCheckedFormat: '{checked}/{total} valitud'
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
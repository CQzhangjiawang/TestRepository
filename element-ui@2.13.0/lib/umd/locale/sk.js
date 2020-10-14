(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/sk', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.sk = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Zmaza?'
      },
      datepicker: {
        now: 'Teraz',
        today: 'Dnes',
        cancel: 'Zru?i?',
        clear: 'Zmaza?',
        confirm: 'OK',
        selectDate: 'Vybra? d?tum',
        selectTime: 'Vybra? ?as',
        startDate: 'D?tum za?iatku',
        startTime: '?as za?iatku',
        endDate: 'D?tum konca',
        endTime: '?as konca',
        prevYear: 'Predo?l? rok',
        nextYear: '?al?? rok',
        prevMonth: 'Predo?l? mesiac',
        nextMonth: '?al?? mesiac',
        day: 'De?',
        week: 'T??de?',
        month: 'Mesiac',
        year: 'Rok',
        month1: 'Janu?r',
        month2: 'Febru?r',
        month3: 'Marec',
        month4: 'Apr?l',
        month5: 'M?j',
        month6: 'J?n',
        month7: 'J?l',
        month8: 'August',
        month9: 'September',
        month10: 'Okt?ber',
        month11: 'November',
        month12: 'December',
        weeks: {
          sun: 'Ne',
          mon: 'Po',
          tue: 'Ut',
          wed: 'St',
          thu: '?t',
          fri: 'Pi',
          sat: 'So'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'M?j',
          jun: 'J?n',
          jul: 'J?l',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dec'
        }
      },
      select: {
        loading: 'Na??tavanie',
        noMatch: '?iadna zhoda',
        noData: '?iadne d?ta',
        placeholder: 'Vybra?'
      },
      cascader: {
        noMatch: '?iadna zhoda',
        loading: 'Na??tavanie',
        placeholder: 'Vybra?',
        noData: '?iadne d?ta'
      },
      pagination: {
        goto: 'Cho? na',
        pagesize: 'na stranu',
        total: 'V?etko {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Spr?va',
        confirm: 'OK',
        cancel: 'Zru?i?',
        error: 'Neplatn? vstup'
      },
      upload: {
        deleteTip: 'pre odstr?nenie stisni kl?vesu Delete',
        delete: 'Vymaza?',
        preview: 'Prehliada?',
        continue: 'Pokra?ova?'
      },
      table: {
        emptyText: '?iadne d?ta',
        confirmFilter: 'Potvrdi?',
        resetFilter: 'Zresetova?',
        clearFilter: 'V?etko',
        sumText: 'Spolu'
      },
      tree: {
        emptyText: '?iadne d?ta'
      },
      transfer: {
        noMatch: '?iadna zhoda',
        noData: '?iadne d?ta',
        titles: ['Zoznam 1', 'Zoznam 2'],
        filterPlaceholder: 'Filtrova? pod?a',
        noCheckedFormat: '{total} polo?iek',
        hasCheckedFormat: '{checked}/{total} ozna?en?ch'
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
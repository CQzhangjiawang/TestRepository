(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/pl', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.pl = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Wyczy??'
      },
      datepicker: {
        now: 'Teraz',
        today: 'Dzisiaj',
        cancel: 'Anuluj',
        clear: 'Wyczy??',
        confirm: 'OK',
        selectDate: 'Wybierz dat?',
        selectTime: 'Wybierz godzin?',
        startDate: 'Data pocz?tkowa',
        startTime: 'Godzina pocz?tkowa',
        endDate: 'Data ko?cowa',
        endTime: 'Czas ko?cowa',
        prevYear: 'Poprzedni rok',
        nextYear: 'Nast?pny rok',
        prevMonth: 'Poprzedni miesi?c',
        nextMonth: 'Nast?pny miesi?c',
        year: 'rok',
        month1: 'stycze?',
        month2: 'luty',
        month3: 'marzec',
        month4: 'kwiecie?',
        month5: 'maj',
        month6: 'czerwiec',
        month7: 'lipiec',
        month8: 'sierpie?',
        month9: 'wrzesie?',
        month10: 'pa?dziernik',
        month11: 'listopad',
        month12: 'grudzie?',
        week: 'tydzie?',
        weeks: {
          sun: 'niedz.',
          mon: 'pon.',
          tue: 'wt.',
          wed: '?r.',
          thu: 'czw.',
          fri: 'pt.',
          sat: 'sob.'
        },
        months: {
          jan: 'STY',
          feb: 'LUT',
          mar: 'MAR',
          apr: 'KWI',
          may: 'MAJ',
          jun: 'CZE',
          jul: 'LIP',
          aug: 'SIE',
          sep: 'WRZ',
          oct: 'PA?',
          nov: 'LIS',
          dec: 'GRU'
        }
      },
      select: {
        loading: '?adowanie',
        noMatch: 'Brak dopasowa?',
        noData: 'Brak danych',
        placeholder: 'Wybierz'
      },
      cascader: {
        noMatch: 'Brak dopasowa?',
        loading: '?adowanie',
        placeholder: 'Wybierz',
        noData: 'Brak danych'
      },
      pagination: {
        goto: 'Id? do',
        pagesize: '/strona',
        total: 'Wszystkich {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Wiadomo??',
        confirm: 'OK',
        cancel: 'Anuluj',
        error: 'Wiadomo?? zawiera niedozwolone znaki'
      },
      upload: {
        deleteTip: 'kliknij kasuj aby usun??',
        delete: 'Kasuj',
        preview: 'Podgl?d',
        continue: 'Kontynuuj'
      },
      table: {
        emptyText: 'Brak danych',
        confirmFilter: 'Potwierd?',
        resetFilter: 'Resetuj',
        clearFilter: 'Wszystko',
        sumText: 'Razem'
      },
      tree: {
        emptyText: 'Brak danych'
      },
      transfer: {
        noMatch: 'Brak dopasowa?',
        noData: 'Brak danych',
        titles: ['Lista 1', 'Lista 2'],
        filterPlaceholder: 'Wpisz szukan? fraz?',
        noCheckedFormat: 'razem: {total}',
        hasCheckedFormat: 'wybranych: {checked}/{total}'
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
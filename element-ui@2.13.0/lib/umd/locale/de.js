(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/de', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.de = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Leeren'
      },
      datepicker: {
        now: 'Jetzt',
        today: 'Heute',
        cancel: 'Abbrechen',
        clear: 'Leeren',
        confirm: 'OK',
        selectDate: 'Datum w?hlen',
        selectTime: 'Uhrzeit w?hlen',
        startDate: 'Startdatum',
        startTime: 'Startzeit',
        endDate: 'Enddatum',
        endTime: 'Endzeit',
        prevYear: 'Letztes Jahr',
        nextYear: 'N?chtes Jahr',
        prevMonth: 'Letzter Monat',
        nextMonth: 'N?chster Monat',
        day: 'Tag',
        week: 'Woche',
        month: 'Monat',
        year: '',
        month1: 'Januar',
        month2: 'Februar',
        month3: 'M?rz',
        month4: 'April',
        month5: 'Mai',
        month6: 'Juni',
        month7: 'Juli',
        month8: 'August',
        month9: 'September',
        month10: 'Oktober',
        month11: 'November',
        month12: 'Dezember',
        weeks: {
          sun: 'So',
          mon: 'Mo',
          tue: 'Di',
          wed: 'Mi',
          thu: 'Do',
          fri: 'Fr',
          sat: 'Sa'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'M?r',
          apr: 'Apr',
          may: 'Mai',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dez'
        }
      },
      select: {
        loading: 'L?dt.',
        noMatch: 'Nichts gefunden.',
        noData: 'Keine Daten',
        placeholder: 'Daten w?hlen'
      },
      cascader: {
        noMatch: 'Nichts gefunden.',
        loading: 'L?dt.',
        placeholder: 'Daten w?hlen',
        noData: 'Keine Daten'
      },
      pagination: {
        goto: 'Gehe zu',
        pagesize: ' pro Seite',
        total: 'Gesamt {total}',
        pageClassifier: ''
      },
      messagebox: {
        confirm: 'OK',
        cancel: 'Abbrechen',
        error: 'Fehler'
      },
      upload: {
        deleteTip: 'Klicke l?schen zum entfernen',
        delete: 'L?schen',
        preview: 'Vorschau',
        continue: 'Fortsetzen'
      },
      table: {
        emptyText: 'Keine Daten',
        confirmFilter: 'Anwenden',
        resetFilter: 'Zur?cksetzen',
        clearFilter: 'Alles ',
        sumText: 'Summe'
      },
      tree: {
        emptyText: 'Keine Eintr?ge'
      },
      transfer: {
        noMatch: 'Nichts gefunden.',
        noData: 'Keine Eintr?ge',
        titles: ['Liste 1', 'Liste 2'],
        filterPlaceholder: 'Eintr?ge filtern',
        noCheckedFormat: '{total} Eintr?ge',
        hasCheckedFormat: '{checked}/{total} ausgew?hlt'
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
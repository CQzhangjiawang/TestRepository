(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/hr', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.hr = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'O?isti'
      },
      datepicker: {
        now: 'Sada',
        today: 'Danas',
        cancel: 'Otka?i',
        clear: 'O?isti',
        confirm: 'OK',
        selectDate: 'Odaberi datum',
        selectTime: 'Odaberi vrijeme',
        startDate: 'Datum po?etka',
        startTime: 'Vrijeme po?etka',
        endDate: 'Datum zavr?etka',
        endTime: 'Vrijeme zavr?etka',
        prevYear: 'Prethodna godina',
        nextYear: 'Sljede?a godina',
        prevMonth: 'Prethodni mjesec',
        nextMonth: 'Sljede?i mjesec',
        year: '',
        month1: 'Sije?anj',
        month2: 'Velja?a',
        month3: 'O?ujak',
        month4: 'Travanj',
        month5: 'Svibanj',
        month6: 'Lipanj',
        month7: 'Srpanj',
        month8: 'Kolovoz',
        month9: 'Rujan',
        month10: 'Listopad',
        month11: 'Studeni',
        month12: 'Prosinac',
        week: 'tjedan',
        weeks: {
          sun: 'Pon',
          mon: 'Uto',
          tue: 'Sri',
          wed: '?et',
          thu: 'Pet',
          fri: 'Sub',
          sat: 'Ned'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'May',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Oct',
          nov: 'Nov',
          dec: 'Dec'
        }
      },
      select: {
        loading: 'U?itavanje',
        noMatch: 'Nema prona?enih podataka',
        noData: 'Nema podataka',
        placeholder: 'Izaberi'
      },
      cascader: {
        noMatch: 'Nema prona?enih podataka',
        loading: 'U?itavanje',
        placeholder: 'Izaberi',
        noData: 'Nema podataka'
      },
      pagination: {
        goto: 'Idi na',
        pagesize: '/stranica',
        total: 'Ukupno {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Poruka',
        confirm: 'OK',
        cancel: 'Otka?i',
        error: 'Pogre?an unos'
      },
      upload: {
        deleteTip: 'pritisnite izbri?i za brisanje',
        delete: 'Izbri?i',
        preview: 'Pregled',
        continue: 'Nastavak'
      },
      table: {
        emptyText: 'Nema podataka',
        confirmFilter: 'Potvrdi',
        resetFilter: 'Resetiraj',
        clearFilter: 'Sve',
        sumText: 'Suma'
      },
      tree: {
        emptyText: 'Nema podataka'
      },
      transfer: {
        noMatch: 'Nema prona?enih podataka',
        noData: 'Nema podataka',
        titles: ['Lista 1', 'Lista 2'], // to be translated
        filterPlaceholder: 'Unesite klju?nu rije?', // to be translated
        noCheckedFormat: '{total} stavki', // to be translated
        hasCheckedFormat: '{checked}/{total} checked' // to be translated
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
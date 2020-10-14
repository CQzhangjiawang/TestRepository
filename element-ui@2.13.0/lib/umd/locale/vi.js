(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/vi', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.vi = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'X?a'
      },
      datepicker: {
        now: 'Hi?n t?i',
        today: 'H?m nay',
        cancel: 'H?y',
        clear: 'X?a',
        confirm: 'OK',
        selectDate: 'Ch?n ng?y',
        selectTime: 'Ch?n gi?',
        startDate: 'Ng?y b?t ??u',
        startTime: 'Th?i gian b?t ??u',
        endDate: 'Ng?y k?t th?c',
        endTime: 'Th?i gian k?t th?c',
        prevYear: 'N?m tr??c',
        nextYear: 'N?m t?i',
        prevMonth: 'Th?ng tr??c',
        nextMonth: 'Th?ng t?i',
        year: 'N?m',
        month1: 'Th?ng 1',
        month2: 'Th?ng 2',
        month3: 'Th?ng 3',
        month4: 'Th?ng 4',
        month5: 'Th?ng 5',
        month6: 'Th?ng 6',
        month7: 'Th?ng 7',
        month8: 'Th?ng 8',
        month9: 'Th?ng 9',
        month10: 'Th?ng 10',
        month11: 'Th?ng 11',
        month12: 'Th?ng 12',
        // week: 'week',
        weeks: {
          sun: 'CN',
          mon: 'T2',
          tue: 'T3',
          wed: 'T4',
          thu: 'T5',
          fri: 'T6',
          sat: 'T7'
        },
        months: {
          jan: 'Th.1',
          feb: 'Th.2',
          mar: 'Th.3',
          apr: 'Th.4',
          may: 'Th.5',
          jun: 'Th.6',
          jul: 'Th.7',
          aug: 'Th.8',
          sep: 'Th.9',
          oct: 'Th.10',
          nov: 'Th.11',
          dec: 'Th.12'
        }
      },
      select: {
        loading: '?ang t?i',
        noMatch: 'D? li?u kh?ng ph? h?p',
        noData: 'Kh?ng t?m th?y d? li?u',
        placeholder: 'Ch?n'
      },
      cascader: {
        noMatch: 'D? li?u kh?ng ph? h?p',
        loading: '?ang t?i',
        placeholder: 'Ch?n',
        noData: 'Kh?ng t?m th?y d? li?u'
      },
      pagination: {
        goto: 'Nh?y t?i',
        pagesize: '/trang',
        total: 'T?ng {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Th?ng b?o',
        confirm: 'OK',
        cancel: 'H?y',
        error: 'D? li?u kh?ng h?p l?'
      },
      upload: {
        deleteTip: 'Nh?n xo? ?? xo?',
        delete: 'X?a',
        preview: 'Xem tr??c',
        continue: 'Ti?p t?c'
      },
      table: {
        emptyText: 'Kh?ng c? d? li?u',
        confirmFilter: 'X?c nh?n',
        resetFilter: 'L?m m?i',
        clearFilter: 'X?a h?t',
        sumText: 'T?ng'
      },
      tree: {
        emptyText: 'Kh?ng c? d? li?u'
      },
      transfer: {
        noMatch: 'D? li?u kh?ng ph? h?p',
        noData: 'Kh?ng t?m th?y d? li?u',
        titles: ['Danh s?ch 1', 'Danh s?ch 2'],
        filterPlaceholder: 'Nh?p t? kh?a',
        noCheckedFormat: '{total} m?c',
        hasCheckedFormat: '{checked}/{total} ?? ch?n '
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
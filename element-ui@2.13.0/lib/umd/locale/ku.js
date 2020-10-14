(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/ku', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ku = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Temam',
        clear: 'Paqij bike'
      },
      datepicker: {
        now: 'Niha',
        today: '?ro',
        cancel: 'Betal bike',
        clear: 'Paqij bike',
        confirm: 'Temam',
        selectDate: 'D?rok? bibij?re',
        selectTime: 'Dem? bibij?re',
        startDate: 'D?roka Destp?k?',
        startTime: 'Dema Destp?k?',
        endDate: 'D?roka Daw?',
        endTime: 'Dema Daw?',
        prevYear: 'Sala P??',
        nextYear: 'Sala Pa?',
        prevMonth: 'Meha P??',
        nextMonth: 'Meha Pa?',
        year: 'Sal',
        month1: 'R?bendan',
        month2: 'Re?emeh',
        month3: 'Adar',
        month4: 'Avr?l',
        month5: 'Gulan',
        month6: 'P??ber',
        month7: 'T?rmeh',
        month8: 'Gilav?j',
        month9: 'Rezber',
        month10: 'Kew??r',
        month11: 'Sarmawaz',
        month12: 'Berfanbar',
        // week: 'week',
        weeks: {
          sun: 'Yek',
          mon: 'Du?',
          tue: 'S??',
          wed: '?ar',
          thu: 'P?n',
          fri: '?n',
          sat: '?em'
        },
        months: {
          jan: 'R?b',
          feb: 'Re?',
          mar: 'Ada',
          apr: 'Avr',
          may: 'Gul',
          jun: 'P??',
          jul: 'T?r',
          aug: 'Gil',
          sep: 'Rez',
          oct: 'Kew',
          nov: 'Sar',
          dec: 'Ber'
        }
      },
      select: {
        loading: 'Bardibe',
        noMatch: 'Li hembere ve agah? tune',
        noData: 'Agah? tune',
        placeholder: 'Bibij?re'
      },
      cascader: {
        noMatch: 'Li hembere ve agah? tune',
        loading: 'Bardibe',
        placeholder: 'Bibij?re',
        noData: 'Agah? tune'
      },
      pagination: {
        goto: 'Bi?e',
        pagesize: '/rupel',
        total: 'Tevah? {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Peyam',
        confirm: 'Temam',
        cancel: 'Betal bike',
        error: 'Beyana ?ewt'
      },
      upload: {
        deleteTip: 'ji bo rake p?l "delete" bike',
        delete: 'Rake',
        preview: 'P??d?tin',
        continue: 'Berdewam'
      },
      table: {
        emptyText: 'Agah? tune',
        confirmFilter: 'Pi?trast bike',
        resetFilter: 'J? bibe',
        clearFilter: 'Hem?',
        sumText: 'Kom'
      },
      tree: {
        emptyText: 'Agah? tune'
      },
      transfer: {
        noMatch: 'Li hembere ve agah? tune',
        noData: 'Agah? tune',
        titles: ['L?ste 1', 'L?ste 2'],
        filterPlaceholder: 'Biniv?se',
        noCheckedFormat: '{total} lib',
        hasCheckedFormat: '{checked}/{total} bijartin'
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
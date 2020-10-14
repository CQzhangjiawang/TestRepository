(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/lv', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.lv = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Labi',
        clear: 'Not?r?t'
      },
      datepicker: {
        now: 'Tagad',
        today: '?odien',
        cancel: 'Atcelt',
        clear: 'Not?r?t',
        confirm: 'Labi',
        selectDate: 'Izv?l?ties datumu',
        selectTime: 'Izv?l?ties laiku',
        startDate: 'S?kuma datums',
        startTime: 'S?kuma laiks',
        endDate: 'Beigu datums',
        endTime: 'Beigu laiks',
        prevYear: 'Iepriek??jais gads',
        nextYear: 'N?kamais gads',
        prevMonth: 'Iepriek??jais m?nesis',
        nextMonth: 'N?kamais m?nesis',
        year: '',
        month1: 'Janv?ris',
        month2: 'Febru?ris',
        month3: 'Marts',
        month4: 'Apr?lis',
        month5: 'Maijs',
        month6: 'J?nijs',
        month7: 'J?lijs',
        month8: 'Augusts',
        month9: 'Septembris',
        month10: 'Oktobris',
        month11: 'Novembris',
        month12: 'Decembris',
        // week: 'ned??a',
        weeks: {
          sun: 'Sv',
          mon: 'Pr',
          tue: 'Ot',
          wed: 'Tr',
          thu: 'Ce',
          fri: 'Pk',
          sat: 'Se'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Mai',
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
        loading: 'Iel?d?',
        noMatch: 'Nav atbilsto?u datu',
        noData: 'Nav datu',
        placeholder: 'Izv?l?ties'
      },
      cascader: {
        noMatch: 'Nav atbilsto?u datu',
        loading: 'Iel?d?',
        placeholder: 'Izv?l?ties',
        noData: 'Nav datu'
      },
      pagination: {
        goto: 'Iet uz',
        pagesize: '/lapa',
        total: 'Kop? {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Pazi?ojums',
        confirm: 'Labi',
        cancel: 'Atcelt',
        error: 'Neder?ga ievade'
      },
      upload: {
        deleteTip: 'Nospiediet dz?st lai iz?emtu',
        delete: 'Dz?st',
        preview: 'Priek?skat?t',
        continue: 'Turpin?t'
      },
      table: {
        emptyText: 'Nav datu',
        confirmFilter: 'Apstiprin?t',
        resetFilter: 'Atiestat?t',
        clearFilter: 'Visi',
        sumText: 'Summa'
      },
      tree: {
        emptyText: 'Nav datu'
      },
      transfer: {
        noMatch: 'Nav atbilsto?u datu',
        noData: 'Nav datu',
        titles: ['Saraksts 1', 'Saraksts 2'],
        filterPlaceholder: 'Ievad?t atsl?gv?rdu',
        noCheckedFormat: '{total} vien?bas',
        hasCheckedFormat: '{checked}/{total} atz?m?ti'
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
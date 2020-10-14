(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/tr-TR', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.trTR = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Onayla',
        clear: 'Temizle'
      },
      datepicker: {
        now: '?imdi',
        today: 'Bug?n',
        cancel: '?ptal',
        clear: 'Temizle',
        confirm: 'Onayla',
        selectDate: 'Tarih se?',
        selectTime: 'Saat se?',
        startDate: 'Ba?lang?? Tarihi',
        startTime: 'Ba?lang?? Saati',
        endDate: 'Biti? Tarihi',
        endTime: 'Biti? Saati',
        prevYear: '?nceki Y?l',
        nextYear: 'Sonraki Y?l',
        prevMonth: '?nceki Ay',
        nextMonth: 'Sonraki Ay',
        year: '',
        month1: 'Ocak',
        month2: '?ubat',
        month3: 'Mart',
        month4: 'Nisan',
        month5: 'May?s',
        month6: 'Haziran',
        month7: 'Temmuz',
        month8: 'A?ustos',
        month9: 'Eyl?l',
        month10: 'Ekim',
        month11: 'Kas?m',
        month12: 'Aral?k',
        // week: 'week',
        weeks: {
          sun: 'Paz',
          mon: 'Pzt',
          tue: 'Sal',
          wed: '?ar',
          thu: 'Per',
          fri: 'Cum',
          sat: 'Cmt'
        },
        months: {
          jan: 'Oca',
          feb: '?ub',
          mar: 'Mar',
          apr: 'Nis',
          may: 'May',
          jun: 'Haz',
          jul: 'Tem',
          aug: 'A?u',
          sep: 'Eyl',
          oct: 'Eki',
          nov: 'Kas',
          dec: 'Ara'
        }
      },
      select: {
        loading: 'Y?kleniyor',
        noMatch: 'E?le?en veri bulunamad?',
        noData: 'Veri yok',
        placeholder: 'Se?'
      },
      cascader: {
        noMatch: 'E?le?en veri bulunamad?',
        loading: 'Y?kleniyor',
        placeholder: 'Se?',
        noData: 'Veri yok'
      },
      pagination: {
        goto: 'Git',
        pagesize: '/sayfa',
        total: 'Toplam {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Mesaj',
        confirm: 'Onayla',
        cancel: '?ptal',
        error: '?llegal giri?'
      },
      upload: {
        deleteTip: 'kald?rmak i?in delete tu?una bas',
        delete: 'Sil',
        preview: 'G?r?nt?le',
        continue: 'Devam'
      },
      table: {
        emptyText: 'Veri yok',
        confirmFilter: 'Onayla',
        resetFilter: 'S?f?rla',
        clearFilter: 'Hepsi',
        sumText: 'Sum'
      },
      tree: {
        emptyText: 'Veri yok'
      },
      transfer: {
        noMatch: 'E?le?en veri bulunamad?',
        noData: 'Veri yok',
        titles: ['Liste 1', 'Liste 2'],
        filterPlaceholder: 'Anahtar kelimeleri gir',
        noCheckedFormat: '{total} adet',
        hasCheckedFormat: '{checked}/{total} se?ildi'
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
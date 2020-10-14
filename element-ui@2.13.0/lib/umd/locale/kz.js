(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/kz', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.kz = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: '?�p�q���|�t�p��',
        clear: '�S�p�x�p�|�p��'
      },
      datepicker: {
        now: '?�p�x?��',
        today: '�A?�s?�~',
        cancel: '�A���|�t�����}�p��',
        clear: '�S�p�x�p�|�p��',
        confirm: '?�p�q���|�t�p��',
        selectDate: '�K?�~�t? ���p?�t�p?���x',
        selectTime: '�R�p?�p������ ���p?�t�p?���x',
        startDate: '�A�p�����p�|�� �{?�~?',
        startTime: '�A�p�����p�|�� ���p?�p����',
        endDate: '�@��?���p�|�� �{?�~?',
        endTime: '�@��?���p�|�� ���p?�p����',
        prevYear: '�@�|�t��??�� �w���|',
        nextYear: '�K�u�|�u��? �w���|',
        prevMonth: '�@�|�t��??�� �p�z',
        nextMonth: '�K�u�|�u��? �p�z',
        year: '�G���|',
        month1: '?�p?���p��',
        month2: '�@?���p�~',
        month3: '�N�p�������x',
        month4: '�R?��?��',
        month5: '�M�p�}����',
        month6: '�M�p�������}',
        month7: '�Y?�|�t�u',
        month8: '�S�p�}���x',
        month9: '?�����{?�z�u�{',
        month10: '?�p�x�p�~',
        month11: '?�p���p���p',
        month12: '�G�u�|����?���p�~',
        week: '�@�����p',
        weeks: {
          sun: '�G�u�{',
          mon: '�D?�z',
          tue: '�R�u�z',
          wed: '�R?��',
          thu: '�A�u�z',
          fri: '�G?�}',
          sat: '�R�u�~'
        },
        months: {
          jan: '?�p?',
          feb: '�@?��',
          mar: '�N�p��',
          apr: '�R?��',
          may: '�M�p�}',
          jun: '�M�p��',
          jul: '�Y?�|',
          aug: '�S�p�}',
          sep: '?����',
          oct: '?�p�x',
          nov: '?�p��',
          dec: '�G�u�|'
        }
      },
      select: {
        loading: '�G?�{���u�|���t�u',
        noMatch: '�R?�z�{�u�� �t�u���u�{���u�� �w��?',
        noData: '�D�u���u�{���u�� �w��?',
        placeholder: '�S�p?�t�p?���x'
      },
      cascader: {
        noMatch: '�R?�z�{�u�� �t�u���u�{���u�� �w��?',
        loading: '�G?�{���u�|���t�u',
        placeholder: '�S�p?�t�p?���x',
        noData: '�D�u���u�{���u�� �w��?'
      },
      pagination: {
        goto: '�A�p����',
        pagesize: '/page',
        total: '�A�p���|��?�� {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: '�V�p�q�p��',
        confirm: '?�p�q���|�t�p��',
        cancel: '�A���|�t�����}�p��',
        error: '�G�p���p�}�����x �u�~�s?�x���|�u��'
      },
      upload: {
        deleteTip: '?��?�����t? �q�p������ ?��?��???�x',
        delete: '?��?����',
        preview: '�@�|�t���~ �p�|�p ?�p���p��',
        continue: '�G�p�|?�p����������'
      },
      table: {
        emptyText: '�D�u���u�{���u�� �w��?',
        confirmFilter: '?�p�q���|�t�p��',
        resetFilter: '?�p�|�����~�p �{�u�|��?����',
        clearFilter: '�A�p���|��?��',
        sumText: '�R���}�p����'
      },
      tree: {
        emptyText: '�D�u���u�{���u�� �w��?'
      },
      transfer: {
        noMatch: '�R?�z�{�u�� �t�u���u�{���u�� �w��?',
        noData: '�D�u���u�{���u�� �w��?',
        titles: ['List 1', 'List 2'],
        filterPlaceholder: '�K?�|�� ��?�x�t? �u�~�s?�x???�x',
        noCheckedFormat: '{total} ���|���}���~��',
        hasCheckedFormat: '{checked}/{total} ??���q�u�|�s?��? ?���z���|�t��'
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
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/zh-TW', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.zhTW = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: '�m�F',
        clear: '����'
      },
      datepicker: {
        now: '����',
        today: '���V',
        cancel: '���',
        clear: '����',
        confirm: '�m�F',
        selectDate: '�I������',
        selectTime: '�I������',
        startDate: '�J�n����',
        startTime: '�J�n����',
        endDate: '��������',
        endTime: '��������',
        prevYear: '�O��N',
        nextYear: '���N',
        prevMonth: '���',
        nextMonth: '����',
        year: '�N',
        month1: '1 ��',
        month2: '2 ��',
        month3: '3 ��',
        month4: '4 ��',
        month5: '5 ��',
        month6: '6 ��',
        month7: '7 ��',
        month8: '8 ��',
        month9: '9 ��',
        month10: '10 ��',
        month11: '11 ��',
        month12: '12 ��',
        // week: '����',
        weeks: {
          sun: '��',
          mon: '��',
          tue: '��',
          wed: '�O',
          thu: '�l',
          fri: '��',
          sat: '�Z'
        },
        months: {
          jan: '�ꌎ',
          feb: '��',
          mar: '�O��',
          apr: '�l��',
          may: '�܌�',
          jun: '�Z��',
          jul: '����',
          aug: '����',
          sep: '�㌎',
          oct: '�\��',
          nov: '�\�ꌎ',
          dec: '�\��'
        }
      },
      select: {
        loading: '���ڒ�',
        noMatch: '���C�z����',
        noData: '������',
        placeholder: '���I��'
      },
      cascader: {
        noMatch: '���C�z����',
        loading: '���ڒ�',
        placeholder: '���I��',
        noData: '������'
      },
      pagination: {
        goto: '�O��',
        pagesize: '��/��',
        total: '�� {total} ��',
        pageClassifier: '��'
      },
      messagebox: {
        title: '��',
        confirm: '�m��',
        cancel: '���',
        error: '�A���I�����s���K��!'
      },
      upload: {
        deleteTip: '�� delete ������',
        delete: '����',
        preview: '?�Ś���',
        continue: '�㔏�B'
      },
      table: {
        emptyText: '�b������',
        confirmFilter: '⿑I',
        resetFilter: '�d�u',
        clearFilter: '�S��',
        sumText: 'Sum' // to be translated
      },
      tree: {
        emptyText: '�b������'
      },
      transfer: {
        noMatch: '���C�z����',
        noData: '������',
        titles: ['List 1', 'List 2'], // to be translated
        filterPlaceholder: 'Enter keyword', // to be translated
        noCheckedFormat: '{total} items', // to be translated
        hasCheckedFormat: '{checked}/{total} checked' // to be translated
      },
      image: {
        error: '���ڎ��s'
      },
      pageHeader: {
        title: '�ԉ�'
      },
      popconfirm: {
        confirmButtonText: 'Yes', // to be translated
        cancelButtonText: 'No' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});
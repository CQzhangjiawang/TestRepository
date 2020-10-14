(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/ja', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ja = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: '�N���A'
      },
      datepicker: {
        now: '����',
        today: '����',
        cancel: '�L�����Z��',
        clear: '�N���A',
        confirm: 'OK',
        selectDate: '���t��I��',
        selectTime: '���Ԃ�I��',
        startDate: '�J�n��',
        startTime: '�J�n����',
        endDate: '�I����',
        endTime: '�I������',
        prevYear: '�O�N',
        nextYear: '���N',
        prevMonth: '�O��',
        nextMonth: '����',
        year: '�N',
        month1: '1��',
        month2: '2��',
        month3: '3��',
        month4: '4��',
        month5: '5��',
        month6: '6��',
        month7: '7��',
        month8: '8��',
        month9: '9��',
        month10: '10��',
        month11: '11��',
        month12: '12��',
        // week: '�T��',
        weeks: {
          sun: '��',
          mon: '��',
          tue: '��',
          wed: '��',
          thu: '��',
          fri: '��',
          sat: '�y'
        },
        months: {
          jan: '1��',
          feb: '2��',
          mar: '3��',
          apr: '4��',
          may: '5��',
          jun: '6��',
          jul: '7��',
          aug: '8��',
          sep: '9��',
          oct: '10��',
          nov: '11��',
          dec: '12��'
        }
      },
      select: {
        loading: '���[�h��',
        noMatch: '�f�[�^�Ȃ�',
        noData: '�f�[�^�Ȃ�',
        placeholder: '�I�����Ă�������'
      },
      cascader: {
        noMatch: '�f�[�^�Ȃ�',
        loading: '���[�h��',
        placeholder: '�I�����Ă�������',
        noData: '�f�[�^�Ȃ�'
      },
      pagination: {
        goto: '',
        pagesize: '��/�y�[�W',
        total: '���v {total} ��',
        pageClassifier: '�y�[�W�ڂ�'
      },
      messagebox: {
        title: '���b�Z�[�W',
        confirm: 'OK',
        cancel: '�L�����Z��',
        error: '�������Ȃ�����'
      },
      upload: {
        deleteTip: 'Del�L�[�������č폜����',
        delete: '�폜����',
        preview: '�v���r���[',
        continue: '���s����'
      },
      table: {
        emptyText: '�f�[�^�Ȃ�',
        confirmFilter: '�m�F',
        resetFilter: '������',
        clearFilter: '���ׂ�',
        sumText: '���v'
      },
      tree: {
        emptyText: '�f�[�^�Ȃ�'
      },
      transfer: {
        noMatch: '�f�[�^�Ȃ�',
        noData: '�f�[�^�Ȃ�',
        titles: ['���X�g 1', '���X�g 2'],
        filterPlaceholder: '�L�[���[�h�����',
        noCheckedFormat: '���v {total} ��',
        hasCheckedFormat: '{checked}/{total} ��I������'
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
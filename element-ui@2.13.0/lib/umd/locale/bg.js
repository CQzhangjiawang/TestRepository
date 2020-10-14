(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/bg', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.bg = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: '„I„x„‰„y„ƒ„„„y'
      },
      datepicker: {
        now: '„R„u„s„p',
        today: '„D„~„u„ƒ',
        cancel: '„O„„„{„p„w„y',
        clear: '„I„x„‰„y„ƒ„„„y',
        confirm: '„O„K',
        selectDate: '„I„x„q„u„‚„y „t„p„„„p',
        selectTime: '„I„x„q„u„‚„y „‰„p„ƒ',
        startDate: '„N„p„‰„p„|„~„p „t„p„„„p',
        startTime: '„N„p„‰„p„|„u„~ „‰„p„ƒ',
        endDate: '„K„‚„p„z„~„p „t„p„„„p',
        endTime: '„K„‚„p„u„~ „‰„p„ƒ',
        prevYear: 'Previous Year', // to be translated
        nextYear: 'Next Year', // to be translated
        prevMonth: 'Previous Month', // to be translated
        nextMonth: 'Next Month', // to be translated
        year: '',
        month1: '„`„~„…„p„‚„y',
        month2: '„U„u„r„‚„…„p„‚„y',
        month3: '„M„p„‚„„',
        month4: '„@„„‚„y„|',
        month5: '„M„p„z',
        month6: '„_„~„y',
        month7: '„_„|„y',
        month8: '„@„r„s„…„ƒ„„',
        month9: '„R„u„„„„u„}„r„‚„y',
        month10: '„O„{„„„€„}„r„‚„y',
        month11: '„N„€„u„}„r„‚„y',
        month12: '„D„u„{„u„}„r„‚„y',
        // week: '„R„u„t„}„y„ˆ„p',
        weeks: {
          sun: '„N„u„t',
          mon: '„P„€„~',
          tue: '„B„„„€',
          wed: '„R„‚„‘',
          thu: '„X„u„„',
          fri: '„P„u„„',
          sat: '„R„Œ„q'
        },
        months: {
          jan: '„`„~„…',
          feb: '„U„u„r',
          mar: '„M„p„‚',
          apr: '„@„„‚',
          may: '„M„p„z',
          jun: '„_„~„y',
          jul: '„_„|„y',
          aug: '„@„r„s',
          sep: '„R„u„',
          oct: '„O„{„„',
          nov: '„N„€„u',
          dec: '„D„u„{'
        }
      },
      select: {
        loading: '„H„p„‚„u„w„t„p„~„u',
        noMatch: '„N„‘„}„p „~„p„}„u„‚„u„~„y',
        noData: '„N„‘„}„p „t„p„~„~„y',
        placeholder: '„I„x„q„u„‚„y'
      },
      cascader: {
        noMatch: '„N„‘„}„p „~„p„}„u„‚„u„~„y',
        loading: '„H„p„‚„u„w„t„p„~„u',
        placeholder: '„I„x„q„u„‚„y',
        noData: '„N„‘„}„p „t„p„~„~„y'
      },
      pagination: {
        goto: '„I„t„y „~„p',
        pagesize: '/„ƒ„„„‚„p„~„y„ˆ„p',
        total: '„O„q„‹„€ {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: '„R„Œ„€„q„‹„u„~„y„u',
        confirm: '„O„K',
        cancel: '„O„„„{„p„w„y',
        error: '„N„u„r„p„|„y„t„~„y „t„p„~„~„y'
      },
      upload: {
        deleteTip: 'press delete to remove', // to be translated
        delete: '„I„x„„„‚„y„z',
        preview: '„P„‚„u„s„|„u„t„p„z',
        continue: '„P„‚„€„t„Œ„|„w„y'
      },
      table: {
        emptyText: '„N„‘„}„p „t„p„~„~„y',
        confirmFilter: '„P„€„„„r„Œ„‚„t„y',
        resetFilter: '„I„x„‰„y„ƒ„„„y',
        clearFilter: '„B„ƒ„y„‰„{„y',
        sumText: 'Sum' // to be translated
      },
      tree: {
        emptyText: '„N„‘„}„p „t„p„~„~„y'
      },
      transfer: {
        noMatch: '„N„‘„}„p „~„p„}„u„‚„u„~„y',
        noData: '„N„‘„}„p „t„p„~„~„y',
        titles: ['List 1', 'List 2'], // to be translated
        filterPlaceholder: 'Enter keyword', // to be translated
        noCheckedFormat: '{total} items', // to be translated
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
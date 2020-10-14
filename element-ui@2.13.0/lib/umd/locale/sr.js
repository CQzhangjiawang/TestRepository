(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/sr', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.sr = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: '„P„€„~„y„Š„„„y'
      },
      datepicker: {
        now: '„R„p„t',
        today: '„D„p„~„p„ƒ',
        cancel: '„O„„„{„p„w„y',
        clear: '„A„‚„y„Š„y',
        confirm: 'OK',
        selectDate: '„I„x„p„q„u„‚„y „t„p„„„…„}',
        selectTime: '„I„x„p„q„u„‚„y „r„‚„u„}„u',
        startDate: '„D„p„„„…„} „„€„‰„u„„„{„p',
        startTime: '„B„‚„u„}„u „„€„‰„u„„„{„p',
        endDate: '„D„p„„„…„} „x„p„r„‚„Š„u„„„{„p',
        endTime: '„B„‚„u„}„u „x„p„r„‚„Š„u„„„{„p',
        prevYear: '„P„‚„u„„„‡„€„t„~„p „s„€„t„y„~„p',
        nextYear: '„R„|„u„t„u?„p „s„€„t„y„~„p',
        prevMonth: '„P„‚„u„„„‡„€„t„~„y „}„u„ƒ„u„ˆ',
        nextMonth: '„R„|„u„t„u?„y „}„u„ƒ„u„ˆ',
        year: '„s„€„t„y„~„p',
        month1: '?„p„~„…„p„‚',
        month2: '„†„u„q„‚„…„p„‚',
        month3: '„}„p„‚„„',
        month4: '„p„„‚„y„|',
        month5: '„}„p?',
        month6: '?„…„~',
        month7: '?„…„|',
        month8: '„p„r„s„…„ƒ„„',
        month9: '„ƒ„u„„„„u„}„q„p„‚',
        month10: '„€„{„„„€„q„p„‚',
        month11: '„~„€„r„u„}„q„p„‚',
        month12: '„t„u„ˆ„u„}„q„p„‚',
        week: '„ƒ„u„t„}„y„ˆ„p',
        weeks: {
          sun: '„N„u„t',
          mon: '„P„€„~',
          tue: '„T„„„€',
          wed: '„R„‚„u',
          thu: '„X„u„„',
          fri: '„P„u„„',
          sat: '„R„…„q'
        },
        months: {
          jan: '?„p„~',
          feb: '„†„u„q',
          mar: '„}„p„‚',
          apr: '„p„„‚',
          may: '„}„p?',
          jun: '?„…„~',
          jul: '?„…„|',
          aug: '„p„r„s',
          sep: '„ƒ„u„',
          oct: '„€„{„„',
          nov: '„~„€„r',
          dec: '„t„u„ˆ'
        }
      },
      select: {
        loading: '„T„‰„y„„„p„r„p?„u',
        noMatch: '„N„u„}„p „‚„u„x„…„|„„„p„„„p',
        noData: '„N„u„}„p „„€„t„p„„„p„{„p',
        placeholder: '„I„x„p„q„u„‚„y'
      },
      cascader: {
        noMatch: '„N„u„}„p „‚„u„x„…„|„„„p„„„p',
        loading: '„T„‰„y„„„p„r„p?„u',
        placeholder: '„I„x„p„q„u„‚„y',
        noData: '„N„u„}„p „„€„t„p„„„p„{„p'
      },
      pagination: {
        goto: '„I„t„y „~„p',
        pagesize: '/„ƒ„„„‚„p„~„y',
        total: '„T„{„…„„~„€ {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: '„P„€„‚„…„{„p',
        confirm: 'OK',
        cancel: '„O„„„{„p„w„y',
        error: '„N„u„y„ƒ„„‚„p„r„p„~ „…„~„€„ƒ'
      },
      upload: {
        deleteTip: '„„‚„y„„„y„ƒ„~„y „A„Q„I„Y„I „t„p „€„q„‚„y„Š„u„Š',
        delete: '„A„‚„y„Š„y',
        preview: '„B„y„t„y',
        continue: '„N„p„ƒ„„„p„r„y'
      },
      table: {
        emptyText: '„N„u„}„p „„€„t„p„„„p„{„p',
        confirmFilter: '„P„€„„„r„‚„t„y',
        resetFilter: '„Q„u„ƒ„u„„„…?',
        clearFilter: '„R„r„u',
        sumText: '„H„q„y„‚'
      },
      tree: {
        emptyText: '„N„u„}„p „„€„t„p„„„p„{„p'
      },
      transfer: {
        noMatch: '„N„u„}„p „‚„u„x„…„|„„„p„„„p',
        noData: '„N„u„}„p „„€„t„p„„„p„{„p',
        titles: ['„L„y„ƒ„„„p 1', '„L„y„ƒ„„„p 2'], // to be translated
        filterPlaceholder: '„T„~„u„ƒ„y „{?„…„‰„~„… „‚„u„‰', // to be translated
        noCheckedFormat: '{total} „ƒ„„„p„r„{„y', // to be translated
        hasCheckedFormat: '{checked}/{total} „€„q„u„|„u„w„u„~„y„‡' // to be translated
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
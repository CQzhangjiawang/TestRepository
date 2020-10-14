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
        confirm: '?„p„q„„|„t„p„…',
        clear: '„S„p„x„p„|„p„…'
      },
      datepicker: {
        now: '?„p„x?„‚',
        today: '„A?„s?„~',
        cancel: '„A„€„|„t„„‚„}„p„…',
        clear: '„S„p„x„p„|„p„…',
        confirm: '?„p„q„„|„t„p„…',
        selectDate: '„K?„~„t? „„„p?„t„p?„„x',
        selectTime: '„R„p?„p„„„„„ „„„p?„t„p?„„x',
        startDate: '„A„p„ƒ„„„p„|„… „{?„~?',
        startTime: '„A„p„ƒ„„„p„|„… „ƒ„p?„p„„„',
        endDate: '„@„‘?„„„p„|„… „{?„~?',
        endTime: '„@„‘?„„„p„|„… „ƒ„p?„p„„„',
        prevYear: '„@„|„t„??„ „w„„|',
        nextYear: '„K„u„|„u„ƒ? „w„„|',
        prevMonth: '„@„|„t„??„ „p„z',
        nextMonth: '„K„u„|„u„ƒ? „p„z',
        year: '„G„„|',
        month1: '?„p?„„„p„‚',
        month2: '„@?„„p„~',
        month3: '„N„p„…„‚„„x',
        month4: '„R?„…?„‚',
        month5: '„M„p„}„„‚',
        month6: '„M„p„…„ƒ„„}',
        month7: '„Y?„|„t„u',
        month8: '„S„p„}„„x',
        month9: '?„„‚„{?„z„u„{',
        month10: '?„p„x„p„~',
        month11: '?„p„‚„p„Š„p',
        month12: '„G„u„|„„„€?„ƒ„p„~',
        week: '„@„„„„p',
        weeks: {
          sun: '„G„u„{',
          mon: '„D?„z',
          tue: '„R„u„z',
          wed: '„R?„‚',
          thu: '„A„u„z',
          fri: '„G?„}',
          sat: '„R„u„~'
        },
        months: {
          jan: '?„p?',
          feb: '„@?„',
          mar: '„N„p„…',
          apr: '„R?„…',
          may: '„M„p„}',
          jun: '„M„p„…',
          jul: '„Y?„|',
          aug: '„S„p„}',
          sep: '?„„‚',
          oct: '?„p„x',
          nov: '?„p„‚',
          dec: '„G„u„|'
        }
      },
      select: {
        loading: '„G?„{„„„u„|„…„t„u',
        noMatch: '„R?„z„{„u„ƒ „t„u„‚„u„{„„„u„‚ „w„€?',
        noData: '„D„u„‚„u„{„„„u„‚ „w„€?',
        placeholder: '„S„p?„t„p?„„x'
      },
      cascader: {
        noMatch: '„R?„z„{„u„ƒ „t„u„‚„u„{„„„u„‚ „w„€?',
        loading: '„G?„{„„„u„|„…„t„u',
        placeholder: '„S„p?„t„p?„„x',
        noData: '„D„u„‚„u„{„„„u„‚ „w„€?'
      },
      pagination: {
        goto: '„A„p„‚„…',
        pagesize: '/page',
        total: '„A„p„‚„|„?„ {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: '„V„p„q„p„‚',
        confirm: '?„p„q„„|„t„p„…',
        cancel: '„A„€„|„t„„‚„}„p„…',
        error: '„G„p„‚„p„}„ƒ„„x „u„~„s?„x„…„|„u„‚'
      },
      upload: {
        deleteTip: '?„Š?„‚„…„t? „q„p„ƒ„„ ?„Š?„‚???„x',
        delete: '?„Š?„‚„…',
        preview: '„@„|„t„„~ „p„|„p ?„p„‚„p„…',
        continue: '„G„p„|?„p„ƒ„„„„‚„…'
      },
      table: {
        emptyText: '„D„u„‚„u„{„„„u„‚ „w„€?',
        confirmFilter: '?„p„q„„|„t„p„…',
        resetFilter: '?„p„|„„„~„p „{„u„|„„?„‚„…',
        clearFilter: '„A„p„‚„|„?„',
        sumText: '„R„€„}„p„ƒ„'
      },
      tree: {
        emptyText: '„D„u„‚„u„{„„„u„‚ „w„€?'
      },
      transfer: {
        noMatch: '„R?„z„{„u„ƒ „t„u„‚„u„{„„„u„‚ „w„€?',
        noData: '„D„u„‚„u„{„„„u„‚ „w„€?',
        titles: ['List 1', 'List 2'],
        filterPlaceholder: '„K?„|„„ „ƒ?„x„t? „u„~„s?„x???„x',
        noCheckedFormat: '{total} „„|„„}„„~„„',
        hasCheckedFormat: '{checked}/{total} ??„ƒ„q„u„|„s?„ƒ? ?„€„z„„|„t„'
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
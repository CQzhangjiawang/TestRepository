(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/fr', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.fr = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Effacer'
      },
      datepicker: {
        now: 'Maintenant',
        today: 'Auj.',
        cancel: 'Annuler',
        clear: 'Effacer',
        confirm: 'OK',
        selectDate: 'Choisir date',
        selectTime: 'Choisir horaire',
        startDate: 'Date d?but',
        startTime: 'Horaire d?but',
        endDate: 'Date fin',
        endTime: 'Horaire fin',
        prevYear: 'Ann?e pr?c?dente',
        nextYear: 'Ann?e suivante',
        prevMonth: 'Mois pr?c?dent',
        nextMonth: 'Mois suivant',
        year: '', // In french, like in english, we don't say "Ann?e" after the year number.
        month1: 'Janvier',
        month2: 'F?vrier',
        month3: 'Mars',
        month4: 'Avril',
        month5: 'Mai',
        month6: 'Juin',
        month7: 'Juillet',
        month8: 'Ao?t',
        month9: 'Septembre',
        month10: 'Octobre',
        month11: 'Novembre',
        month12: 'D?cembre',
        // week: 'Semaine',
        weeks: {
          sun: 'Dim',
          mon: 'Lun',
          tue: 'Mar',
          wed: 'Mer',
          thu: 'Jeu',
          fri: 'Ven',
          sat: 'Sam'
        },
        months: {
          jan: 'Jan',
          feb: 'F?v',
          mar: 'Mar',
          apr: 'Avr',
          may: 'Mai',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Ao?',
          sep: 'Sep',
          oct: 'Oct',
          nov: 'Nov',
          dec: 'D?c'
        }
      },
      select: {
        loading: 'Chargement',
        noMatch: 'Aucune correspondance',
        noData: 'Aucune donn?e',
        placeholder: 'Choisir'
      },
      cascader: {
        noMatch: 'Aucune correspondance',
        loading: 'Chargement',
        placeholder: 'Choisir',
        noData: 'Aucune donn?e'
      },
      pagination: {
        goto: 'Aller ?',
        pagesize: '/page',
        total: 'Total {total}',
        pageClassifier: ''
      },
      messagebox: {
        confirm: 'Confirmer',
        cancel: 'Annuler',
        error: 'Erreur'
      },
      upload: {
        deleteTip: 'Cliquer sur supprimer pour retirer le fichier',
        delete: 'Supprimer',
        preview: 'Aper?u',
        continue: 'Continuer'
      },
      table: {
        emptyText: 'Aucune donn?e',
        confirmFilter: 'Confirmer',
        resetFilter: 'R?initialiser',
        clearFilter: 'Tous',
        sumText: 'Somme'
      },
      tree: {
        emptyText: 'Aucune donn?e'
      },
      transfer: {
        noMatch: 'Aucune correspondance',
        noData: 'Aucune donn?e',
        titles: ['Liste 1', 'Liste 2'],
        filterPlaceholder: 'Entrer un mot clef',
        noCheckedFormat: '{total} elements',
        hasCheckedFormat: '{checked}/{total} coch?(s)'
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
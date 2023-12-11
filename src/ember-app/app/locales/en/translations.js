import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya5ДиректорОтделаПоРаботеСКлиентамиLForm from './forms/i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-l';
import IISKursovaya5КлиентLForm from './forms/i-i-s-kursovaya5-клиент-l';
import IISKursovaya5ДиректорОтделаПоРаботеСКлиентамиEForm from './forms/i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-e';
import IISKursovaya5КлиентEForm from './forms/i-i-s-kursovaya5-клиент-e';
import IISKursovaya5ДиректорОтделаПоРаботеСКлиентамиModel from './models/i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами';
import IISKursovaya5ЗаключениеДоговораModel from './models/i-i-s-kursovaya5-заключение-договора';
import IISKursovaya5КлиентModel from './models/i-i-s-kursovaya5-клиент';
import IISKursovaya5ОказаниеКонсультацийModel from './models/i-i-s-kursovaya5-оказание-консультаций';
import IISKursovaya5РасторжениеДоговораModel from './models/i-i-s-kursovaya5-расторжение-договора';
import IISKursovaya5РасчетОставшегосяВремениModel from './models/i-i-s-kursovaya5-расчет-оставшегося-времени';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами': IISKursovaya5ДиректорОтделаПоРаботеСКлиентамиModel,
    'i-i-s-kursovaya5-заключение-договора': IISKursovaya5ЗаключениеДоговораModel,
    'i-i-s-kursovaya5-клиент': IISKursovaya5КлиентModel,
    'i-i-s-kursovaya5-оказание-консультаций': IISKursovaya5ОказаниеКонсультацийModel,
    'i-i-s-kursovaya5-расторжение-договора': IISKursovaya5РасторжениеДоговораModel,
    'i-i-s-kursovaya5-расчет-оставшегося-времени': IISKursovaya5РасчетОставшегосяВремениModel
  },

  'application-name': 'Kursovaya5',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya5',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya5',
          title: 'Kursovaya5'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya5: {
          caption: 'Kursovaya5',
          title: 'Kursovaya5',
          'i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-l': {
            caption: 'Директор отдела по работе с клиентами',
            title: ''
          },
          'i-i-s-kursovaya5-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-l': IISKursovaya5ДиректорОтделаПоРаботеСКлиентамиLForm,
    'i-i-s-kursovaya5-клиент-l': IISKursovaya5КлиентLForm,
    'i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-e': IISKursovaya5ДиректорОтделаПоРаботеСКлиентамиEForm,
    'i-i-s-kursovaya5-клиент-e': IISKursovaya5КлиентEForm
  },

});

export default translations;

import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya5',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya5',
          title: 'Kursovaya5'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-l': IISKursovaya5ДиректорОтделаПоРаботеСКлиентамиLForm,
    'i-i-s-kursovaya5-клиент-l': IISKursovaya5КлиентLForm,
    'i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами-e': IISKursovaya5ДиректорОтделаПоРаботеСКлиентамиEForm,
    'i-i-s-kursovaya5-клиент-e': IISKursovaya5КлиентEForm
  },

});

export default translations;

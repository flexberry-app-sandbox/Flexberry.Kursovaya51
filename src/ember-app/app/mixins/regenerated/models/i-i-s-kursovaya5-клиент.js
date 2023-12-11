import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  имя: DS.attr('string'),
  наимОрганицации: DS.attr('string'),
  номерТелефона: DS.attr('string'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string'),
  оказаниеКонсультаций: DS.hasMany('i-i-s-kursovaya5-оказание-консультаций', { inverse: 'клиент', async: false }),
  расторжениеДоговора: DS.hasMany('i-i-s-kursovaya5-расторжение-договора', { inverse: 'клиент', async: false }),
  заключениеДоговора: DS.hasMany('i-i-s-kursovaya5-заключение-договора', { inverse: 'клиент', async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-kursovaya5-клиент.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-kursovaya5-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимОрганицации: {
    descriptionKey: 'models.i-i-s-kursovaya5-клиент.validations.наимОрганицации.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-kursovaya5-клиент.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-kursovaya5-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-kursovaya5-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оказаниеКонсультаций: {
    descriptionKey: 'models.i-i-s-kursovaya5-клиент.validations.оказаниеКонсультаций.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  расторжениеДоговора: {
    descriptionKey: 'models.i-i-s-kursovaya5-клиент.validations.расторжениеДоговора.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  заключениеДоговора: {
    descriptionKey: 'models.i-i-s-kursovaya5-клиент.validations.заключениеДоговора.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-kursovaya5-клиент', {
    id: attr('Id', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    наимОрганицации: attr('Наим органицации', { index: 5 }),
    расторжениеДоговора: hasMany('i-i-s-kursovaya5-расторжение-договора', 'Расторжение договора', {
      дата: attr('Дата', { index: 0 }),
      номер: attr('Номер', { index: 1 })
    }),
    заключениеДоговора: hasMany('i-i-s-kursovaya5-заключение-договора', 'Заключение договора', {
      дата: attr('Дата', { index: 0 }),
      номер: attr('Номер', { index: 1 }),
      тип: attr('Тип', { index: 2 }),
      стоимость: attr('Стоимость', { index: 3 })
    }),
    оказаниеКонсультаций: hasMany('i-i-s-kursovaya5-оказание-консультаций', 'Оказание консультаций', {
      дата: attr('Дата', { index: 0 }),
      времяКонсультации: attr('Время консультации', { index: 1 }),
      предоставленнаяУслуга: attr('Предоставленная услуга', { index: 2 }),
      расчетОставшегосяВремени: hasMany('i-i-s-kursovaya5-расчет-оставшегося-времени', 'Расчет оставшегося времени', {
        использовано: attr('Использовано', { index: 0 }),
        доступно: attr('Доступно', { index: 1 })
      })
    })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-kursovaya5-клиент', {
    id: attr('Id', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    наимОрганицации: attr('Наим органицации', { index: 5 })
  });
};

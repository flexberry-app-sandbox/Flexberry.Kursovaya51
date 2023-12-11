import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  стоимость: DS.attr('number'),
  тип: DS.attr('i-i-s-kursovaya5-тип-договора'),
  директорОтделаПоРаботеСКлиентами: DS.belongsTo('i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами', { inverse: null, async: false }),
  оказаниеКонсультаций: DS.belongsTo('i-i-s-kursovaya5-оказание-консультаций', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-kursovaya5-клиент', { inverse: 'заключениеДоговора', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya5-заключение-договора.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya5-заключение-договора.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-kursovaya5-заключение-договора.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-kursovaya5-заключение-договора.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  директорОтделаПоРаботеСКлиентами: {
    descriptionKey: 'models.i-i-s-kursovaya5-заключение-договора.validations.директорОтделаПоРаботеСКлиентами.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказаниеКонсультаций: {
    descriptionKey: 'models.i-i-s-kursovaya5-заключение-договора.validations.оказаниеКонсультаций.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya5-заключение-договора.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаключениеДоговораE', 'i-i-s-kursovaya5-заключение-договора', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    тип: attr('Тип', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 })
  });
};

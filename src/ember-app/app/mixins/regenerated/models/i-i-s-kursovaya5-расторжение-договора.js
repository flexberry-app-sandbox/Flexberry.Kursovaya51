import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  директорОтделаПоРаботеСКлиентами: DS.belongsTo('i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-kursovaya5-клиент', { inverse: 'расторжениеДоговора', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya5-расторжение-договора.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya5-расторжение-договора.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  директорОтделаПоРаботеСКлиентами: {
    descriptionKey: 'models.i-i-s-kursovaya5-расторжение-договора.validations.директорОтделаПоРаботеСКлиентами.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya5-расторжение-договора.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасторжениеДоговораE', 'i-i-s-kursovaya5-расторжение-договора', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 })
  });
};

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  доступно: DS.attr('number'),
  использовано: DS.attr('number'),
  empty: DS.belongsTo('i-i-s-kursovaya5-расторжение-договора', { inverse: null, async: false }),
  директорОтделаПоРаботеСКлиентами: DS.belongsTo('i-i-s-kursovaya5-директор-отдела-по-работе-с-клиентами', { inverse: null, async: false }),
  оказаниеКонсультаций: DS.belongsTo('i-i-s-kursovaya5-оказание-консультаций', { inverse: 'расчетОставшегосяВремени', async: false })
});

export let ValidationRules = {
  доступно: {
    descriptionKey: 'models.i-i-s-kursovaya5-расчет-оставшегося-времени.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-kursovaya5-расчет-оставшегося-времени.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  empty: {
    descriptionKey: 'models.i-i-s-kursovaya5-расчет-оставшегося-времени.validations.empty.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  директорОтделаПоРаботеСКлиентами: {
    descriptionKey: 'models.i-i-s-kursovaya5-расчет-оставшегося-времени.validations.директорОтделаПоРаботеСКлиентами.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказаниеКонсультаций: {
    descriptionKey: 'models.i-i-s-kursovaya5-расчет-оставшегося-времени.validations.оказаниеКонсультаций.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОставшегосяВремениE', 'i-i-s-kursovaya5-расчет-оставшегося-времени', {
    использовано: attr('Использовано', { index: 0 }),
    доступно: attr('Доступно', { index: 1 })
  });
};

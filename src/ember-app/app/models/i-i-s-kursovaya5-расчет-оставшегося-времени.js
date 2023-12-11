import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасчетОставшегосяВремениMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya5-расчет-оставшегося-времени';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасчетОставшегосяВремениMixin, Validations, {
});

defineProjections(Model);

export default Model;

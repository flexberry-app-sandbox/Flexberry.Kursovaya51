import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасторжениеДоговораMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya5-расторжение-договора';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасторжениеДоговораMixin, Validations, {
});

defineProjections(Model);

export default Model;

import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОказаниеКонсультацийMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya5-оказание-консультаций';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОказаниеКонсультацийMixin, Validations, {
});

defineProjections(Model);

export default Model;

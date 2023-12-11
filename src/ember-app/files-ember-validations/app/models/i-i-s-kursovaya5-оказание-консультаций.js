import {
  defineNamespace,
  defineProjections,
  Model as ОказаниеКонсультацийMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya5-оказание-консультаций';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОказаниеКонсультацийMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

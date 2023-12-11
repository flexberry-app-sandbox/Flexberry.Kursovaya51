import {
  defineNamespace,
  defineProjections,
  Model as ЗаключениеДоговораMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya5-заключение-договора';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаключениеДоговораMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

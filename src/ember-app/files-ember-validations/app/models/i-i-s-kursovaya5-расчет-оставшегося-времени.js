import {
  defineNamespace,
  defineProjections,
  Model as РасчетОставшегосяВремениMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya5-расчет-оставшегося-времени';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасчетОставшегосяВремениMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

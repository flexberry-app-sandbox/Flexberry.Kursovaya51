import { Serializer as ОказаниеКонсультацийSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya5-оказание-консультаций';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОказаниеКонсультацийSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

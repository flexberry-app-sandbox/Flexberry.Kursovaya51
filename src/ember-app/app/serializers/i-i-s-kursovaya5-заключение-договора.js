import { Serializer as ЗаключениеДоговораSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya5-заключение-договора';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаключениеДоговораSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

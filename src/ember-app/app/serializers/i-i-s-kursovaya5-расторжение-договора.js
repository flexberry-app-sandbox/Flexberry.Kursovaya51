import { Serializer as РасторжениеДоговораSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya5-расторжение-договора';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасторжениеДоговораSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

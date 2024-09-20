const { ContentType, FieldType } = require('@include/hearth');

const calendar = new ContentType({
  name: 'calendar',
  singularDisplayName: 'Calendar',
});

calendar.createField({
  name: 'calendar_link',
  displayName: 'Calendar Link',
  type: FieldType.SHORT_TEXT,
  required: true,
});

module.exports = calendar;

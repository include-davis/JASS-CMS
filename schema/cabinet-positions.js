const { ContentType, FieldType } = require('@include/hearth');

const cabinetPositions = new ContentType({
  name: 'cabinet-position',
  singularDisplayName: 'Cabinet Position',
  pluralDisplayName: 'Cabinet Positions',
});

cabinetPositions
  .createField({
    name: 'position_title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'position_description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'display_order',
    displayName: 'Display Order',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = cabinetPositions;

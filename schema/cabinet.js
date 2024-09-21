const { ContentType, FieldType } = require('@include/hearth');

const board = new ContentType({
  name: 'cabinet-member',
  singularDisplayName: 'Cabinet Member',
  pluralDisplayName: 'Cabinet Members',
});

board
  .createField({
    name: 'cabinet_member_image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'cabinet_member_name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'display_order',
    displayName: 'Display Order',
    type: FieldType.SHORT_TEXT,
  });

module.exports = board;

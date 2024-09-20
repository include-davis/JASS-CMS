const { ContentType, FieldType } = require('@include/hearth');

const board = new ContentType({
  name: 'cabinet_member',
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
  });

module.exports = board;

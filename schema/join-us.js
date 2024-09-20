const { ContentType, FieldType } = require('@include/hearth');

const joinUs = new ContentType({
  name: 'join-us',
  singularDisplayName: 'Join Us',
});

joinUs
  .createField({
    name: 'join_us_hero_image',
    displayName: 'Hero Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'join_us_hero_title',
    displayName: 'Hero Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'join_us_hero_description',
    displayName: 'Hero Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = joinUs;

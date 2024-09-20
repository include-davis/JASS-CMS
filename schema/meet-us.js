const { ContentType, FieldType } = require('@include/hearth');

const meetUs = new ContentType({
  name: 'meet_us',
  singularDisplayName: 'Meet Us',
});

meetUs
  .createField({
    name: 'meet_us_hero_image',
    displayName: 'Hero Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'meet_us_hero_title',
    displayName: 'Hero Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'meet_us_hero_description',
    displayName: 'Hero Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = meetUs;

const { ContentType, FieldType } = require('@include/hearth');

const home = new ContentType({ name: 'home', singularDisplayName: 'Home' });

home
  .createField({
    name: 'home_hero_image',
    displayName: 'Hero Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'home_hero_title',
    displayName: 'Hero Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'home_hero_description',
    displayName: 'Hero Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'who_we_are_english',
    displayName: 'Who We Are',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'who_we_are_japanese',
    displayName: 'Who We Are (Japanese)',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'constitution_link',
    displayName: 'Constitution Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = home;

const { ContentType, FieldType } = require('@include/hearth');

const external_links = new ContentType({
  name: 'external-links',
  singularDisplayName: 'External Link',
  pluralDisplayName: 'External Links',
});

external_links
  .createField({
    name: 'for',
    displayName: 'For (Instagram, YouTube, etc...)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'url',
    displayName: 'Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = external_links;

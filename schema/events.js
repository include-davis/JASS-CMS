const { ContentType, FieldType } = require('@include/hearth');

const events = new ContentType({
  name: 'event',
  singularDisplayName: 'Event',
  pluralDisplayName: 'Events',
});

events
  .createField({
    name: 'event_image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'event_title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'event_description',
    displayName: 'Description',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = events;

import type { Schema, Attribute } from '@strapi/strapi';

export interface EventCarouselEvent extends Schema.Component {
  collectionName: 'components_event_carousel_events';
  info: {
    displayName: 'event';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    event_image: Attribute.Media;
    event_title: Attribute.String;
    event_description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'event-carousel.event': EventCarouselEvent;
    }
  }
}

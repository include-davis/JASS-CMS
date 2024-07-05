import type { Schema, Attribute } from '@strapi/strapi';

export interface CabinetCabinetBio extends Schema.Component {
  collectionName: 'components_cabinet_bio_cabinet_bios';
  info: {
    displayName: 'cabinet-bio';
    icon: 'user';
    description: '';
  };
  attributes: {
    bio_pic: Attribute.Media;
    role_title: Attribute.String;
    officer_name: Attribute.String;
  };
}

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
      'cabinet.cabinet-bio': CabinetCabinetBio;
      'event-carousel.event': EventCarouselEvent;
    }
  }
}

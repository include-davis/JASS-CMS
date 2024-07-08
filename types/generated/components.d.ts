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

export interface CabinetJoinCabinet extends Schema.Component {
  collectionName: 'components_cabinet_join_cabinets';
  info: {
    displayName: 'join-cabinet';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    position_title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface CabinetPositionDescription extends Schema.Component {
  collectionName: 'components_cabinet_position_descriptions';
  info: {
    displayName: 'position_description';
    description: '';
  };
  attributes: {
    bullet: Attribute.Text;
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
      'cabinet.join-cabinet': CabinetJoinCabinet;
      'cabinet.position-description': CabinetPositionDescription;
      'event-carousel.event': EventCarouselEvent;
    }
  }
}

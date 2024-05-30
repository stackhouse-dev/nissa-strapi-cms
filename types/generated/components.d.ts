import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemsTeam extends Schema.Component {
  collectionName: 'components_items_teams';
  info: {
    displayName: 'Team';
    icon: 'globe';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    team: Attribute.Enumeration<
      ['Nissa', 'Trapani', 'Palermo', 'Aspra', 'Siracusa']
    > &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'items.team': ItemsTeam;
    }
  }
}

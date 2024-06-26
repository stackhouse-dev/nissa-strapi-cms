import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemsPlayerStatistiche extends Schema.Component {
  collectionName: 'components_player_stats_player_statistiches';
  info: {
    displayName: 'Player Season Stats';
    description: '';
  };
  attributes: {
    stagione: Attribute.String;
    squadra: Attribute.String;
    categoria: Attribute.String;
    presenze: Attribute.String;
    gol: Attribute.Integer;
  };
}

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
      'items.player-statistiche': ItemsPlayerStatistiche;
      'items.team': ItemsTeam;
    }
  }
}

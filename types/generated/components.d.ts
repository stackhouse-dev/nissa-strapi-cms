import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemsNewsItem extends Schema.Component {
  collectionName: 'components_items_news_items';
  info: {
    displayName: 'news-item';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'items.news-item': ItemsNewsItem;
    }
  }
}

// @ts-nocheck
'use strict';

/**
 *  message controller
 */


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    const entries = await strapi.entityService.findMany(
      'api::article.article',
      {
        // to avoid strange queries in FE
        populate: 'deep'
      }
    );

    const sanitizedEntries = await this.sanitizeOutput(entries, ctx);
    return sanitizedEntries
  },

}));
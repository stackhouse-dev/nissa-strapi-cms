// @ts-nocheck
'use strict';

/**
 *  message controller
 */


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::calendar.calendar', ({ strapi }) => ({
  async find(ctx) {
    const entries = await strapi.entityService.findMany(
      'api::calendar.calendar',
      {
        // to avoid strange queries in FE
        populate: 'deep'
      }
    );
    // here we can manipulate response

    const sanitizedEntries = await this.sanitizeOutput(entries, ctx);
    return sanitizedEntries
  },

  async findOne(ctx) {
    // Filter by the current user as the author
    ctx.query = {
      ...ctx.query,
      populate: 'deep'
    };
    // here we can manipulate response
    const response = await super.findOne(ctx);
  
    return response;
  },

}));
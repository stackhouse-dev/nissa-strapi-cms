'use strict';

/**
 * calendar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calendar.calendar', ({strapi}) => ({
  async customService(...args) {
    console.log('my service is called')
  }
}));

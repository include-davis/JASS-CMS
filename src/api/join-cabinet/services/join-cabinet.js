'use strict';

/**
 * join-cabinet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::join-cabinet.join-cabinet');

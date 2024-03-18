'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('roles', [
      {
      value: 'ADMIN',
      description: 'Administrator',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      value: 'USER',
      description: 'User',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Roles', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notes', [
        {
          userId: '1',
          folderId: '1',
          title: 'Lorem ipsum dolor',
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
       },
      {
          userId: '1',
          folderId: '1',
          title: 'sit amet, consectetur adipiscing',
          content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
       },
      {
          userId: '1',
          folderId: '1',
          title: 'Ut enim ad minim veniam.',
          content: 'Malesuada nunc vel risus commodo viverra. Eget nulla facilisi etiam dignissim. Nisi vitae suscipit tellus mauris. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.'
      },
      {
          userId: '1',
          folderId: '2',
          title: 'Excepteur Sint Occaecat',
          content: 'Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Aliquet bibendum enim facilisis gravida neque convallis a. Neque ornare aenean euismod elementum nisi.'
      },
      {
          userId: '1',
          folderId: '2',
          title: 'Ut aliquip ex ea commodo consequat',
          content: 'Cras sed felis eget velit aliquet sagittis. Malesuada pellentesque elit eget gravida cum sociis. Vel risus commodo viverra maecenas accumsan lacus. Vitae nunc sed velit dignissim.'
      },
      {
          userId: '1',
          folderId: '2',
          title: 'Consectetur adipiscing elit.',
          content: 'Fames ac turpis egestas maecenas pharetra convallis posuere. Molestie ac feugiat sed lectus vestibulum mattis. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.'
      },
      {
          userId: '1',
          folderId: '3',
          title: 'Sunt in culpa qui officia deserun',
          content: ''
      },
      {
          userId: '1',
          folderId: '3',
          title: 'Incididunt ut labore et.',
          content: 'Velit ut tortor pretium viverra suspendisse potenti nullam. Adipiscing enim eu turpis egestas. Vitae sapien pellentesque habitant morbi.'
      },
      {
          userId: '1',
          folderId: '3',
          title: 'deserunt mollit anim id est laborum',
          content: 'Mattis nunc sed blandit libero volutpat sed cras ornare. Pretium viverra suspendisse potenti nullam ac tortor vitae purus.'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', {
      id: { [Sequelize.Op.gt]: 0 }
    });
  }
};

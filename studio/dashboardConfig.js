export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601405cab69cdc0de8148602',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9eejmfua',
                  apiId: 'eba32a7d-83e0-48fe-998b-aa6655924525'
                },
                {
                  buildHookId: '601405ca237e6e151a5b9ca1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-acedh949',
                  apiId: 'e6f4cd39-fa3c-46fa-93b5-3a3c8e422cb1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kyouma78/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-acedh949.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

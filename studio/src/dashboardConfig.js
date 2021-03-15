export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '604f9d1688e98a2bb00c990b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-atb1juyn',
                  apiId: '8884fd7b-9a37-4e88-89a5-b0335bc8f427'
                },
                {
                  buildHookId: '604f9d17c8d2e22b68398ba6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-anh55u2x',
                  apiId: '0594dc67-fb2b-4bde-9a03-997c9d9c40c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Abhisek-Khuntia/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-anh55u2x.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

export default {
  widgets: [
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
                  buildHookId: '5f8fb2fd04200f67df4152e2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ffm4k8om',
                  apiId: '66bb130b-f2f2-468b-8318-40745119694d'
                },
                {
                  buildHookId: '5f8fb2feb3a2df68558d35e2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-so6ppwmq',
                  apiId: '712296e4-5bf2-442b-96a4-9aa57376362e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/denvergeeks/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-so6ppwmq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

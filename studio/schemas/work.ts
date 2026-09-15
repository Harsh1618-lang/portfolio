export default {
  name: 'workEntry',
  title: 'Work Entry',
  type: 'object',
  fields: [
    { name: 'company', title: 'Company', type: 'string' },
    { name: 'href', title: 'Link', type: 'url' },
    { name: 'logoUrl', title: 'Logo URL', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'start', title: 'Start', type: 'string' },
    { name: 'end', title: 'End', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
  ]
}

export default {
  name: 'hackathon',
  title: 'Hackathon',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'dates', title: 'Dates', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'links', title: 'Links', type: 'array', of: [{ type: 'object', fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'href', title: 'URL', type: 'url' }
    ] }] }
  ]
}

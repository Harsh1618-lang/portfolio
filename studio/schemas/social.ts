export default {
  name: 'social',
  title: 'Social Link',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'url', title: 'URL', type: 'url' },
    { name: 'icon', title: 'Icon', type: 'string', description: 'Optional icon name or SVG path.' }
  ]
}

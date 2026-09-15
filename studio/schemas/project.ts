export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'coverImage', title: 'Cover Image', type: 'image' },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
    { name: 'technologies', title: 'Technologies', type: 'array', of: [{ type: 'string' }] },
    { name: 'links', title: 'Links', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', title: 'Label', type: 'string' },
      { name: 'url', title: 'URL', type: 'url' }
    ] }] }
  ]
}

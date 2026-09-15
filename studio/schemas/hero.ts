export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'text' },
    { name: 'ctaText', title: 'CTA Text', type: 'string' },
    { name: 'ctaUrl', title: 'CTA URL', type: 'url' },
    { name: 'image', title: 'Image', type: 'image' }
  ]
}

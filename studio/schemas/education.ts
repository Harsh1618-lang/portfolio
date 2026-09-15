export default {
  name: 'educationEntry',
  title: 'Education Entry',
  type: 'object',
  fields: [
    { name: 'school', title: 'School', type: 'string' },
    { name: 'href', title: 'Link', type: 'url' },
    { name: 'degree', title: 'Degree', type: 'string' },
    { name: 'logoUrl', title: 'Logo URL', type: 'string' },
    { name: 'start', title: 'Start', type: 'string' },
    { name: 'end', title: 'End', type: 'string' },
  ]
}

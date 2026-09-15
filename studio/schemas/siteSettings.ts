export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'name', title: 'Author Name', type: 'string' },
    { name: 'initials', title: 'Initials', type: 'string' },
    { name: 'avatar', title: 'Avatar', type: 'image' },
    { name: 'socialLinks', title: 'Social Links', type: 'array', of: [{ type: 'social' }] },
    { name: 'footerText', title: 'Footer Text', type: 'text' },
    { name: 'skills', title: 'Skills', type: 'array', of: [{ type: 'skill' }] },
    { name: 'education', title: 'Education', type: 'array', of: [{ type: 'educationEntry' }] },
    { name: 'work', title: 'Work', type: 'array', of: [{ type: 'workEntry' }] },
    { name: 'hackathons', title: 'Hackathons', type: 'array', of: [{ type: 'hackathon' }] }
  ]
}

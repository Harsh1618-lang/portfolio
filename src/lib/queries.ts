export const siteSettingsQuery = `*[_type == "siteSettings"][0]{..., socialLinks[]}`

export const heroQuery = `*[_type == "hero"][0]{title, subtitle, ctaText, ctaUrl, image}`

export const projectsQuery = `*[_type == "project"]|order(publishedAt desc){title,slug,excerpt,coverImage,technologies,links,publishedAt}`

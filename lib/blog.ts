import fs from 'fs'
import path from 'path'

// blog post metadata
export interface BlogPost {
    slug: string
    title: string
    date: string
    description?: string
}

// Get the path to the blog directory
const BLOG_DIR = path.join(process.cwd(), 'app', 'blog')

export async function getAllBlogPosts(): Promise<BlogPost[]> {
    // Read all items in the blog directory
    const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true })

    // Filter to only get directories (each blog post is in its own folder)
    const postDirs = entries.filter((entry) => entry.isDirectory())

    const posts: BlogPost[] = []

    for (const dir of postDirs) {
        const slug = dir.name
        const mdxPath = path.join(BLOG_DIR, slug, 'page.mdx')

        // Check if page.mdx exists in this directory
        if (fs.existsSync(mdxPath)) {
            // Read the MDX file content
            const content = fs.readFileSync(mdxPath, 'utf-8')

            // Extract metadata using a regex pattern
            // This looks for: export const metadata = { ... }
            const metadataMatch = content.match(/export const metadata = \{([\s\S]*?)\}/)

            if (metadataMatch) {
                // Parse the metadata object
                const metadataStr = metadataMatch[0]

                // Extract title, date, and description using regex
                const titleMatch = metadataStr.match(/title:\s*['"]([^'"]+)['"]/)
                const dateMatch = metadataStr.match(/date:\s*['"]([^'"]+)['"]/)
                const descMatch = metadataStr.match(/description:\s*['"]([^'"]+)['"]/)

                if (titleMatch && dateMatch) {
                    posts.push({
                        slug,
                        title: titleMatch[1],
                        date: dateMatch[1],
                        description: descMatch ? descMatch[1] : undefined,
                    })
                }
            }
        }
    }

    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
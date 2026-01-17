import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'

export default async function Blog() {
    // Fetch all blog posts
    const posts = await getAllBlogPosts()

    return (
        <div className="mx-auto max-w-2xl py-16">
            <h1 className="mb-8 text-3xl font-bold">Blog</h1>

            <div className="space-y-8">
                {posts.map((post) => (
                    <article key={post.slug} className="border-b border-gray-200 pb-8 dark:border-gray-800">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="group block"
                        >
                            <h2 className="mb-2 text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                {post.title}
                            </h2>
                            <time className="mb-3 block text-sm text-gray-500 dark:text-gray-400">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    )
}
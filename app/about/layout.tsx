'use client'

export default function LayoutAbout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <article className="prose prose-zinc dark:prose-invert max-w-none 
      prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight
      prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:leading-tight prose-h1:mb-8
      prose-p:leading-relaxed prose-p:text-lg prose-p:text-zinc-700 dark:prose-p:text-zinc-300
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-img:rounded-xl prose-img:shadow-sm
      pb-20
    ">
            {children}
        </article>
    )
}

import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={675}
            className="rounded-xl"
            priority
            quality={85}
          />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    img: ({ src, alt, ...props }: ComponentPropsWithoutRef<'img'>) => {
      if (!src) return null

      return (
        <Image
          src={src as string}
          alt={alt || ''}
          width={1024}
          height={768}
          className="rounded-lg"
          loading="lazy"
          quality={85}
        />
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}

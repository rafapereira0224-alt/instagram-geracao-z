
import { postsData } from './posts'

// Um grupo de Stories para cada ano da Geração Z.
// Cada grupo terá os dois acontecimentos daquele ano.

const years = Array.from(
  { length: 16 },
  (_, index) => 2012 - index
)

export const storiesData = years.map((year) => {
  const posts = postsData.filter(
    (post) => Number(post.year) === year
  )

  return {
    id: year,
    name: String(year),
    title: `Acontecimentos de ${year}`,
    emoji: '📅',
    stories: posts.map((post) => ({
      id: post.id,
      postId: post.id,
      title: post.title,
      year: post.year,
      category: post.category,
      image: post.image,
      text: post.caption.split('\n\n').find(
        (paragraph) =>
          paragraph.startsWith('📅')
      ) || post.title,
    })),
  }
})

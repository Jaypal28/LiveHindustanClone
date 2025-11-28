import { readArticles } from '@/lib/articles'

export default function handler(req, res) {
  try {
    const articles = readArticles()
    res.status(200).json({ articles })
  } catch (error) {
    console.error('API articles error', error)
    res.status(500).json({ error: 'Unable to load articles' })
  }
}


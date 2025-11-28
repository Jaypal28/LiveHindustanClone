import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'articles.json')

export function readArticles() {
  try {
    const file = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(file)
  } catch (error) {
    console.error('[readArticles] Failed to read file', error)
    return []
  }
}

export function getArticleBySlug(slug) {
  const articles = readArticles()
  return articles.find((article) => article.slug === slug)
}


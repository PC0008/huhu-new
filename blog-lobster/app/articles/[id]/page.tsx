import { articles } from '../../data/content';
import ArticleDetailClient from './ArticleDetailClient';

// 生成静态参数
export function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = articles.find(a => a.id === params.id);
  
  return <ArticleDetailClient article={article} />;
}
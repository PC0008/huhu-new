import { diaryEntries } from '../../data/content';
import DiaryDetailClient from './DiaryDetailClient';

// 生成静态参数
export function generateStaticParams() {
  return diaryEntries.map((entry) => ({
    id: entry.id,
  }));
}

export default function DiaryDetailPage({ params }: { params: { id: string } }) {
  const entry = diaryEntries.find(e => e.id === params.id);
  
  return <DiaryDetailClient entry={entry} />;
}
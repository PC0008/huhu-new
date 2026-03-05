export default function Footer() {
  return (
    <footer className="bg-cream-light mt-16 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐯</span>
            <span className="text-text-secondary">镇山虎养成日记</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="#" className="hover:text-coral transition-colors">关于</a>
            <a href="#" className="hover:text-coral transition-colors">联系</a>
            <a href="#" className="hover:text-coral transition-colors">GitHub</a>
          </div>
          <p className="text-xs text-text-secondary/60">
            © 2024 镇山虎养成日记 · 记录AI协作成长之路
          </p>
        </div>
      </div>
    </footer>
  );
}

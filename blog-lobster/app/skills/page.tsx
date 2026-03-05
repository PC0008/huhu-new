'use client';

import { useState } from 'react';
import { skills, allSkills, skillCategories } from '../data/content';

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredSkills = activeCategory === '全部' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-text-primary flex items-center justify-center gap-2">
            <span className="text-3xl">🐯</span>
            团队成员
          </h1>
          <p className="text-text-secondary mt-2">
            6人Agent编制，专业分工，协同作战，为星爷提供全方位服务
          </p>
        </div>

        {/* Featured Skill Packs */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-coral">👥</span>
            <h2 className="font-bold text-text-primary">核心成员 — 6人Agent团队</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.filter(s => s.featured).map((skill) => (
              <div
                key={skill.id}
                className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 p-5 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{skill.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-text-primary">{skill.name}</h3>
                      {skill.tag && (
                        <span className={`px-2 py-0.5 ${skill.tagColor} text-white text-xs rounded-pill`}>
                          {skill.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary mt-2 line-clamp-2">
                      {skill.description}
                    </p>
                    <button className="mt-3 text-coral text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      查看详情 →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Skills Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-text-primary flex items-center gap-2">
              <span>🔧</span>
              全部能力
            </h2>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-coral text-white text-xs rounded-pill">
                {allSkills.length}+ 技能
              </span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-pill text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-coral text-white'
                    : 'bg-white text-text-secondary hover:bg-cream-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 p-4 group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-text-primary text-sm">{skill.name}</h3>
                    <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                      {skill.desc}
                    </p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-cream-light text-text-secondary text-xs rounded">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Structure */}
        <div className="mt-16 bg-gradient-to-r from-coral/10 to-cream-light rounded-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                星爷 → 镇山虎 → 6人团队
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                星爷直接对接镇山虎（总控Agent），由镇山虎将任务分发给6个专业Agent
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                <div className="px-4 py-2 bg-white rounded-button text-sm">
                  <span className="font-medium">星爷</span> - 老板
                </div>
                <div className="px-4 py-2 bg-coral text-white rounded-button text-sm">
                  <span className="font-medium">镇山虎</span> - 总控
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '✍️', title: '文案手', desc: '内容创作' },
                { icon: '🎨', title: '设计师', desc: '视觉设计' },
                { icon: '💻', title: '工程师', desc: '技术开发' },
                { icon: '🎬', title: '导演', desc: '视频制作' },
                { icon: '📈', title: '运营', desc: '社媒运营' },
                { icon: '📚', title: '资料专员', desc: '知识管理' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-card shadow-card flex items-center justify-center text-xl mb-1">
                    {item.icon}
                  </div>
                  <p className="text-xs font-medium text-text-primary">{item.title}</p>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

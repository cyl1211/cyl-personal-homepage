import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Code, Palette, Globe, Calendar, Tag } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  date?: string
  features?: string[]
  challenges?: string[]
}

// 获取基础路径
const BASE_URL = import.meta.env.BASE_URL

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>()

  // 项目数据（与 Portfolio.tsx 保持一致）
  const projects: Project[] = [
    {
      id: 1,
      title: '个人主页开发',
      category: 'Web开发',
      description: '一个功能完整的个人主页，支持个人介绍、作品展示、博客展示、联系方式等功能。',
      longDescription: `
这是一个使用 React + TypeScript 构建的现代化个人主页。项目采用了 React Router 进行路由管理，实现了个人介绍、作品展示、博客展示、联系方式等功能。使用了 Tailwind CSS 进行样式管理，并实现了完整的响应式设计。

整个项目完全使用 AI 辅助开发（Cursor），展示了 AI 在提升开发效率方面的巨大潜力。
      `,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Vite', 'EmailJS'],
      image: `${BASE_URL}projects/portfolio1.jpg`,
      githubUrl: 'https://github.com/cyl1211/cyl-personal-homepage',
      liveUrl: 'https://cyl-personal-homepage.vercel.app/',
      featured: true,
      date: '2026-01-11',
      features: [
        '响应式设计，支持桌面端、平板和移动端',
        '个人介绍页面，展示工作经历和教育背景',
        '作品集展示，支持分类筛选和详情查看',
        '博客系统，支持文章列表和详情页',
        '联系表单，集成 EmailJS 实现真实邮件发送',
        '支持 Vercel 和 GitHub Pages 双平台部署',
      ],
      challenges: [
        '解决 GitHub Pages SPA 路由问题，采用 HashRouter',
        '实现响应式导航栏，移动端支持折叠菜单',
        '优化图片加载，提升页面性能',
      ],
    }
  ]

  const project = projects.find(p => p.id === Number(id))

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web开发':
        return <Code className="w-5 h-5" />
      case '设计':
        return <Palette className="w-5 h-5" />
      default:
        return <Globe className="w-5 h-5" />
    }
  }

  if (!project) {
    return (
      <div className="section-padding bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">项目未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，您访问的项目不存在。</p>
          <Link to="/portfolio" className="btn-primary">
            <ArrowLeft className="mr-2 w-5 h-5" />
            返回作品集
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* 项目头部 */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            返回作品集
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：项目信息 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-2 px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full">
                  {getCategoryIcon(project.category)}
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-700 rounded-full">
                    ⭐ 精选项目
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              
              {project.date && (
                <div className="flex items-center gap-2 text-gray-500 mb-6">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
              )}

              <p className="text-xl text-gray-600 mb-8">{project.description}</p>

              {/* 操作按钮 */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    在线预览
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    查看源码
                  </a>
                )}
              </div>
            </div>

            {/* 右侧：项目图片 */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 via-blue-200 to-purple-200 rounded-2xl blur-xl opacity-60"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                {project.image && !project.image.includes('placeholder') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <span className="text-6xl text-primary-600 opacity-50">
                      {getCategoryIcon(project.category)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 项目详情 */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* 技术栈 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Tag className="w-6 h-6 text-primary-600" />
              技术栈
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-6"></div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 项目描述 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">项目介绍</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-6"></div>
            <div className="prose prose-lg max-w-none">
              {project.longDescription.split('\n').map((line, index) => (
                line.trim() ? (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {line}
                  </p>
                ) : null
              ))}
            </div>
          </div>

          {/* 主要功能 */}
          {project.features && project.features.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">主要功能</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-6"></div>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1.5 w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 技术挑战 */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">技术挑战与解决方案</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-6"></div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1.5 w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 返回按钮 */}
          <div className="pt-8 border-t border-gray-200">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回作品集
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioDetail

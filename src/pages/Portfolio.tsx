import { useState } from 'react'
import { ExternalLink, Github, Code, Palette, Globe } from 'lucide-react'

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
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部')

  const projects: Project[] = [
    {
      id: 1,
      title: '个人主页开发',
      category: 'Web开发',
      description: '一个功能完整的个人主页，支持个人介绍、作品展示、博客展示、联系方式等功能。',
      longDescription:
        '这是一个使用 React + TypeScript 构建的现代化个人主页。项目采用了 React Router 进行路由管理，实现了个人介绍、作品展示、博客展示、联系方式等功能。使用了 Tailwind CSS 进行样式管理，并实现了完整的响应式设计。',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
      image: '/projects/portfolio1.jpg',
      githubUrl: 'https://github.com/cyl1211/cyl-personal-homepage',
      liveUrl: 'https://cyl-personal-homepage.vercel.app/',
      featured: true,
    }
  ]

  const categories = ['全部', 'Web开发']

  const filteredProjects =
    selectedCategory === '全部'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

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

  return (
    <div>
      {/* 页面标题 */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">作品集</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            这里展示了我的一些精选项目，每个项目都代表了我对技术和设计的热情。
          </p>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>

          {/* 项目网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`card group cursor-pointer overflow-hidden ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* 项目图片 */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 mb-4 rounded-lg overflow-hidden">
                  {project.image && !project.image.includes('placeholder') ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl text-primary-600 opacity-50">
                        {getCategoryIcon(project.category)}
                      </span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      精选
                    </div>
                  )}
                </div>

                {/* 项目信息 */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm text-gray-500">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">代码</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">预览</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio



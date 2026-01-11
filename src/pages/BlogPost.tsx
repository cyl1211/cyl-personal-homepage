import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'

interface BlogPostData {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()

  // 博客文章数据（与 Blog.tsx 保持一致）
  const posts: BlogPostData[] = [
    {
      id: 1,
      title: '个人主页',
      excerpt: '个人主页的开发过程和心得分享。',
      content: `
## 项目背景

我一直想拥有一个属于自己的个人主页，用来展示我的作品、分享我的想法。

## 开发过程

我的个人主页借助 Cursor 开发，自己不用写一行代码，完全用提示词即可实现功能开发。

### 技术栈选择

- **React + TypeScript**：现代化的前端框架，类型安全
- **Tailwind CSS**：快速构建美观的 UI
- **React Router**：实现页面路由
- **Vite**：快速的开发构建工具

### 主要功能

1. **首页**：展示个人简介和核心价值
2. **关于我**：详细的个人背景和工作经历
3. **作品集**：展示项目案例
4. **博客**：分享技术文章
5. **联系**：提供联系方式

## 心得体会

使用 AI 辅助开发大大提高了效率，让我能够专注于产品设计和用户体验，而不是陷入繁琐的代码细节中。

## 未来计划

- 添加更多作品案例
- 持续更新博客内容
- 优化移动端体验
      `,
      date: '2026-01-11',
      readTime: '2 分钟',
      category: '技术',
      tags: ['cursor', 'vscode', '前端开发'],
      featured: true,
    }
  ]

  const post = posts.find(p => p.id === Number(id))

  if (!post) {
    return (
      <div className="section-padding bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">文章未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，您访问的文章不存在。</p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft className="mr-2 w-5 h-5" />
            返回博客
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* 文章头部 */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            返回博客
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 文章内容 */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg max-w-none">
            {post.content.split('\n').map((line, index) => {
              // 处理标题
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                    {line.replace('## ', '')}
                  </h2>
                )
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                    {line.replace('### ', '')}
                  </h3>
                )
              }
              // 处理列表
              if (line.startsWith('- **')) {
                const match = line.match(/- \*\*(.+?)\*\*：(.+)/)
                if (match) {
                  return (
                    <div key={index} className="flex gap-2 mb-2">
                      <span className="text-primary-600">•</span>
                      <span>
                        <strong className="text-gray-900">{match[1]}</strong>
                        <span className="text-gray-600">：{match[2]}</span>
                      </span>
                    </div>
                  )
                }
              }
              if (line.match(/^\d+\. \*\*/)) {
                const match = line.match(/^\d+\. \*\*(.+?)\*\*：(.+)/)
                if (match) {
                  return (
                    <div key={index} className="flex gap-2 mb-2 ml-4">
                      <span className="text-primary-600 font-semibold">{line.match(/^\d+/)?.[0]}.</span>
                      <span>
                        <strong className="text-gray-900">{match[1]}</strong>
                        <span className="text-gray-600">：{match[2]}</span>
                      </span>
                    </div>
                  )
                }
              }
              if (line.startsWith('- ')) {
                return (
                  <div key={index} className="flex gap-2 mb-2">
                    <span className="text-primary-600">•</span>
                    <span className="text-gray-600">{line.replace('- ', '')}</span>
                  </div>
                )
              }
              // 普通段落
              if (line.trim()) {
                return (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {line}
                  </p>
                )
              }
              return null
            })}
          </article>
          
          {/* 返回按钮 */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回博客列表
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost

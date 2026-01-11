import { Link } from 'react-router-dom'
import { ArrowRight, Code, Palette, PenTool, Brain } from 'lucide-react'

const Home = () => {
  const recentUpdates = [
    {
      id: 1,
      title: '个人主页开发',
      type: '作品集',
      date: '2026-01-11',
      link: '/portfolio',
    },
    {
      id: 2,
      title: '个人主页',
      type: '博客',
      date: '2026-01-11',
      link: '/blog',
    },
  ]

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: '全栈开发',
      description: '一人搞定全栈开发',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: '算法选型',
      description: 'AI算法选型与落地',
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: '产品研发',
      description: 'AI产品研发与落地',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: '技术咨询',
      description: 'AI技术落地方案设计与技术咨询',
    },
  ]

  return (
    <div>
      {/* Hero 区域 */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              你好，我是{' '}
              <Link to="/about" className="text-primary-600 hover:text-primary-700 hover:underline transition-colors duration-200">陈以伦</Link>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              专注于AI+行业应用，让AI技术真正落地。
            </p>
            <p className="text-lg text-gray-500 mb-8">
              我是一名 AI全栈工程师，专注于利用AI技术解决实际问题。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio" className="btn-primary">
                查看作品集
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                联系我
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 服务/技能概览 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            我能为你做什么
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态 */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">最新动态</h2>
            <Link
              to="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              查看全部
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentUpdates.map((update) => (
              <Link
                key={update.id}
                to={update.link}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                    {update.type}
                  </span>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {update.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            准备开始一个项目？
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            让我们一起创造一些令人惊叹的东西
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            立即联系
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home



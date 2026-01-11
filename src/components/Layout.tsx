import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Github } from 'lucide-react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: '首页', href: '/' },
    { name: '关于我', href: '/about' },
    { name: '作品集', href: '/portfolio' },
    { name: '博客', href: '/blog' },
    { name: '联系', href: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary-600">
              个人主页
            </Link>

            {/* 桌面端导航 */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* 移动端菜单 */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="flex-grow">{children}</main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* 个人主页介绍 - 窄列 */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold mb-4">个人主页</h3>
              <ul className="text-gray-400 space-y-2 pl-2">
                <li>展示我的作品</li>
                <li>分享我的想法</li>
                <li>连接更多可能性</li>
              </ul>
            </div>
            
            {/* 快速链接 - 宽列 */}
            <div className="md:col-span-5 md:pl-12">
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 pl-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 社交媒体 - 只有 GitHub */}
            <div className="md:col-span-4">
              <h4 className="text-lg font-semibold mb-4">社交媒体</h4>
              <div className="flex space-x-4 pl-2">
                <a
                  href="https://github.com/cyl1211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} 个人主页. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout



import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Send, Github, Download, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// 获取基础路径（Vite 环境变量）
const BASE_URL = import.meta.env.BASE_URL

// EmailJS 配置 - 请替换为你自己的配置
// 1. 访问 https://www.emailjs.com/ 注册账号
// 2. 创建 Email Service（连接你的邮箱）
// 3. 创建 Email Template（设置邮件模板）
// 4. 获取以下三个值并替换
const EMAILJS_SERVICE_ID = 'service_1'  // 替换为你的 Service ID
const EMAILJS_TEMPLATE_ID = 'template_1'  // 替换为你的 Template ID
const EMAILJS_PUBLIC_KEY = 'ndWAvlPpu3gez_2GR'  // 替换为你的 Public Key

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // 3秒后重置状态
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: '邮箱',
      value: 'chenyilun1211@126.com',
      link: 'mailto:chenyilun1211@126.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: '电话',
      value: '+86 166-0210-4701',
      link: 'tel:+8616602104701',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: '微信',
      value: '16602104701（电话同号）',
      link: null,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: '地址',
      value: '中国，上海市',
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/cyl1211',  // 替换为你的 GitHub 地址
      color: 'hover:text-gray-900',
    },
  ]

  return (
    <div>
      {/* 页面标题 */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            有项目想法或想聊聊？我很乐意听到你的声音！
          </p>
        </div>
      </section>

      {/* 联系表单和信息 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 联系表单 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">发送消息</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="你的姓名"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    主题 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="消息主题"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    消息 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="请告诉我你的想法..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      发送中...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      发送消息
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    消息发送成功！我会尽快回复你。
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    发送失败，请稍后重试。
                  </div>
                )}
              </form>
            </div>

            {/* 联系信息 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">联系方式</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg text-gray-900 hover:text-primary-600 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* 社交媒体 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">社交媒体</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-colors duration-200`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* 简历下载 */}
              <div className="mt-8">
                <a
                  href={`${BASE_URL}resume.pdf`}
                  download
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-medium shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-gray-900/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>下载简历</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 响应时间说明 */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">通常我会尽快回复</h2>
          <p className="text-gray-600">
            如果您有紧急项目需求，建议直接通过微信联系我。我期待与您合作！
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact



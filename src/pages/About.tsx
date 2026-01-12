import { useState } from 'react'
import { Download, Award, Briefcase, GraduationCap, X, ChevronRight, Target, Rocket } from 'lucide-react'

// 获取基础路径（Vite 环境变量）
const BASE_URL = import.meta.env.BASE_URL

// 工作经历类型定义
interface Project {
  name: string
  content: string[]
  achievements: string[]
}

interface WorkExperience {
  id: string
  title: string
  company: string
  period: string
  summary: string
  content: string[]
  achievements: string[]
  projects: Project[]
}

interface Education {
  title: string
  company: string
  major?: string
  period: string
}

const About = () => {
  const [selectedWork, setSelectedWork] = useState<WorkExperience | null>(null)

  // 工作经历数据
  const workExperiences: WorkExperience[] = [
    {
      id: 'work-1',
      title: 'AI创新中心算法工程师',
      company: '上海金桥信息股份有限公司',
      period: '2025.6 - 至今',
      summary: '探索AI应用在教育行业的落地，负责核心AI产品的研发和落地。',
      content: [],
      achievements: [],
      projects: [],
    },
    {
      id: 'work-2',
      title: 'AI产品研发部主管',
      company: '上海逸舟信息科技有限公司',
      period: '2020.6 - 2025.6',
      summary: '负责核心AI产品的研发，以及配套系统架构设计与开发，带领团队完成多个重要项目。',
      content: [
        '带领研发团队（4人）完成新品智能终端的研发和迭代升级，并交付客户。',
        '依托专业场景和行业数据，帮助用户建立专业的数据资产和模型库。',
        '依托专业场景和行业数据，帮助用户建立专业的数据资产和模型库。',
        '负责端侧和云侧程序的设计、开发及部署，保障算法在不同平台的高效运行。',
        '研究新技术，结合电力行业的数据，探索RAG/agent 技术在行业中的应用。',
        '通过市场研究，技术评估和竞品分析，规划有竞争力的长期产品布局。',
      ],
      achievements: [
        '2021年8月，晋升为AI研发部主管，开始领导部门工作。',
        '主导新品智能终端的研发，并于2021年底推向市场。累计交付客户600多套。',
        '主导开发并依次上线了视觉识别服务系统、人脸识别服务系统、考试问答系统、流媒体系统。拓展了公司的业务领域。'
      ],
      projects: [
        {
          name: '视觉识别系统开发',
          content: [
            '自主研发多场景智能视觉中枢系统，面向智慧工地/食堂 构建端到端解决方案，集成行为分析、安全监控、人员跟踪模块。',
            '基于linux环境搭建工业级视觉算法框架，使用yolov5/v8/v10、rt-detr、groundingDINO等模型，基于pytorch框架训练部署。对模型侧进行大量改进和实验，得到符合特定场景的最优模型。对模型侧进行大量改进和实验，得到符合特定场景的最优模型。',
            '构建电力行业专业级施工场景视觉数据集，累计采集标注20万+基于YOLO格式的图像样本，形成数据资产。',
            '自研人脸识别系统。基于RetinaFace/ArcFace构建十万级人脸特征库，自主训练模型，实现了人脸注册/识别/比对等功能。'
          ],
          achievements: [
            '交付工业级智能安防视觉中枢系统，部署于公司全域智能终端及第三方摄像头设备，基于改进YOLO+DeepSORT多目标跟踪算法，实现无人扶梯，高危区域围栏缺失等15类违章行为。识别准确率达到95%以上。',
            '打造智慧食安监管解决方案，完成43家中央厨房标准化部署，研发厨师着装规范识别、离岗火源监测等5大AI合规模块，使后厨巡检效率提升4倍，卫生合规率提高至99%。',
            '构建电力行业十万级人脸认证平台，为电力公司10万+人提供人脸认证服务，总体精度97%以上，年节省人力核验成本超百万。',
          ],
        },
        {
          name: '智能终端研发',
          content: [
            '担任智能终端产品线技术负责人，主导完成硬件架构设计与软件系统研发。创新性提出“多场景多形态”的产品模式。',
            '智能终端端侧软件系统开发，多路视频推送,录像回放,AI识别,移动侦测,数据采集,语音播报/对讲,单/双目测距等。',
            '构建工业级物联云平台，用于端侧数据汇聚以及用户侧数据下发。指令控制中枢提供基于fastapi的标准接口服务，用于提供和端侧/用户侧的交互；流媒体中台实现了基于rtmp/GB28181协议的视频传输和分发。可通过云侧对端侧设备进行远程控制。',
          ],
          achievements: [
            '打造电力行业智能终端标杆产品，累计交付客户600+套，市场占有率突破30%。',
            '构建电力行业工业物联云平台，创新研发异构设备兼容适配技术，成功接入华为/海康等5大厂商的500+台专业设备。'
          ],
        },
        {
          name: '电力行业知识体系构建与业务智能化',
          content: [
            '构建电力行业知识智能中枢平台，基于langchain+LLM+RAG+Agent技术栈实现业务全链条智能化改造，覆盖设备运维指导、安全规程培训、故障诊断决策、在线教育等核心业务场景。',
            '搭建电力领域专属大模型体系，采用Ollama，vllm作为推理框架构建本地化LLM集群，部署Qwen2与deepseek模型。',
            '构建电力行业知识库，结构化处理1000+文档，注入十万级电力专业语料，涵盖技术规范、在线教育题库、规章制度、事故案例、设备手册等。',
          ],
          achievements: [
            '建成电力行业全栈式知识智能平台，提供客户以及公司内部使用，全面提升工作效率。',
            '实现AI技术深度融入核心业务，智能陪练系统使规程考核通过率提升30%，智能诊断系统缩短故障定位时间50%，故障处置方案匹配准确率达80%。'
          ],
        },
        {
          name: '跨平台AI模型部署',
          content: [
            '构建跨平台AI部署优化体系，实现算法在自建AI服务器，公有云服务器，客户私有云服务器，公司自研智能终端部署场景的动态适配，选择合适的推理方式，以达到识别精度、推理速度或部署成本的要求。',
            '构建轻量化技术栈，通过剪枝+蒸馏+量化三阶段优化，保持98%原模型精度下，实现模型体积压缩70%、推理速度提升4倍。',
            '主导推理引擎性能基准测试，完成pytorch/onnx/tensorrt/torchscript 4大框架的量化对比。使用python和c++分别推理。通过实验形成了一套技术选型的规则，针对不同部署环境做出最合适的选择，合理利用计算资源。',
            '设计智能终端OTA升级系统，支持按设备型号/区域/场景进行发布，实现程序和模型的更新。'
          ],
          achievements: [
            '实现工业级AI模型多态部署能力，支持X86/ARM/GPU计算架构，覆盖多种部署环境，实现高效推理，资源利用率提升50%。',
            '搭建业内首个智能终端远程运维平台，实现98%设备升级成功率，累计完成3万+次安全更新。'
          ],
        }        
      ],
    },
    {
      id: 'work-3',
      title: 'c++开发工程师',
      company: '上海同豪土木工程咨询有限公司',
      period: '2017.7 - 2020.6',
      summary: '参与《公路工程BIM系统-涵洞子系统》项目的开发，积累了丰富的开发经验。',
      content: [
        '深度参与《公路工程BIM系统-涵洞子系统》全流程开发，完成需求分析、项目模块设计及核心模块编码、产品功能开发测试。',
        '采用敏捷迭代策略推进产品演进，通过需求拆解与方案论证，不断迭代升级，满足客户需求。',
        '攻克智能设计算法与三维可视化技术难点，基于参数化建模技术构建涵洞构件库，采用OpenGL实现轻量化三维模型展示。'
      ],
      achievements: [
        '作为核心研发成员参与打造的BIM系统已实现商业化落地，累计服务多家设计院所。',
        '自主研发的智能涵洞设计算法，支持多种标准涵洞类型自动生成，设计自动化率达85%，并获得用户认可。'
      ],
      projects: [],
    },
  ]

  // 学习经历数据
  const educations: Education[] = [
    {
      title: '工学硕士',
      company: '中国地震局工程力学研究所',
      major: '岩土工程',
      period: '2014 - 2017',
    },
    {
      title: '工学学士',
      company: '华中科技大学',
      major: '道路桥梁与渡河工程',
      period: '2010 - 2014',
    },
    {
      title: '高中',
      company: '湖北荆门龙泉中学',
      period: '2007 - 2010',
    },
  ]

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: '上海市中级职称',
      year: '2022',
      description: '取得上海市中级专业技术职称证书，人工智能技术于应用方向',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: '软考-高级',
      year: '2018',
      description: '取得软考-高级证书，系统分析师方向',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: '软考-中级',
      year: '2017',
      description: '取得软考-中级证书，网络工程师方向',
    },
  ]

  return (
    <div>
      {/* 工作经历详情弹窗 */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* 弹窗头部 */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedWork.title}</h2>
                <p className="text-primary-600 font-medium">{selectedWork.company} · {selectedWork.period}</p>
              </div>
              <button
                onClick={() => setSelectedWork(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* 弹窗内容 */}
            <div className="p-6 space-y-8">
              {/* 工作内容 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-primary-600" />
                  工作内容
                </h3>
                <ul className="space-y-2">
                  {selectedWork.content.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 工作业绩 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary-600" />
                  工作业绩
                </h3>
                <ul className="space-y-2">
                  {selectedWork.achievements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 项目经历 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-primary-600" />
                  项目经历
                </h3>
                <div className="space-y-6">
                  {selectedWork.projects.map((project, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-5">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {project.name}
                      </h4>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-500 mb-2">项目内容：</p>
                        <ul className="space-y-1">
                          {project.content.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <ChevronRight className="w-4 h-4 text-primary-500 mr-1 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-2">项目业绩：</p>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <span className="text-primary-500 mr-2">✓</span>
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 个人介绍 */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* 左侧内容 */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              {/* 名字设计 - 创意排版 */}
              <div className="mb-8">
                <div className="flex items-baseline gap-4 mb-3">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                    陈以伦
                  </h1>
                  <span className="text-2xl md:text-3xl text-gray-300 font-light italic">Chen Yilun</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
                  <span className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                    AI 全栈工程师
                  </span>
                  <div className="h-1 flex-1 max-w-24 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* 简介 */}
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  我是一名充满热情的AI全栈工程师，拥有超过7年的开发经验。
                  专注于深度学习与计算机视觉领域，致力于将AI技术转化为实际的产品价值。
                </p>
                <p>
                  从土木工程跨界到软件开发，培养了独特的问题解决思维和跨学科视野。
                  我相信技术创新是推动行业发展的关键动力。
                </p>
              </div>

              {/* 下载按钮 */}
              <div className="mt-10">
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

            {/* 右侧照片 */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* 照片容器 - 带边框 */}
                <div className="relative w-72 md:w-80 lg:w-96 aspect-[3/4] p-2 bg-gradient-to-br from-primary-400 via-blue-500 to-purple-500 rounded-2xl shadow-xl shadow-primary-500/20">
                  <img 
                    src={`${BASE_URL}photo.jpg`} 
                    alt="陈以伦"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* 装饰元素 */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-primary-400 rounded-xl -z-10"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-blue-400 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 个人优势 */}
      <section className="section-padding bg-gradient-to-b from-white to-blue-50/50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            个人优势
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden">
              <div className="p-8 md:p-10 space-y-5 text-gray-700 leading-relaxed">
                <p className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-2 w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-sm shadow-primary-400/50"></span>
                  <span>拥有超过7年的开发 + 算法工程师工作经验，专注于深度学习领域。精通Linux开发环境，熟练使用Python，C++等编程语言，成功驱动多个高复杂度项目达成业务目标。</span>
                </p>
                
                <p className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-2 w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-sm shadow-primary-400/50"></span>
                  <span>具备团队管理经验，带领团队完成新品智能终端的研发和迭代，并成功交付客户。目前累计交付客户600多套，占据上海市30%市场份额。</span>
                </p>
                
                <p className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-2 w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-sm shadow-primary-400/50"></span>
                  <span>在计算机视觉领域具备深厚的专业知识，独立设计并部署了多套算法系统（图像分类、目标检测、人员跟踪、人脸识别），在数据采集和模型训练方面均有丰富经验。</span>
                </p>
                
                <p className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-2 w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-sm shadow-primary-400/50"></span>
                  <span>精通PyTorch框架，利用优化技术如ONNX/TensorRT提升模型推理速度高达50%，保障算法在不同平台的高效运行。</span>
                </p>
                
                <p className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-2 w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-sm shadow-primary-400/50"></span>
                  <span>积极拓展公司业务，在AI与行业结合方面有丰富经验。成功实施AI在电力行业的创新应用，推动企业技术前沿地位。</span>
                </p>
                
                <p className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-2 w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-sm shadow-primary-400/50"></span>
                  <span>对新技术保持高度热情与持续学习态度，通过搭建本地LLM和知识库系统，实现AI能力与公司内部系统的深度集成，驱动业务流程智能化升级与效率优化，持续探索技术赋能企业运营的创新边界。</span>
                </p>
                
                <p className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-2 w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-sm shadow-primary-400/50"></span>
                  <span>持有上海市AI方向中级工程师资格认证，并通过软考中级与高级考试，在算法领域有着深厚专业素养和实践能力。</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            工作经历
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-12"></div>
          <div className="max-w-3xl mx-auto space-y-8">
            {workExperiences.map((exp) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-primary-200">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div
                  className="card cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                  onClick={() => setSelectedWork(exp)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-500 mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 mb-3">{exp.summary}</p>
                  <div className="flex items-center text-primary-600 text-sm font-medium">
                    <span>查看详情</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习经历 */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            学习经历
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-12"></div>
          <div className="max-w-3xl mx-auto space-y-6">
            {educations.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {edu.title}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        {edu.company}
                      </p>
                      {edu.major && (
                        <p className="text-gray-600 text-sm mt-1">
                          专业：{edu.major}
                        </p>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成就与荣誉 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            成就与荣誉
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="card text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {achievement.year}
                </p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

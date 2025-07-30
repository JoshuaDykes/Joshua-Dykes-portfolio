import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  FiMonitor, 
  FiInstagram, 
  FiPenTool, 
  FiShoppingBag, 
  FiImage, 
  FiEdit,
  FiCheck
} from 'react-icons/fi'

// Components
import SectionTitle from '../components/SectionTitle'

// Assets
import webDesign from '../assets/images/new/web-design.jpg'
import digitalFuture from '../assets/images/new/digital-future.jpg'
import webDevProcess from '../assets/images/new/web-dev-process.jpg'
import goldLogo from '../assets/images/new/gold-logo.png'

const services = [
  {
    id: 'web-development',
    icon: FiMonitor,
    title: 'Website Development',
    description: 'Custom WordPress themes, responsive designs, and full-stack web applications tailored to your organization\'s needs.',
    longDescription: 'We create beautiful, functional websites that work across all devices. Whether you need a simple informational site, a complex web application, or an e-commerce platform, we can deliver a solution that meets your specific requirements.',
    features: [
      'Custom WordPress development',
      'Responsive design for all devices',
      'E-commerce integration',
      'Content management systems',
      'Website maintenance and updates',
      'Performance optimization',
      'SEO-friendly structure'
    ],
    cta: 'Need a new website or want to upgrade your existing one?'
  },
  {
    id: 'social-media',
    icon: FiInstagram,
    title: 'Social Media Management',
    description: 'Strategic content planning, community engagement, and growth strategies for your social media presence.',
    longDescription: 'Effective social media management helps you connect with your audience and build a community around your organization. We provide comprehensive social media services to help you establish and grow your online presence.',
    features: [
      'Social media strategy development',
      'Content creation and scheduling',
      'Community management and engagement',
      'Analytics and performance reporting',
      'Paid social media advertising',
      'Profile setup and optimization',
      'Cross-platform consistency'
    ],
    cta: 'Ready to boost your social media presence?'
  },
  {
    id: 'content-creation',
    icon: FiPenTool,
    title: 'Digital Content Creation',
    description: 'Engaging blog posts, articles, newsletters, and digital marketing materials that connect with your audience.',
    longDescription: 'Great content is the foundation of any successful digital strategy. We create engaging, informative, and SEO-friendly content that resonates with your audience and helps you achieve your goals.',
    features: [
      'Blog posts and articles',
      'Email newsletters',
      'Website copy',
      'Social media content',
      'SEO optimization',
      'Content strategy development',
      'Tone and voice consistency'
    ],
    cta: 'Need compelling content for your digital channels?'
  },
  {
    id: 'graphic-design',
    icon: FiEdit,
    title: 'Graphic Design',
    description: 'Eye-catching logos, brochures, flyers, and marketing materials that strengthen your brand identity.',
    longDescription: 'Visual elements are crucial for establishing a strong brand identity. We create professional, eye-catching designs that communicate your message effectively and help you stand out from the competition.',
    features: [
      'Logo design and branding',
      'Print materials (brochures, flyers, etc.)',
      'Social media graphics',
      'Banner ads and digital marketing assets',
      'Presentation templates',
      'Infographics and data visualization',
      'Brand style guides'
    ],
    cta: 'Looking for professional graphic design services?'
  },
  {
    id: 'ecommerce',
    icon: FiShoppingBag,
    title: 'E-commerce & Payment Integration',
    description: 'Online stores, payment gateways, and digital product systems to help you sell online effectively.',
    longDescription: 'Selling products or services online requires a seamless, secure e-commerce solution. We can help you set up and optimize your online store, integrate payment gateways, and manage your digital inventory.',
    features: [
      'E-commerce website development',
      'Payment gateway integration',
      'Product catalog management',
      'Order processing systems',
      'Customer account management',
      'Secure checkout processes',
      'Mobile shopping optimization'
    ],
    cta: 'Want to start selling your products or services online?'
  },
  {
    id: 'photo-editing',
    icon: FiImage,
    title: 'Photo Editing & Optimization',
    description: 'Professional photo enhancement, background removal, and optimization for web and print materials.',
    longDescription: 'High-quality images are essential for creating a professional impression. We provide expert photo editing services to enhance your visual content and ensure it looks great across all platforms.',
    features: [
      'Photo retouching and enhancement',
      'Background removal and replacement',
      'Color correction and adjustment',
      'Image resizing and optimization',
      'Product photo editing',
      'Batch processing for multiple images',
      'Format conversion for web and print'
    ],
    cta: 'Need professional photo editing services?'
  }
]

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Accra Digital ltd - Digital Future</title>
        <meta name="description" content="Explore the comprehensive digital services offered by Accra Digital ltd including website development, social media management, content creation, graphic design, e-commerce solutions, and photo editing." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{ background: 'linear-gradient(135deg, #e8e7ff 0%, #d1cfff 100%)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-800">Our Services</h1>
            <p className="text-secondary-600 text-lg mb-8">
              Comprehensive digital solutions to establish and enhance your organization's online presence.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            subtitle="What We Offer"
            title="Digital Services"
            description="We provide a range of digital services to help organizations establish a strong online presence and connect with their audience effectively."
            center={true}
          />
          
          <div className="mt-16 space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                  <div className="bg-primary-50 w-20 h-20 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                    <service.icon size={40} />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-secondary-600 mb-6">
                    {service.longDescription}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <p className="font-medium mb-4">{service.cta}</p>
                    <Link 
                      to="/contact" 
                      state={{ service: service.title }}
                      className="btn-primary"
                    >
                      Request This Service
                    </Link>
                  </div>
                </div>
                
                <div className={`bg-secondary-100 rounded-lg p-8 h-full flex items-center justify-center overflow-hidden ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="text-center relative w-full">
                    {index === 0 && (
                      <div className="relative mb-6 overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105">
                        <img 
                          src={webDesign} 
                          alt="Web Development" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-60"></div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="relative mb-6 overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105">
                        <img 
                          src={digitalFuture} 
                          alt="Social Media Management" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-60"></div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="relative mb-6 overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105">
                        <img 
                          src={webDevProcess} 
                          alt="Content Creation" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-60"></div>
                      </div>
                    )}
                    {index > 2 && (
                      <service.icon size={100} className="text-primary-600 mx-auto mb-6" />
                    )}
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-secondary-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16" style={{ background: 'linear-gradient(90deg, #0a00ab 0%, #4841ff 100%)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need a Custom Solution?
            </h2>
            <p className="text-white max-w-2xl mx-auto mb-8 text-lg">
              We offer tailored digital solutions to meet your specific needs. Let's discuss how we can help your organization thrive online.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services 
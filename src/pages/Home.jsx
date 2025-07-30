import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiMonitor, FiInstagram, FiPenTool, FiShoppingBag, FiImage, FiEdit } from 'react-icons/fi'

// Components
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import AgencyImages from '../components/AgencyImages'

// Assets
import heroImage from '../assets/images/new/web-design.jpg'
import profileImage from '../assets/images/new/main-image.png'
import webDevProcess from '../assets/images/new/web-dev-process.jpg'
import digitalFuture from '../assets/images/new/digital-future.jpg'

const services = [
  {
    icon: FiMonitor,
    title: 'Website Development',
    description: 'Custom WordPress themes, responsive designs, and full-stack web applications tailored to your organization\'s needs.'
  },
  {
    icon: FiInstagram,
    title: 'Social Media Management',
    description: 'Strategic content planning, community engagement, and growth strategies for your social media presence.'
  },
  {
    icon: FiPenTool,
    title: 'Digital Content Creation',
    description: 'Engaging blog posts, articles, newsletters, and digital marketing materials that connect with your audience.'
  },
  {
    icon: FiEdit,
    title: 'Graphic Design',
    description: 'Eye-catching logos, brochures, flyers, and marketing materials that strengthen your brand identity.'
  },
  {
    icon: FiShoppingBag,
    title: 'E-commerce Solutions',
    description: 'Online stores, payment gateways, and digital product systems to help you sell online effectively.'
  },
  {
    icon: FiImage,
    title: 'Photo Editing',
    description: 'Professional photo enhancement, background removal, and optimization for web and print materials.'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Director',
    company: 'Community Church',
    quote: 'Joshua transformed our outdated website into a modern, user-friendly platform that has significantly increased our online engagement. His attention to detail and understanding of our needs was exceptional.',
    rating: 5
  },
  {
    name: 'Michael Thompson',
    role: 'Principal',
    company: 'Westside School',
    quote: 'Working with Joshua was a pleasure. He created a comprehensive digital strategy for our school that improved communication with parents and showcased our students\' achievements beautifully.',
    rating: 5
  },
  {
    name: 'Rebecca Williams',
    role: 'Owner',
    company: 'Sunshine Cafe',
    quote: 'Joshua\'s work on our branding and website design exceeded our expectations. Our online orders have increased by 45% since the launch of our new site!',
    rating: 5
  }
]

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Accra Digital ltd - Digital Future | Professional Digital Services</title>
        <meta name="description" content="We complete digital presence solutions including website development, social media management, and graphic design for organizations and businesses." />
      </Helmet>
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] md:min-h-[95vh] lg:min-h-screen flex items-center py-16 sm:py-20 md:py-24"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 0, 171, 0.85), rgba(26, 18, 255, 0.75)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 'calc(var(--vh, 1vh) * 90)',
          height: 'auto'
        }}
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left px-4 sm:px-0"
            >
              <span className="text-primary-400 font-medium mb-2 md:mb-4 block">
                Welcome to Digital Future
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 md:mb-6 leading-tight">
                Empowering Organizations with a Complete <span className="text-primary-400">Digital Presence</span>
              </h1>
              <p className="text-secondary-300 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Professional website development, social media management, and digital content creation services tailored for churches, schools, charities, and businesses.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start items-center sm:items-start">
                <Link to="/contact" className="btn-primary group relative overflow-hidden">
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
                <Link to="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 group relative overflow-hidden">
                  <span className="relative z-10">View Our Work</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [-10, 10, -10],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }
                }
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block relative z-20 mt-6"
            >
              <img 
                src={profileImage} 
                alt="Accra Digital ltd" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl relative z-20"
                style={{ filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.2))" }}
              />
            </motion.div>
            
            {/* Mobile Image (Only visible on small screens) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="block md:hidden mt-10 relative z-20"
            >
              <img 
                src={profileImage} 
                alt="Accra Digital ltd" 
                className="w-full max-w-[250px] mx-auto rounded-lg shadow-xl relative z-20"
                style={{ filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.2))" }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center cursor-pointer hover:scale-110"
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 animate-bounce" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-white py-12 md:py-16 lg:py-24">
        <div className="container-custom">
          <SectionTitle 
            subtitle="What We Offer"
            title="Digital Services"
            description="Comprehensive digital solutions to establish and enhance your organization's online presence."
            center={true}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Link to="/services" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10">View All Services</span>
              <span className="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-secondary-50 py-12 md:py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <SectionTitle 
                                  subtitle="About Us"
                                                    title="Accra Digital ltd"
                description="We're digital professionals passionate about helping organizations establish a meaningful online presence."
              />
              
              <p className="text-secondary-600 mb-6">
                With years of experience in web development, design, and digital marketing, we provide tailored solutions that meet the unique needs of churches, schools, charities, and businesses. Our mission is to empower your organization with the digital tools needed to connect with your audience effectively.
              </p>
              
              <div className="flex justify-center md:justify-start">
                <Link to="/about" className="btn-primary group relative overflow-hidden">
                  <span className="relative z-10">Learn More About Me</span>
                  <span className="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <img 
                src={webDevProcess} 
                alt="Web Development Process" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Agency Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Workspace"
            title="Where Designs Come to Life"
            description="Our creative agency environment fosters collaboration and innovation."
            center={true}
          />
          
          <div className="mt-12">
            <AgencyImages />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-white py-12 md:py-16 lg:py-24">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Client Feedback"
            title="What People Say"
            description="Don't just take our word for it. Here's what clients have to say about working with us."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                quote={testimonial.quote}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        className="py-12 md:py-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 0, 171, 0.95), rgba(26, 18, 255, 0.9))`,
          backgroundSize: 'cover'
        }}
      >
        <div className="container-custom text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-white max-w-2xl mx-auto mb-6 md:mb-8 text-base md:text-lg">
              Let's work together to create a compelling digital strategy that helps your organization thrive online.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 group relative overflow-hidden">
              <span className="relative z-10">Get Started Today</span>
              <span className="absolute inset-0 bg-primary-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home 
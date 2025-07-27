import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

// Components
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'

// Assets
import project1Image from '../assets/images/project1.jpg'
import project2Image from '../assets/images/project2.png'
import project3Image from '../assets/images/project3.png'

const projects = [
  {
    id: 1,
    title: 'Community Church Website',
    category: 'Web Development',
    image: project1Image,
    description: 'A modern, responsive website for a local community church with event management, sermon archives, and online donations.',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Dykes Digital Branding',
    category: 'Graphic Design',
    image: project2Image,
    description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Strategy'],
    link: '#'
  },
  {
    id: 3,
    title: 'Sports Team Merchandise',
    category: 'E-commerce',
    image: project3Image,
    description: 'E-commerce solution for a local sports team to sell branded merchandise online with secure payment processing.',
    technologies: ['WooCommerce', 'WordPress', 'Payment Gateway', 'Inventory Management'],
    link: '#'
  },
  {
    id: 4,
    title: 'Educational Institution Portal',
    category: 'Web Development',
    image: project1Image,
    description: 'A comprehensive web portal for a school with student management, course registration, and parent communication features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Authentication'],
    link: '#'
  },
  {
    id: 5,
    title: 'Charity Organization Campaign',
    category: 'Social Media',
    image: project2Image,
    description: 'Strategic social media campaign for a charity organization that increased donations by 35% and followers by 50%.',
    technologies: ['Content Strategy', 'Campaign Management', 'Analytics', 'Graphic Design'],
    link: '#'
  },
  {
    id: 6,
    title: 'Local Business Website',
    category: 'Web Development',
    image: project3Image,
    description: 'A professional website for a local business with service booking, testimonials, and contact management.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    link: '#'
  }
]

const categories = [
  'All',
  'Web Development',
  'Graphic Design',
  'Social Media',
  'E-commerce',
  'Content Creation'
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    
    if (category === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === category))
    }
  }
  
  return (
    <>
      <Helmet>
        <title>Portfolio | Joshua Dykes - Digital Future</title>
        <meta name="description" content="Explore Joshua Dykes' portfolio of digital projects including websites, graphic design, social media campaigns, and more." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{ background: 'linear-gradient(45deg, #e8e7ff 0%, #d1cfff 100%)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-800">Our Portfolio</h1>
            <p className="text-secondary-600 text-lg mb-8">
              A showcase of our digital projects, designs, and client work.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Work"
            title="Recent Projects"
            description="Browse through a selection of our recent digital projects across various categories."
            center={true}
          />
          
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-12 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                  index={index}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-secondary-600 text-lg">
                  No projects found in this category. Please check back later.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16" style={{ background: 'linear-gradient(270deg, #0a00ab 0%, #4841ff 100%)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-white max-w-2xl mx-auto mb-8 text-lg">
              Let's work together to create a digital solution that helps your organization thrive online.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Portfolio 
import { motion } from 'framer-motion'
import { useState } from 'react'

const ProjectCard = ({ image, title, category, description, technologies, link, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        borderColor: "#0a00ab",
        y: -8
      }}
      whileTap={{ scale: 0.98 }}
      className="card overflow-hidden h-full transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent flex items-end">
          <div className="p-6">
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">
              {category}
            </span>
            <h3 className="text-white text-xl font-bold mt-1">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-secondary-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span 
                key={i} 
                className="bg-secondary-100 text-secondary-700 text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-sm inline-flex"
          >
            View Project
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard 
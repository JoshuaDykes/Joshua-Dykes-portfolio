import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        backgroundColor: "rgba(10, 0, 171, 0.03)",
        y: -5
      }}
      whileTap={{ scale: 0.98 }}
      className="card p-5 md:p-6 flex flex-col h-full transition-all duration-300 group"
    >
      <div className="bg-primary-50 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 text-primary-600 transition-all duration-300 group-hover:bg-primary-100 group-hover:text-primary-700">
        <Icon size={28} className="md:text-3xl" />
      </div>
      
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{title}</h3>
      
      <p className="text-secondary-600 mb-4 md:mb-6 flex-grow text-sm md:text-base">{description}</p>
      
      <Link 
        to="/contact" 
        className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center text-sm md:text-base mt-auto"
        state={{ service: title }}
      >
        <span className="mr-1">Request Service</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 md:h-5 md:w-5 ml-1" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
      </Link>
    </motion.div>
  )
}

export default ServiceCard 
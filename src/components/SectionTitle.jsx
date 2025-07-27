import { motion } from 'framer-motion'

const SectionTitle = ({ subtitle, title, description, center = false }) => {
  return (
    <div className={`mb-8 md:mb-12 ${center ? 'text-center' : ''}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block text-primary-600 font-medium mb-1 md:mb-2 text-sm md:text-base"
      >
        {subtitle}
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-secondary-600 max-w-3xl text-sm md:text-base mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle 
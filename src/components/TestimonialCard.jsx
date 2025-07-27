import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const TestimonialCard = ({ name, role, company, image, quote, rating, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        backgroundColor: "rgba(10, 0, 171, 0.02)",
        y: -5
      }}
      whileTap={{ scale: 0.98 }}
      className="card p-5 md:p-6 transition-all duration-300 h-full"
    >
      <div className="flex mb-3 md:mb-4">
        {Array(rating).fill().map((_, i) => (
          <FiStar key={i} className="text-yellow-400 fill-current h-4 w-4 md:h-5 md:w-5" />
        ))}
      </div>
      
      <div className="relative">
        <div className="absolute -top-2 -left-2 text-primary-200 opacity-20 transform rotate-180">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="md:w-[40px] md:h-[40px]"
          >
            <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
          </svg>
        </div>
        <blockquote className="text-secondary-700 mb-4 md:mb-6 pl-5 md:pl-6 pt-3 md:pt-4 text-sm md:text-base">
          {quote}
        </blockquote>
      </div>
      
      <div className="flex items-center">
        {image && (
          <img 
            src={image} 
            alt={name} 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
          />
        )}
        <div>
          <h4 className="font-bold text-sm md:text-base">{name}</h4>
          <p className="text-secondary-600 text-xs md:text-sm">
            {role}{company && `, ${company}`}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard 
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-secondary-900 z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-4xl font-bold"
        >
          <span className="text-primary-500">Ark</span>
          <span className="text-white">Digital</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="flex space-x-2">
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1,
                delay: 0
              }}
              className="w-3 h-3 rounded-full bg-primary-500"
            />
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1,
                delay: 0.2
              }}
              className="w-3 h-3 rounded-full bg-primary-500"
            />
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1,
                delay: 0.4
              }}
              className="w-3 h-3 rounded-full bg-primary-500"
            />
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-secondary-300"
        >
          Digital Future Loading...
        </motion.p>
      </div>
    </div>
  )
}

export default Loader 
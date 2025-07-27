import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Joshua Dykes - Digital Future</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      
      <section className="py-20 min-h-[70vh] flex items-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-secondary-600 max-w-md mx-auto mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NotFound 
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Import agency images
import agencyImage1 from '../assets/images/new/agency1.jpg'
import agencyImage2 from '../assets/images/new/agency2.jpg'
import agencyImage3 from '../assets/images/new/agency3.jpg'

const AgencyImages = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: agencyImage1, alt: 'Design Agency Office' },
    { src: agencyImage2, alt: 'Design Team Working' },
    { src: agencyImage3, alt: 'Agency Workspace' },
  ]

  const handleImageClick = (index) => {
    setSelectedImage(index)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setSelectedImage(null)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => handleImageClick(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-secondary-900 hover:bg-primary-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default AgencyImages 
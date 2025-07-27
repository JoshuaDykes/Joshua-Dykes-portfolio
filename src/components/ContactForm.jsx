import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

// Services offered
const services = [
  "Website Development",
  "Social Media Management",
  "Digital Content Creation",
  "Graphic Design",
  "E-commerce & Payment Integration",
  "Photo Editing & Optimization"
]

const ContactForm = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [],
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  })

  // Pre-select service if coming from service page
  useEffect(() => {
    if (location.state?.service) {
      setFormData(prev => ({
        ...prev,
        services: [location.state.service]
      }))
    }
  }, [location])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const currentServices = [...prev.services]
      
      if (currentServices.includes(service)) {
        return {
          ...prev,
          services: currentServices.filter(s => s !== service)
        }
      } else {
        return {
          ...prev,
          services: [...currentServices, service]
        }
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setFormStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: ''
    })
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '86948fa2-dc4a-4047-bf87-2a710bb7293b',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: formData.services.join(', '),
          message: formData.message,
          subject: `New inquiry from ${formData.name}`,
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        setFormStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been received.'
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          services: [],
          message: ''
        })
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: error.message || 'Something went wrong. Please try again.'
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {formStatus.submitted && (
        <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          <div className="flex items-center">
            {formStatus.success ? (
              <FiCheckCircle className="mr-2 text-green-500" size={20} />
            ) : (
              <FiAlertCircle className="mr-2 text-red-500" size={20} />
            )}
            <p>{formStatus.message}</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Your phone number"
          />
        </div>
        
        <div>
          <span className="block text-sm font-medium text-secondary-700 mb-2">
            Services Required <span className="text-red-500">*</span>
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`service-${index}`}
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                  className="h-4 w-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor={`service-${index}`} className="ml-2 block text-sm text-secondary-700">
                  {service}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Tell us about your project or requirements..."
          />
        </div>
        
        <div>
          <button
            type="submit"
            disabled={formStatus.submitting}
            className="btn-primary w-full"
          >
            {formStatus.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default ContactForm 
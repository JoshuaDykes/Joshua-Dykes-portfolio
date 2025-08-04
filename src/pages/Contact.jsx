import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

// Components
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Ark Digital ltd - Digital Future</title>
        <meta name="description" content="Get in touch with Ark Digital ltd for professional digital services including website development, social media management, and graphic design." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{ background: 'linear-gradient(to right, #e8e7ff, #d1cfff)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-800">Get In Touch</h1>
            <p className="text-secondary-600 text-lg mb-8">
              Have a project in mind or questions about our services? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle 
                subtitle="Contact Information"
                title="Let's Connect"
                description="Feel free to reach out through any of these channels. We'll get back to you as soon as possible."
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4 transform transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary-100">
                    <FiMail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:joshuadykeskenya@gmail.com" className="text-secondary-600 hover:text-primary-600 transition-colors">
                      joshuadykeskenya@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4 transform transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary-100">
                    <FiPhone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a href="tel:+254794758381" className="text-secondary-600 hover:text-primary-600 transition-colors">
                      +254 794 758 381
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4 transform transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary-100">
                    <FiMapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-secondary-600">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary-100 hover:bg-primary-100 text-secondary-600 hover:text-primary-600 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    <FiFacebook size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary-100 hover:bg-primary-100 text-secondary-600 hover:text-primary-600 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    <FiTwitter size={20} />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary-100 hover:bg-primary-100 text-secondary-600 hover:text-primary-600 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    <FiInstagram size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary-100 hover:bg-primary-100 text-secondary-600 hover:text-primary-600 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16" style={{ background: 'linear-gradient(to left, #d1cfff, #e8e7ff)' }}>
        <div className="container-custom">
                      <SectionTitle 
              subtitle="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to common questions about our services and process."
              center={true}
              className="text-secondary-800"
            />
          
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-6 rounded-lg shadow-sm hover:bg-primary-50 border border-transparent hover:border-primary-100 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">What is your typical process for working with a new client?</h3>
              <p className="text-secondary-600">
                We start with an initial consultation to understand your needs and goals. Then we'll provide a proposal outlining the scope, timeline, and cost. Once approved, we'll begin the development process with regular updates and opportunities for feedback.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-6 rounded-lg shadow-sm hover:bg-primary-50 border border-transparent hover:border-primary-100 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">How long does it typically take to complete a website?</h3>
              <p className="text-secondary-600">
                The timeline varies depending on the complexity of the project. A simple website might take 2-4 weeks, while more complex projects could take 2-3 months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-6 rounded-lg shadow-sm hover:bg-primary-50 border border-transparent hover:border-primary-100 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">Do you offer ongoing maintenance and support?</h3>
              <p className="text-secondary-600">
                Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally. These can include regular updates, security monitoring, content updates, and technical support.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-6 rounded-lg shadow-sm hover:bg-primary-50 border border-transparent hover:border-primary-100 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">What are your payment terms?</h3>
              <p className="text-secondary-600">
                We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange a payment schedule with milestones. We accept payments via bank transfer, credit card, or PayPal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact 
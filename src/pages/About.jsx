import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiBriefcase, FiAward, FiBook } from 'react-icons/fi'

// Components
import SectionTitle from '../components/SectionTitle'
import TestimonialCard from '../components/TestimonialCard'
import AgencyImages from '../components/AgencyImages'

// Assets
import profileImage from '../assets/images/new/profile-photo.jpg'
import digitalFuture from '../assets/images/new/digital-future.jpg'
import webDesign from '../assets/images/new/web-design.jpg'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Director',
    company: 'Community Church',
    quote: 'Joshua transformed our outdated website into a modern, user-friendly platform that has significantly increased our online engagement. His attention to detail and understanding of our needs was exceptional.',
    rating: 5
  },
  {
    name: 'Michael Thompson',
    role: 'Principal',
    company: 'Westside School',
    quote: 'Working with Joshua was a pleasure. He created a comprehensive digital strategy for our school that improved communication with parents and showcased our students\' achievements beautifully.',
    rating: 5
  },
  {
    name: 'Rebecca Williams',
    role: 'Owner',
    company: 'Sunshine Cafe',
    quote: 'Joshua\'s work on our branding and website design exceeded our expectations. Our online orders have increased by 45% since the launch of our new site!',
    rating: 5
  }
]

const timeline = [
  {
    year: '2022 - Present',
    title: 'Digital Presence Consultant',
    description: 'Providing comprehensive digital solutions for organizations including web development, social media management, and content creation.'
  },
  {
    year: '2019 - 2022',
    title: 'Senior Web Developer',
    company: 'Digital Solutions Inc.',
    description: 'Led development of websites and web applications for clients across various industries, focusing on responsive design and user experience.'
  },
  {
    year: '2017 - 2019',
    title: 'Social Media Specialist',
    company: 'Creative Marketing Agency',
    description: 'Managed social media accounts for multiple clients, developing strategies to increase engagement and following.'
  },
  {
    year: '2015 - 2017',
    title: 'Junior Web Developer',
    company: 'Tech Innovations',
    description: 'Assisted in the development of websites and web applications, focusing on front-end development and responsive design.'
  },
  {
    year: '2015',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in web development and digital media.'
  }
]

const skills = [
  { name: 'Web Development', percentage: 95 },
  { name: 'Graphic Design', percentage: 85 },
  { name: 'Social Media Management', percentage: 90 },
  { name: 'Content Creation', percentage: 88 },
  { name: 'SEO & Digital Marketing', percentage: 82 },
  { name: 'E-commerce Solutions', percentage: 87 }
]

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Joshua Dykes | Digital Future</title>
        <meta name="description" content="Learn about Joshua Dykes, a digital professional offering complete digital presence solutions for organizations including web development, social media management, and content creation." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16" style={{ background: 'linear-gradient(135deg, #e8e7ff 0%, #d1cfff 100%)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-800">About Us</h1>
            <p className="text-secondary-600 text-lg mb-8">
              We're passionate about helping organizations establish a meaningful digital presence that connects with their audience and achieves their goals.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Profile Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={profileImage} 
                alt="Joshua Dykes" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 hover:border-2 hover:border-primary-300 cursor-pointer transform hover:rotate-1 hover:brightness-110"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle 
                subtitle="Who We Are"
                title="Joshua Dykes"
                description="A digital professional with a passion for creating impactful online experiences."
              />
              
              <p className="text-secondary-600 mb-6">
                With over 7 years of experience in web development, design, and digital marketing, we specialize in creating comprehensive digital solutions for organizations of all sizes. Our focus is on delivering high-quality, user-friendly websites and digital strategies that help our clients connect with their audience effectively.
              </p>
              
              <p className="text-secondary-600 mb-6">
                We believe that every organization, regardless of size or budget, deserves a strong digital presence. That's why we work closely with each client to understand their unique needs and develop tailored solutions that align with their goals and values.
              </p>
              
              <div className="flex flex-wrap gap-6 mt-8">
                <div>
                  <span className="block text-4xl font-bold text-primary-600">7+</span>
                  <span className="text-secondary-600">Years Experience</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-primary-600">100+</span>
                  <span className="text-secondary-600">Projects Completed</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-primary-600">50+</span>
                  <span className="text-secondary-600">Happy Clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Agency Images Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Agency"
            title="Where Creativity Happens"
            description="Take a peek inside our design agency where digital innovations come to life."
            center={true}
          />
          
          <div className="mt-12">
            <AgencyImages />
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Expertise"
            title="Skills & Proficiency"
            description="We've developed a diverse skill set to provide comprehensive digital solutions."
            center={true}
          />
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Journey"
            title="Experience & Education"
            description="A look at our professional background and qualifications."
            center={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-3.5 top-0 h-full w-px bg-primary-200"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-primary-100 border-2 border-primary-500 flex items-center justify-center">
                  {item.title.includes('Developer') ? (
                    <FiBriefcase className="text-primary-600" size={14} />
                  ) : item.title.includes('Education') || item.title.includes('Bachelor') ? (
                    <FiBook className="text-primary-600" size={14} />
                  ) : (
                    <FiAward className="text-primary-600" size={14} />
                  )}
                </div>
                
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  {item.company && (
                    <p className="text-primary-600 font-medium">{item.company}</p>
                  )}
                  <p className="text-secondary-600 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Client Feedback"
            title="What People Say"
            description="Don't just take our word for it. Here's what clients have to say about working with us."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                quote={testimonial.quote}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About 
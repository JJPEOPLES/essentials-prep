import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  Package, 
  Users, 
  Clock, 
  Award, 
  TrendingUp, 
  Globe,
  Zap,
  Shield
} from 'lucide-react';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Package size={40} />,
      number: 50000,
      suffix: '+',
      label: 'Packages Processed',
      description: 'Monthly volume',
      color: '#2196f3'
    },
    {
      icon: <Users size={40} />,
      number: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Worldwide',
      color: '#4caf50'
    },
    {
      icon: <Clock size={40} />,
      number: 99.9,
      suffix: '%',
      label: 'On-Time Delivery',
      description: 'Success rate',
      color: '#ff9800'
    },
    {
      icon: <Award size={40} />,
      number: 5,
      suffix: '',
      label: 'Years Experience',
      description: 'Industry expertise',
      color: '#9c27b0'
    },
    {
      icon: <TrendingUp size={40} />,
      number: 150,
      suffix: '%',
      label: 'Growth Rate',
      description: 'Year over year',
      color: '#f44336'
    },
    {
      icon: <Globe size={40} />,
      number: 25,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global reach',
      color: '#00bcd4'
    },
    {
      icon: <Zap size={40} />,
      number: 24,
      suffix: '/7',
      label: 'Support Available',
      description: 'Always here',
      color: '#ffeb3b'
    },
    {
      icon: <Shield size={40} />,
      number: 100,
      suffix: '%',
      label: 'Secure Operations',
      description: 'Guaranteed safety',
      color: '#795548'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>🚀 Our Amazing Numbers 🚀</h2>
          <p>See why thousands of businesses trust us with their logistics!</p>
        </motion.div>
        
        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    delay={index * 0.2}
                    decimals={stat.number % 1 !== 0 ? 1 : 0}
                  />
                )}
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
              <div className="stat-glow" style={{ backgroundColor: stat.color }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
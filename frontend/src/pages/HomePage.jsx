import React, { useState } from 'react';
import { ArrowRight, Check, Mail, Phone, MapPin, Activity, Wind, Zap, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import {
  heroData,
  trustLogos,
  whyBreaksData,
  whatIsResetRitualData,
  howItWorksData,
  programsData,
  integrationData,
  audienceData,
  testimonialsData,
  ctaData,
  contactFormFields
} from '../mockData';

const iconMap = {
  activity: Activity,
  wind: Wind,
  zap: Zap,
  heart: Heart
};

const HomePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, employees: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Request Received!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        employees: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-text">Reset Ritual</span>
          </div>
          <div className="nav-links-desktop">
            <a href="#what" className="nav-link">What We Do</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
          </div>
          <div className="nav-actions">
            <Button onClick={scrollToContact} className="btn-primary">Get a Demo</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{heroData.headline}</h1>
          <p className="hero-subtitle">{heroData.subheading}</p>
          <div className="hero-stat">{heroData.stat}</div>
          <div className="hero-cta-group">
            <Button onClick={scrollToContact} className="btn-primary btn-large">
              Get a Demo <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="btn-secondary btn-large">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="trust-section">
        <div className="container">
          <p className="trust-title">Trusted by Leading Organizations</p>
          <div className="logos-grid">
            {trustLogos.map((logo, index) => (
              <div key={index} className="logo-card">
                <div className="logo-placeholder">{logo.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Breaks */}
      <section className="section-container section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{whyBreaksData.title}</h2>
            <p className="body-large section-subtitle">{whyBreaksData.subtitle}</p>
          </div>
          <div className="benefits-grid">
            {whyBreaksData.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-stat">{benefit.stat}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Reset Ritual */}
      <section className="section-container" id="what">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{whatIsResetRitualData.title}</h2>
            <p className="body-large section-subtitle">{whatIsResetRitualData.description}</p>
          </div>
          <div className="features-box">
            <ul className="features-list">
              {whatIsResetRitualData.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <Check size={24} className="check-icon" />
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-container section-light" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{howItWorksData.title}</h2>
          </div>
          <div className="steps-container">
            {howItWorksData.steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-header">
                  <div className="step-number">{step.number}</div>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="step-highlight">
            {howItWorksData.highlight}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-container" id="programs">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{programsData.title}</h2>
            <p className="body-large section-subtitle">{programsData.subtitle}</p>
          </div>
          <div className="programs-wrapper">
            {/* Daily Rituals */}
            <div className="program-box">
              <p className="program-subtitle">{programsData.daily.subtitle}</p>
              <h3 className="program-title">{programsData.daily.title}</h3>
              <p className="program-description">{programsData.daily.description}</p>
              <div className="program-categories">
                {programsData.daily.categories.map((category, index) => {
                  const IconComponent = iconMap[category.icon];
                  return (
                    <div key={index} className="category-item">
                      {IconComponent && <IconComponent size={20} className="category-icon" />}
                      <span>{category.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quarterly Workshops */}
            <div className="program-box">
              <p className="program-subtitle">{programsData.quarterly.subtitle}</p>
              <h3 className="program-title">{programsData.quarterly.title}</h3>
              <p className="program-description">{programsData.quarterly.description}</p>
              <ul className="program-options">
                {programsData.quarterly.options.map((option, index) => (
                  <li key={index} className="option-item">
                    <Check size={20} className="check-icon" />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Integration */}
      <section className="section-container section-accent">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{integrationData.title}</h2>
            <p className="body-large">{integrationData.description}</p>
          </div>
          <div className="integration-showcase">
            <div className="integration-image-wrapper">
              <img 
                src={integrationData.image} 
                alt="Calendar integration interface" 
                className="integration-image"
              />
            </div>
            <div className="integration-details">
              <h3 className="heading-3">Automatically Syncs With:</h3>
              <div className="platforms-list">
                {integrationData.platforms.map((platform, index) => (
                  <div key={index} className="platform-badge">
                    <Check size={20} className="check-icon" />
                    {platform.name}
                  </div>
                ))}
              </div>
              <div className="integration-features">
                <div className="integration-feature">
                  <Check size={20} className="check-icon" />
                  <span>Zero manual scheduling required</span>
                </div>
                <div className="integration-feature">
                  <Check size={20} className="check-icon" />
                  <span>Smart scheduling around existing meetings</span>
                </div>
                <div className="integration-feature">
                  <Check size={20} className="check-icon" />
                  <span>One-click join from calendar invite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-container">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{audienceData.title}</h2>
          </div>
          <div className="audience-grid">
            {audienceData.audiences.map((audience, index) => (
              <div key={index} className="audience-card">
                <h3 className="audience-title">{audience.title}</h3>
                <p className="audience-description">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container section-light" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">What Our Customers Are Saying</h2>
          </div>
          <div className="testimonials-container">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="author-info">
                      <p className="author-name">{testimonial.author}</p>
                      <p className="author-role">{testimonial.role}</p>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container section-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2">{ctaData.title}</h2>
            <p className="body-large">{ctaData.subtitle}</p>
            <div className="cta-buttons">
              <Button onClick={scrollToContact} className="btn-primary btn-large">
                {ctaData.primaryCta} <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-container section-light" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 className="heading-2">Get in Touch</h2>
              <p className="body-large">Ready to see Reset Ritual in action? Fill out the form and we'll be in touch within 24 hours.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail className="contact-icon" size={20} />
                  <span className="body-medium">hello@resetritual.com</span>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" size={20} />
                  <span className="body-medium">+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" size={20} />
                  <span className="body-medium">San Francisco, CA</span>
                </div>
              </div>
            </div>
            <Card className="contact-form-card">
              <CardContent className="contact-form-content">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Work Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company Name *</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="employees" className="form-label">Number of Employees *</label>
                    <Select onValueChange={handleSelectChange} value={formData.employees}>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50-100">50-100</SelectItem>
                        <SelectItem value="100-500">100-500</SelectItem>
                        <SelectItem value="500-1000">500-1000</SelectItem>
                        <SelectItem value="1000+">1000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Tell us about your wellness goals</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="form-input"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="btn-primary btn-full btn-large">
                    {isSubmitting ? 'Sending...' : 'Request Demo'} <ArrowRight size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-title">Reset Ritual</h3>
              <p className="footer-text">12-minute rest rituals for holistic workplace wellness.</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><a href="#what" className="footer-link">What We Do</a></li>
                <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
                <li><a href="#programs" className="footer-link">Programs</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#testimonials" className="footer-link">Testimonials</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Reset Ritual. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

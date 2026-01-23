import React, { useState } from 'react';
import { 
  Monitor, CalendarX, Users, TrendingDown, ClipboardList, 
  CalendarCheck, BarChart3, Video, Library, Building, 
  Calendar, Award, LineChart, Briefcase, Home, Building2,
  Mail, Phone, MapPin, ArrowRight, Check, Star, Play
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import {
  heroData,
  problemsData,
  howItWorksData,
  featuresData,
  programsData,
  impactData,
  audienceData,
  socialProofData,
  ctaData,
  contactFormFields
} from '../mockData';

const iconMap = {
  monitor: Monitor,
  'calendar-x': CalendarX,
  users: Users,
  'trending-down': TrendingDown,
  'clipboard-list': ClipboardList,
  'calendar-check': CalendarCheck,
  'bar-chart-3': BarChart3,
  video: Video,
  library: Library,
  building: Building,
  calendar: Calendar,
  award: Award,
  'line-chart': LineChart,
  briefcase: Briefcase,
  home: Home,
  'building-2': Building2
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
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#impact" className="nav-link">Impact</a>
            <a href="#clients" className="nav-link">Clients</a>
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
          <div className="hero-cta-group">
            <Button onClick={scrollToContact} className="btn-primary btn-large">
              Get a Demo <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" className="btn-secondary btn-large">
              Talk to HR
            </Button>
          </div>
        </div>
      </section>

      {/* Why Reset Ritual */}
      <section className="section-container" id="why">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{problemsData.title}</h2>
            <p className="body-large section-subtitle">{problemsData.subtitle}</p>
          </div>
          <div className="problems-grid">
            {problemsData.challenges.map((challenge, index) => {
              const IconComponent = iconMap[challenge.icon];
              return (
                <Card key={index} className="problem-card">
                  <CardHeader>
                    <div className="icon-wrapper">
                      {IconComponent && <IconComponent size={32} className="icon-accent" />}
                    </div>
                    <CardTitle className="heading-3">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-medium">{challenge.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="stat-callout">
            <Star className="stat-icon" size={24} />
            <p className="body-large stat-text">{problemsData.stat}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-container section-alt" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{howItWorksData.title}</h2>
            <p className="body-large section-subtitle">{howItWorksData.subtitle}</p>
          </div>
          <div className="steps-container">
            {howItWorksData.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <div key={index} className="step-card">
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon-wrapper">
                    {IconComponent && <IconComponent size={40} className="step-icon" />}
                  </div>
                  <h3 className="heading-3 step-title">{step.title}</h3>
                  <p className="body-medium step-description">{step.description}</p>
                </div>
              );
            })}
          </div>
          <div className="cta-center">
            <Button onClick={scrollToContact} className="btn-primary btn-large">
              Get a Demo <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-container" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{featuresData.title}</h2>
            <p className="body-large section-subtitle">{featuresData.subtitle}</p>
          </div>
          <div className="features-grid">
            {featuresData.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card key={index} className="feature-card">
                  <CardHeader>
                    <div className="feature-header-row">
                      <div className="icon-wrapper-large">
                        {IconComponent && <IconComponent size={28} className="icon-accent" />}
                      </div>
                      {feature.badge && (
                        <Badge className="feature-badge">{feature.badge}</Badge>
                      )}
                    </div>
                    <CardTitle className="heading-3">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-medium">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-container section-alt" id="programs">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{programsData.title}</h2>
            <p className="body-large section-subtitle">{programsData.subtitle}</p>
          </div>
          <div className="programs-grid">
            {programsData.programs.map((program, index) => (
              <Card key={index} className="program-card">
                <div className="program-image-wrapper">
                  <img src={program.image} alt={program.title} className="program-image" />
                </div>
                <CardHeader>
                  <div className="program-badge">{program.subtitle}</div>
                  <CardTitle className="heading-2 program-title">{program.title}</CardTitle>
                  <CardDescription className="body-medium">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="program-features-list">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="program-feature-item">
                        <Check size={20} className="check-icon" />
                        <span className="body-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="btn-primary btn-full">
                    {program.cta} <ArrowRight className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Benefits */}
      <section className="section-container" id="impact">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{impactData.title}</h2>
            <p className="body-large section-subtitle">{impactData.subtitle}</p>
          </div>
          
          {/* Stats */}
          <div className="stats-grid">
            {impactData.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="benefits-grid">
            {impactData.benefits.map((benefit, index) => (
              <Card key={index} className="benefit-card">
                <CardHeader>
                  <CardTitle className="heading-3">{benefit.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="benefit-list">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="benefit-item">
                        <Check size={20} className="check-icon" />
                        <span className="body-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-container section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{audienceData.title}</h2>
            <p className="body-large section-subtitle">{audienceData.subtitle}</p>
          </div>
          <div className="audience-grid">
            {audienceData.audiences.map((audience, index) => {
              const IconComponent = iconMap[audience.icon];
              return (
                <Card key={index} className="audience-card">
                  <CardHeader>
                    <div className="icon-wrapper-large">
                      {IconComponent && <IconComponent size={36} className="icon-accent" />}
                    </div>
                    <CardTitle className="heading-3">{audience.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-medium">{audience.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-container" id="clients">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">{socialProofData.title}</h2>
            <p className="body-large section-subtitle">{socialProofData.subtitle}</p>
          </div>
          
          {/* Client Logos */}
          <div className="logos-grid">
            {socialProofData.logos.map((logo, index) => (
              <div key={index} className="logo-card">
                <div className="logo-placeholder">{logo.name}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="testimonials-grid">
            {socialProofData.testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="body-large testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-author">
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
                {ctaData.primaryCta} <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="btn-secondary btn-large">
                {ctaData.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-container section-alt" id="contact">
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
                    {isSubmitting ? 'Sending...' : 'Request Demo'} <ArrowRight className="ml-2" size={20} />
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
              <p className="body-small footer-text">Wellness that works while you work.</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
                <li><a href="#programs" className="footer-link">Programs</a></li>
                <li><a href="#features" className="footer-link">Features</a></li>
                <li><a href="#impact" className="footer-link">Impact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#clients" className="footer-link">Clients</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="body-small footer-copyright">
              © 2025 Reset Ritual. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

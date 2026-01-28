import React, { useState } from 'react';
import {
  Flame, Brain, DollarSign, AlertTriangle, TrendingDown, Clock, Users, Settings,
  BarChart, Repeat, Monitor, CheckCircle, Activity, Wind, Coffee, Heart, Smile,
  UserCheck, Zap, Target, Globe, Award, Sliders, PieChart, Mail, Phone, Linkedin,
  Check, ArrowRight, Play, Leaf, Building
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';
import {
  navigation,
  heroData,
  problemData,
  solutionData,
  featuresData,
  comparisonData,
  impactData,
  finalCTAData,
  footerData
} from '../mockData';

const iconMap = {
  flame: Flame,
  brain: Brain,
  'dollar-sign': DollarSign,
  'alert-triangle': AlertTriangle,
  'trending-down': TrendingDown,
  clock: Clock,
  users: Users,
  settings: Settings,
  'bar-chart': BarChart,
  repeat: Repeat,
  monitor: Monitor,
  'check-circle': CheckCircle,
  activity: Activity,
  wind: Wind,
  coffee: Coffee,
  heart: Heart,
  smile: Smile,
  'user-check': UserCheck,
  zap: Zap,
  target: Target,
  globe: Globe,
  award: Award,
  sliders: Sliders,
  'pie-chart': PieChart
};

const HomePage = () => {
  const { toast } = useToast();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-logo">
            <div className="nav-logo-icon">
              <Leaf size={20} />
            </div>
            <span className="nav-logo-text">{navigation.logo}</span>
          </div>
          <div className="nav-menu">
            {navigation.menuItems.map((item, index) => (
              <a key={index} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
          <Button onClick={scrollToContact} className="btn btn-outline">
            {navigation.cta}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-headline">{heroData.headline}</h1>
            <p className="subheadline">{heroData.subheadline}</p>
            <div className="hero-trust-indicators">
              {heroData.trustIndicators.map((indicator, index) => (
                <div key={index} className="trust-indicator">
                  <Check size={16} className="trust-icon" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
            <div className="hero-cta-group">
              <Button onClick={scrollToContact} className="btn btn-primary btn-large">
                {heroData.primaryCTA} <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          {/* Calendar Mockup */}
          <div className="calendar-mockup">
            <div className="calendar-header">
              <span className="calendar-title">This Week's Rituals</span>
            </div>
            <div className="calendar-grid">
              <div className="calendar-day">Mon</div>
              <div className="calendar-day">Tue</div>
              <div className="calendar-day">Wed</div>
              <div className="calendar-day">Thu</div>
              <div className="calendar-day">Fri</div>
              
              <div>
                <div className="session-card">
                  <div className="session-time">10:00 AM</div>
                  <div className="session-title">Desk Stretch</div>
                </div>
              </div>
              <div>
                <div className="session-card breathwork">
                  <div className="session-time">2:30 PM</div>
                  <div className="session-title">Breathwork</div>
                </div>
              </div>
              <div>
                <div className="session-card movement">
                  <div className="session-time">11:15 AM</div>
                  <div className="session-title">Focus Flow</div>
                </div>
              </div>
              <div>
                <div className="session-card">
                  <div className="session-time">3:00 PM</div>
                  <div className="session-title">Energy Boost</div>
                </div>
              </div>
              <div>
                <div className="session-card breathwork">
                  <div className="session-time">10:30 AM</div>
                  <div className="session-title">Meditation</div>
                </div>
              </div>
            </div>
            <div className="up-next-card">
              <div className="up-next-label">Up Next</div>
              <div className="up-next-title">Desk Stretch - 12 min</div>
              <div className="play-button">
                <Play size={18} fill="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section" id="methodology">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{problemData.title}</h2>
          </div>
          <div className="stats-grid">
            {problemData.stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <div className="stat-number">{stat.stat}</div>
                  <div className="stat-title">{stat.title}</div>
                  <div className="stat-description">{stat.description}</div>
                  <div className="stat-source">Source: {stat.source}</div>
                </div>
              );
            })}
          </div>

          {/* India Stats */}
          <div className="section-header" style={{ marginTop: '5rem' }}>
            <h2 className="section-title">{problemData.indiaStats.title}</h2>
          </div>
          <div className="india-stats-grid">
            {problemData.indiaStats.stats.map((stat, index) => (
              <div key={index} className="india-stat-card">
                <div className="india-stat-number">{stat.stat}</div>
                <div className="stat-description">{stat.description}</div>
                <div className="stat-source">— {stat.source}</div>
              </div>
            ))}
          </div>

          {/* Challenges */}
          <section className="challenges-section">
            <div className="challenges-container">
              <div className="challenges-header">
                <div className="challenges-overline">{problemData.challenges.overline}</div>
                <h2 className="challenges-title">{problemData.challenges.title}</h2>
              </div>
              
              <div className="challenges-grid">
                {/* Employee Barriers */}
                <div className="employee-barriers">
                  <div className="column-header blue">
                    <Users size={24} className="column-header-icon blue" />
                    <h3 className="column-header-title blue">{problemData.challenges.employeeBarriers.title}</h3>
                  </div>
                  {problemData.challenges.employeeBarriers.items.map((item, index) => (
                    <div key={index} className="barrier-item">
                      <div className="barrier-percentage">{item.percentage}</div>
                      <div className="barrier-content">
                        <div className="barrier-title">{item.title}</div>
                        <p className="barrier-description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Organizational Hurdles */}
                <div className="organizational-hurdles">
                  <div className="column-header teal">
                    <Building size={24} className="column-header-icon teal" />
                    <h3 className="column-header-title teal">{problemData.challenges.organizationalHurdles.title}</h3>
                  </div>
                  {problemData.challenges.organizationalHurdles.items.map((hurdle, index) => {
                    const IconComponent = iconMap[hurdle.icon];
                    return (
                      <div key={index} className="hurdle-card">
                        <div className="hurdle-icon-badge">
                          {IconComponent && <IconComponent size={24} />}
                        </div>
                        <div className="hurdle-title">{hurdle.title}</div>
                        <p className="hurdle-description">{hurdle.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="challenges-citation">{problemData.challenges.citation}</div>
            </div>
          </section>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section section-alt" id="solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{solutionData.title}</h2>
            <p className="section-subtitle">{solutionData.subtitle}</p>
          </div>
          <div className="features-grid">
            {solutionData.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <div className="feature-title">{feature.title}</div>
                  <div className="stat-description">{feature.description}</div>
                </div>
              );
            })}
          </div>

          {/* How It Works */}
          <div className="section-header" style={{ marginTop: '5rem' }}>
            <h2 className="section-title">{solutionData.howItWorks.title}</h2>
            <p className="section-subtitle">{solutionData.howItWorks.subtitle}</p>
          </div>
          <div className="steps-timeline">
            <div className="steps-horizontal-grid">
              {solutionData.howItWorks.steps.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <div className="step-title">{step.title}</div>
                    <div className="step-description">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features - Live Rituals */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{featuresData.liveRituals.title}</h2>
            <p className="section-subtitle">{featuresData.liveRituals.tagline}</p>
          </div>
          <div className="features-grid">
            {featuresData.liveRituals.modules.map((module, index) => {
              const IconComponent = iconMap[module.icon];
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <div className="feature-title">{module.title}</div>
                  <div className="stat-description">{module.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="section section-accent">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{featuresData.workshops.title}</h2>
            <p className="section-subtitle">{featuresData.workshops.subtitle}</p>
          </div>
          <div className="workshops-grid">
            {featuresData.workshops.items.map((workshop, index) => (
              <div key={index} className="workshop-card">
                <div className="workshop-header">
                  <div className="workshop-subtitle">{workshop.subtitle}</div>
                  <div className="workshop-title">{workshop.title}</div>
                </div>
                <div className="workshop-body">
                  <p className="stat-description">{workshop.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Power of Both */}
          <div className="section-header" style={{ marginTop: '5rem' }}>
            <h2 className="section-title">{featuresData.powerOfBoth.title}</h2>
          </div>
          <div className="power-of-both">
            <div className="power-card">
              <h3 className="feature-title">{featuresData.powerOfBoth.daily.title}</h3>
              <p className="stat-description">{featuresData.powerOfBoth.daily.description}</p>
            </div>
            <div className="power-card">
              <h3 className="feature-title">{featuresData.powerOfBoth.quarterly.title}</h3>
              <p className="stat-description">{featuresData.powerOfBoth.quarterly.description}</p>
            </div>
            <div className="synthesis-banner">
              {featuresData.powerOfBoth.synthesis}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="comparison-container">
          <div className="comparison-section-header">
            <h2 className="comparison-section-title">{comparisonData.title}</h2>
            <p className="comparison-section-subtitle">{comparisonData.subtitle}</p>
          </div>
          
          <div className="comparison-grid-modern">
            {/* Standard Wellness Column */}
            <div className="comparison-column-modern">
              <div className="comparison-column-header-modern standard">
                <h3 className="comparison-column-title-modern standard">Standard Wellness</h3>
                <p className="comparison-column-subtitle standard">Established Approach</p>
              </div>
              {comparisonData.metrics.map((metric, index) => (
                <div key={index} className="comparison-metric-card standard">
                  <div className="comparison-metric-category">{metric.category}</div>
                  <div className="comparison-metric-value standard">{metric.standard}</div>
                </div>
              ))}
            </div>

            {/* Modern Reset Ritual Column */}
            <div className="comparison-column-modern">
              <div className="comparison-column-header-modern modern">
                <span className="recommended-badge">Recommended</span>
                <h3 className="comparison-column-title-modern modern">Reset Ritual</h3>
                <p className="comparison-column-subtitle modern">Modern Innovation</p>
              </div>
              {comparisonData.metrics.map((metric, index) => (
                <div key={index} className={`comparison-metric-card modern ${metric.recommended ? 'recommended' : ''}`}>
                  <div className="comparison-metric-category">{metric.category}</div>
                  <div className={`comparison-metric-value modern ${metric.recommended ? 'recommended' : ''}`}>
                    {metric.modern}
                  </div>
                  {metric.recommended && <span className="feature-badge">Key Innovation</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact & ROI Section */}
      <section className="section section-alt" id="resources">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Impact & ROI</h2>
            <p className="section-subtitle">Measurable results that matter to HR and employees</p>
          </div>

          {/* HR Dashboard */}
          <div className="dashboard-mockup">
            <div className="dashboard-header">
              <h3 className="feature-title">{impactData.hrDashboard.title}</h3>
              <p className="stat-description">{impactData.hrDashboard.subtitle}</p>
            </div>
            <div className="kpi-grid">
              {impactData.hrDashboard.kpis.map((kpi, index) => (
                <div key={index} className="kpi-card">
                  <div className="kpi-title">{kpi.title}</div>
                  <div className="kpi-value">{kpi.value}</div>
                  <div className="kpi-trend">
                    <TrendingDown size={16} style={{ transform: kpi.trend === 'up' ? 'rotate(180deg)' : 'none' }} />
                    <span>{kpi.trend === 'up' ? 'Increasing' : 'Stable'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Employee Impact */}
          <div className="section-header" style={{ marginTop: '5rem' }}>
            <h2 className="section-title">{impactData.employeeImpact.title}</h2>
          </div>
          <div className="features-grid">
            {impactData.employeeImpact.outcomes.map((outcome, index) => {
              const IconComponent = iconMap[outcome.icon];
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <div className="feature-title">{outcome.title}</div>
                  <div className="stat-description">{outcome.description}</div>
                </div>
              );
            })}
          </div>
          <div className="roi-quote" style={{ marginTop: '3rem' }}>
            <p className="roi-quote-text">"{impactData.employeeImpact.testimonial.quote}"</p>
            <p className="stat-source">— {impactData.employeeImpact.testimonial.author}</p>
          </div>

          {/* Organizational Benefits */}
          <div className="section-header" style={{ marginTop: '5rem' }}>
            <h2 className="section-title">{impactData.organizationalBenefits.title}</h2>
          </div>
          <div className="features-grid">
            {impactData.organizationalBenefits.benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <div className="feature-title">{benefit.title}</div>
                  <div className="stat-description">{benefit.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Quote */}
      <section className="section">
        <div className="container">
          <div className="roi-quote">
            <p className="roi-quote-text">"{impactData.roiQuote}"</p>
            <p className="roi-quote-source">— {impactData.roiSource}</p>
          </div>
        </div>
      </section>

      {/* Thought Line */}
      <section className="thought-line">
        <p className="thought-line-text">{finalCTAData.thoughtLine}</p>
      </section>

      {/* Final CTA */}
      <section className="final-cta" id="contact">
        <div className="container">
          <h2 className="section-title">{finalCTAData.title}</h2>
          <div className="cta-buttons">
            {finalCTAData.buttons.map((button, index) => (
              <Button
                key={index}
                onClick={scrollToContact}
                className={button.primary ? 'btn btn-primary btn-large' : 'btn btn-outline btn-large'}
              >
                {button.label} {button.primary && <ArrowRight size={20} />}
              </Button>
            ))}
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <span>{finalCTAData.contact.email}</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <span>{finalCTAData.contact.phone}</span>
            </div>
            <div className="contact-item">
              <Linkedin size={18} className="contact-icon" />
              <span>{finalCTAData.contact.linkedin}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-nav">
            {footerData.navigation.map((item, index) => (
              <a key={index} href={item.href} className="footer-link">
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-copyright">
            © 2025 Reset Rituals. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import {
  Flame, Brain, DollarSign, AlertTriangle, TrendingDown, Clock, Users, Settings,
  BarChart, Repeat, Monitor, CheckCircle, Activity, Wind, Coffee, Heart, Smile,
  UserCheck, Zap, Target, Globe, Award, Sliders, PieChart, Mail, Phone, Linkedin,
  Check, ArrowRight, Play, Leaf, Building, Star
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

      {/* Solution Section - Journey Map */}
      <section className="journey-map-section" id="solutions">
        <div className="journey-map-container">
          <div className="journey-map-header">
            <h2 className="journey-map-title">{solutionData.title}</h2>
            <p className="journey-map-subtitle">{solutionData.subtitle}</p>
          </div>

          {/* Timeline */}
          <div className="journey-timeline">
            <div className="timeline-bar"></div>
            <div className="timeline-dots">
              {solutionData.journeyMap.map((moment, index) => {
                const IconComponent = iconMap[moment.icon];
                return (
                  <div key={index} className={`journey-moment ${moment.isReset ? 'is-reset' : ''}`}>
                    <div className="journey-illustration">
                      <div className="journey-icon-wrapper">
                        {IconComponent && <IconComponent size={40} className="journey-icon" />}
                      </div>
                      {moment.highlight && <span className="reset-star">⭐</span>}
                    </div>
                    <div className="timeline-dot"></div>
                    <div className="journey-content">
                      <div className="journey-time">{moment.time}</div>
                      <div className="journey-label">{moment.label}</div>
                      <div className="journey-description">{moment.description}</div>
                      <span className={`energy-indicator energy-${moment.energyLevel}`}>
                        {moment.energyLevel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Energy Curve Graph */}
          <div className="energy-curve-section">
            <h3 className="energy-curve-title">{solutionData.energyCurve.title}</h3>
            <div className="energy-graph">
              <svg className="energy-curve-svg" viewBox="0 0 700 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="energyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
                {/* Area under curve */}
                <path
                  className="energy-area"
                  d={`M 0,${200 - (solutionData.energyCurve.points[0].energy * 1.5)} 
                      ${solutionData.energyCurve.points.map((point, i) => 
                        `L ${(i / (solutionData.energyCurve.points.length - 1)) * 700},${200 - (point.energy * 1.5)}`
                      ).join(' ')} 
                      L 700,200 L 0,200 Z`}
                />
                
                {/* Curve line */}
                <path
                  className="energy-curve-line"
                  d={`M 0,${200 - (solutionData.energyCurve.points[0].energy * 1.5)} 
                      ${solutionData.energyCurve.points.map((point, i) => 
                        `L ${(i / (solutionData.energyCurve.points.length - 1)) * 700},${200 - (point.energy * 1.5)}`
                      ).join(' ')}`}
                />
                
                {/* Data points */}
                {solutionData.energyCurve.points.map((point, i) => {
                  const x = (i / (solutionData.energyCurve.points.length - 1)) * 700;
                  const y = 200 - (point.energy * 1.5);
                  const isReset = point.label.includes('Reset');
                  
                  return (
                    <g key={i}>
                      <circle
                        className={`energy-point ${isReset ? 'reset' : ''}`}
                        cx={x}
                        cy={y}
                        r={isReset ? 8 : 5}
                      />
                      <text
                        className="energy-label"
                        x={x}
                        y={y - 15}
                        textAnchor="middle"
                      >
                        {point.time}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </section>

          {/* How It Works - Visual First */}
          <section className="how-it-works-visual-section" id="how-it-works">
            <div className="how-it-works-container">
              <div className="how-it-works-header">
                <div className="how-it-works-stat-line">{solutionData.howItWorks.statLine}</div>
                <h2 className="how-it-works-title">{solutionData.howItWorks.title}</h2>
                <p className="how-it-works-subtitle">{solutionData.howItWorks.subtitle}</p>
              </div>

              {/* Calendar Hero Visual */}
              <div className="calendar-hero-wrapper">
                <div className="workday-calendar">
                  <div className="time-column">
                    <div className="time-slot">9:00 AM</div>
                    <div className="time-slot">10:00 AM</div>
                    <div className="time-slot">11:00 AM</div>
                    <div className="time-slot">12:00 PM</div>
                    <div className="time-slot">1:00 PM</div>
                    <div className="time-slot">2:00 PM</div>
                    <div className="time-slot">3:00 PM</div>
                    <div className="time-slot">4:00 PM</div>
                  </div>
                  
                  <div className="calendar-events">
                    <div className="calendar-header-row">
                      <div className="day-header">Monday</div>
                      <div className="day-header">Tuesday</div>
                      <div className="day-header">Wednesday</div>
                      <div className="day-header">Thursday</div>
                      <div className="day-header">Friday</div>
                    </div>
                    
                    {/* Row 1: 9 AM */}
                    <div className="calendar-day-column">
                      <div className="event-block meeting">
                        <div className="event-time">9:00-10:00</div>
                        <div className="event-title">Team Standup</div>
                      </div>
                      <div className="event-block meeting">
                        <div className="event-time">9:30-10:00</div>
                        <div className="event-title">Planning</div>
                      </div>
                      <div></div>
                      <div className="event-block meeting">
                        <div className="event-time">9:00-9:45</div>
                        <div className="event-title">1:1 Meeting</div>
                      </div>
                      <div></div>
                    </div>
                    
                    {/* Row 2: 10 AM - Reset Ritual */}
                    <div className="calendar-day-column">
                      <div className="event-block reset-ritual">
                        <div className="event-time">10:15-10:27</div>
                        <div className="event-title">Reset Ritual 🌿</div>
                        <div className="event-preview-popup">
                          <div className="preview-title">Desk Stretch & Breathwork</div>
                          <div className="preview-detail">⏱ 12 minutes</div>
                          <div className="preview-detail">👤 Camera Optional</div>
                          <div className="preview-detail">🎯 Release tension, boost energy</div>
                        </div>
                      </div>
                      <div></div>
                      <div className="event-block reset-ritual">
                        <div className="event-time">10:30-10:42</div>
                        <div className="event-title">Reset Ritual 🌿</div>
                        <div className="event-preview-popup">
                          <div className="preview-title">Focus Flow</div>
                          <div className="preview-detail">⏱ 12 minutes</div>
                          <div className="preview-detail">👤 Camera Optional</div>
                          <div className="preview-detail">🎯 Mental clarity</div>
                        </div>
                      </div>
                      <div></div>
                      <div className="event-block reset-ritual">
                        <div className="event-time">10:00-10:12</div>
                        <div className="event-title">Reset Ritual 🌿</div>
                        <div className="event-preview-popup">
                          <div className="preview-title">Morning Energy</div>
                          <div className="preview-detail">⏱ 12 minutes</div>
                          <div className="preview-detail">👤 Camera Optional</div>
                          <div className="preview-detail">🎯 Energize your day</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Row 3: 11 AM */}
                    <div className="calendar-day-column">
                      <div className="event-block meeting">
                        <div className="event-time">11:00-12:00</div>
                        <div className="event-title">Client Call</div>
                      </div>
                      <div className="event-block meeting">
                        <div className="event-time">11:00-11:45</div>
                        <div className="event-title">Design Review</div>
                      </div>
                      <div className="event-block meeting">
                        <div className="event-time">11:00-12:00</div>
                        <div className="event-title">Workshop</div>
                      </div>
                      <div></div>
                      <div className="event-block meeting">
                        <div className="event-time">11:30-12:00</div>
                        <div className="event-title">Sprint Review</div>
                      </div>
                    </div>
                    
                    {/* Row 4: 12 PM - Lunch */}
                    <div className="calendar-day-column"></div>
                    
                    {/* Row 5: 1 PM */}
                    <div className="calendar-day-column">
                      <div className="event-block meeting">
                        <div className="event-time">1:00-2:00</div>
                        <div className="event-title">Strategy</div>
                      </div>
                      <div></div>
                      <div></div>
                      <div className="event-block meeting">
                        <div className="event-time">1:00-1:30</div>
                        <div className="event-title">Sync</div>
                      </div>
                      <div></div>
                    </div>
                    
                    {/* Row 6: 2 PM */}
                    <div className="calendar-day-column">
                      <div></div>
                      <div className="event-block reset-ritual">
                        <div className="event-time">2:30-2:42</div>
                        <div className="event-title">Reset Ritual 🌿</div>
                        <div className="event-preview-popup">
                          <div className="preview-title">Afternoon Recharge</div>
                          <div className="preview-detail">⏱ 12 minutes</div>
                          <div className="preview-detail">👤 Camera Optional</div>
                          <div className="preview-detail">🎯 Beat afternoon slump</div>
                        </div>
                      </div>
                      <div className="event-block meeting">
                        <div className="event-time">2:00-3:00</div>
                        <div className="event-title">All Hands</div>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                    
                    {/* Row 7: 3 PM */}
                    <div className="calendar-day-column">
                      <div className="event-block meeting">
                        <div className="event-time">3:00-4:00</div>
                        <div className="event-title">Project Sync</div>
                      </div>
                      <div></div>
                      <div></div>
                      <div className="event-block meeting">
                        <div className="event-time">3:30-4:30</div>
                        <div className="event-title">Brainstorm</div>
                      </div>
                      <div className="event-block meeting">
                        <div className="event-time">3:00-3:45</div>
                        <div className="event-title">Training</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="trust-signals">
                {solutionData.howItWorks.trustSignals.map((signal, index) => (
                  <div key={index} className="trust-signal-item">
                    <Check size={16} className="trust-check" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>

              {/* Simple 3 Steps */}
              <div className="steps-simple-grid">
                {solutionData.howItWorks.steps.map((step, index) => (
                  <div key={index} className="step-simple-card">
                    <div className="step-simple-number">{step.number}</div>
                    <h3 className="step-simple-title">{step.title}</h3>
                    <p className="step-simple-description">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Testimonial & CTA */}
              <div className="how-it-works-cta-section">
                <div className="how-it-works-testimonial">
                  <p className="testimonial-text">"{solutionData.howItWorks.testimonial}"</p>
                  <p className="testimonial-author-small">— {solutionData.howItWorks.testimonialAuthor}</p>
                </div>
                <Button 
                  onClick={() => window.open(solutionData.howItWorks.cta.url, '_blank')}
                  className="btn btn-primary btn-large"
                >
                  {solutionData.howItWorks.cta.text} <ArrowRight size={20} />
                </Button>
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
          
          {/* Column Headers */}
          <div className="comparison-headers">
            <div className="comparison-column-header-modern standard">
              <h3 className="comparison-column-title-modern standard">Standard Wellness</h3>
              <p className="comparison-column-subtitle standard">Established Approach</p>
            </div>
            <div className="comparison-column-header-modern modern">
              <span className="recommended-badge">Recommended</span>
              <h3 className="comparison-column-title-modern modern">Reset Ritual</h3>
              <p className="comparison-column-subtitle modern">Modern Innovation</p>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="comparison-rows-container">
            {comparisonData.metrics.map((metric, index) => (
              <div key={index} className="comparison-row-modern">
                <div className="comparison-metric-card standard">
                  <div className="comparison-metric-category">{metric.category}</div>
                  <div className="comparison-metric-value standard">{metric.standard}</div>
                </div>
                <div className={`comparison-metric-card modern ${metric.recommended ? 'recommended' : ''}`}>
                  <div className="comparison-metric-category">{metric.category}</div>
                  <div className={`comparison-metric-value modern ${metric.recommended ? 'recommended' : ''}`}>
                    {metric.modern}
                  </div>
                  {metric.recommended && <span className="feature-badge">Key Innovation</span>}
                </div>
              </div>
            ))}
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
          <section className="employee-impact-section">
            <div className="employee-impact-container">
              <div className="employee-impact-header">
                <h2 className="employee-impact-title">{impactData.employeeImpact.title}</h2>
                <p className="employee-impact-hero-statement">{impactData.employeeImpact.heroStatement}</p>
              </div>

              {/* Benefits Grid */}
              <div className="employee-benefits-grid">
                {impactData.employeeImpact.benefits.map((benefit, index) => {
                  const IconComponent = iconMap[benefit.icon];
                  return (
                    <div 
                      key={index} 
                      className="employee-benefit-card"
                      style={{ '--benefit-color': benefit.color }}
                    >
                      <div className="employee-benefit-icon-wrapper" style={{ background: benefit.color }}>
                        {IconComponent && <IconComponent size={32} className="employee-benefit-icon" />}
                      </div>
                      <h3 className="employee-benefit-title">{benefit.title}</h3>
                      <p className="employee-benefit-description">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Testimonial */}
              <div className="employee-testimonial-section">
                <div className="testimonial-rating">
                  {[...Array(impactData.employeeImpact.testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-quote-large">{impactData.employeeImpact.testimonial.quote}</p>
                <div className="testimonial-author-info">
                  <div className="testimonial-avatar">
                    {impactData.employeeImpact.testimonial.author.charAt(0)}
                  </div>
                  <div className="testimonial-author-text">
                    <p className="testimonial-author-name">{impactData.employeeImpact.testimonial.author.split(',')[0]}</p>
                    <p className="testimonial-author-role">{impactData.employeeImpact.testimonial.author.split(',')[1]}</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="employee-impact-ctas">
                {impactData.employeeImpact.ctas.map((cta, index) => (
                  <Button
                    key={index}
                    onClick={scrollToContact}
                    className={cta.type === 'primary' ? 'btn btn-primary btn-large' : 'btn btn-outline btn-large'}
                  >
                    {cta.label} <ArrowRight size={20} />
                  </Button>
                ))}
              </div>
            </div>
          </section>

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

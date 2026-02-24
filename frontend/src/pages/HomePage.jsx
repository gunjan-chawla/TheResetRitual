import React, { useState } from 'react';
import {
  Flame, Brain, DollarSign, AlertTriangle, TrendingDown, Clock, Users, Settings,
  BarChart, Repeat, Monitor, CheckCircle, Activity, Wind, Coffee, Heart, Smile,
  UserCheck, Zap, Target, Globe, Award, Sliders, PieChart, Mail, Phone, Linkedin,
  Check, ArrowRight, Play, Leaf, Building, Star, Send
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

          {/* Timeline with Illustrative Images */}
          <div className="journey-timeline-v2">
            {/* Timeline Bar */}
            <div className="timeline-track">
              <div className="timeline-progress"></div>
            </div>

            {/* Journey Moments - 4 Steps */}
            <div className="journey-scenes four-items">
              {/* 9:00 AM - Start Day */}
              <div className="journey-scene">
                <div className="scene-illustration square">
                  <img 
                    src="https://static.prod-images.emergentagent.com/jobs/a4c3a9b8-c24e-4a97-835c-d84ae46bceea/images/841e541d6582d0bb032c5e66b49df1b6824e7a82c32ed0721f0ac07ed378cdba.png" 
                    alt="Illustration of woman starting workday at desk" 
                    className="scene-image"
                  />
                </div>
                <div className="timeline-marker"></div>
                <div className="scene-info">
                  <span className="scene-time">9:00 AM</span>
                  <h4 className="scene-label">Start Day</h4>
                  <p className="scene-desc">Arrive at desk, morning energy</p>
                  <div className="energy-badge medium">
                    <Activity size={12} />
                    <span>Medium Energy</span>
                  </div>
                </div>
              </div>

              {/* 11:45 AM - First Reset */}
              <div className="journey-scene is-reset">
                <div className="reset-glow square"></div>
                <div className="scene-illustration square">
                  <img 
                    src="https://static.prod-images.emergentagent.com/jobs/a4c3a9b8-c24e-4a97-835c-d84ae46bceea/images/73d11609e8ba3b41600d59f461b0cacd5966ce39d56d0f446b95ebd610f557b5.png" 
                    alt="Illustration of woman doing desk stretches" 
                    className="scene-image"
                  />
                  <div className="calendar-notif">🌿</div>
                </div>
                <div className="timeline-marker reset"></div>
                <div className="scene-info">
                  <div className="reset-badge">
                    <Star size={14} fill="#fbbf24" />
                    <span>RESET RITUAL</span>
                  </div>
                  <span className="scene-time">11:45 AM</span>
                  <h4 className="scene-label reset">First Reset</h4>
                  <p className="scene-desc highlight">12-min Posture Correction</p>
                  <div className="energy-badge boosted">
                    <TrendingDown size={12} style={{ transform: 'rotate(180deg)' }} />
                    <span>Energy Boost ↑</span>
                  </div>
                </div>
              </div>

              {/* 1:00 PM - Post-Lunch */}
              <div className="journey-scene">
                <div className="scene-illustration square">
                  <img 
                    src="https://static.prod-images.emergentagent.com/jobs/a4c3a9b8-c24e-4a97-835c-d84ae46bceea/images/57ba1015fd7004246dd11dc64e9148227024897b9249e9c8bae0e9d17bd50adc.png" 
                    alt="Illustration of woman focused working" 
                    className="scene-image"
                  />
                </div>
                <div className="timeline-marker"></div>
                <div className="scene-info">
                  <span className="scene-time">1:00 PM</span>
                  <h4 className="scene-label">Post-Lunch</h4>
                  <p className="scene-desc">Working focused</p>
                  <div className="energy-badge high">
                    <Target size={12} />
                    <span>High Focus</span>
                  </div>
                </div>
              </div>

              {/* 3:30 PM - Second Reset */}
              <div className="journey-scene is-reset">
                <div className="reset-glow square"></div>
                <div className="scene-illustration square">
                  <img 
                    src="https://static.prod-images.emergentagent.com/jobs/a4c3a9b8-c24e-4a97-835c-d84ae46bceea/images/9adfbf380477e5c4d12b6859d56bc4b38b026202903f6e0455e566f000d97fb4.png" 
                    alt="Illustration of woman doing breathwork meditation" 
                    className="scene-image"
                  />
                  <div className="calendar-notif">🌿</div>
                </div>
                <div className="timeline-marker reset"></div>
                <div className="scene-info">
                  <div className="reset-badge">
                    <Star size={14} fill="#fbbf24" />
                    <span>RESET RITUAL</span>
                  </div>
                  <span className="scene-time">3:30 PM</span>
                  <h4 className="scene-label reset">Second Reset</h4>
                  <p className="scene-desc highlight">12-min Breathwork</p>
                  <div className="energy-badge recharged">
                    <Wind size={12} />
                    <span>Stress Relief ~</span>
                  </div>
                </div>
              </div>
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

      {/* Workshops - Visual Design */}
      <section className="workshops-section" id="workshops">
        <div className="workshops-container">
          <div className="workshops-header">
            <span className="workshops-overline">Quarterly Experiences</span>
            <h2 className="workshops-title">{featuresData.workshops.title}</h2>
            <p className="workshops-subtitle">{featuresData.workshops.subtitle}</p>
          </div>
          
          <div className="workshops-visual-grid">
            {/* Workshop 1: Zumba */}
            <div className="workshop-visual-card">
              <div className="workshop-image-wrapper">
                <img 
                  src="https://static.prod-images.emergentagent.com/jobs/a4c3a9b8-c24e-4a97-835c-d84ae46bceea/images/b8172f027412990e15efa5e1318b824f62bc2b217582eba6ca60068c31f5bde7.png" 
                  alt="Zumba workshop illustration"
                  className="workshop-image"
                />
                <div className="workshop-badge energy">Energize</div>
              </div>
              <div className="workshop-content">
                <span className="workshop-category">Wellness & Workplace Vibe</span>
                <h3 className="workshop-name">Zumba</h3>
                <p className="workshop-desc">Energetic sessions combining mindfulness and movement</p>
                <div className="workshop-features">
                  <span className="workshop-feature"><Activity size={14} /> High Energy</span>
                  <span className="workshop-feature"><Users size={14} /> Team Activity</span>
                </div>
              </div>
            </div>

            {/* Workshop 2: Nutrition */}
            <div className="workshop-visual-card">
              <div className="workshop-image-wrapper">
                <img 
                  src="https://static.prod-images.emergentagent.com/jobs/a4c3a9b8-c24e-4a97-835c-d84ae46bceea/images/871f295a9d080bd7bf556e88c100a6e66941bdbae3ad385b51c1e4ab62e101b9.png" 
                  alt="Nutrition workshop illustration"
                  className="workshop-image"
                />
                <div className="workshop-badge nourish">Nourish</div>
              </div>
              <div className="workshop-content">
                <span className="workshop-category">Wellness & Nutrition Awareness</span>
                <h3 className="workshop-name">Nutrition</h3>
                <p className="workshop-desc">Holistic approach to physical and dietary health</p>
                <div className="workshop-features">
                  <span className="workshop-feature"><Heart size={14} /> Healthy Living</span>
                  <span className="workshop-feature"><Coffee size={14} /> Diet Tips</span>
                </div>
              </div>
            </div>

            {/* Workshop 3: Social Wellness */}
            <div className="workshop-visual-card">
              <div className="workshop-image-wrapper">
                <img 
                  src="https://static.prod-images.emergentagent.com/jobs/a4c3a9b8-c24e-4a97-835c-d84ae46bceea/images/843197809989c9010318e48f204aacd6d6fd6399e773d7b8ac3923b262595a76.png" 
                  alt="Social Wellness workshop illustration"
                  className="workshop-image"
                />
                <div className="workshop-badge connect">Connect</div>
              </div>
              <div className="workshop-content">
                <span className="workshop-category">Community Building</span>
                <h3 className="workshop-name">Social Wellness</h3>
                <p className="workshop-desc">Strengthen team bonds through shared wellness</p>
                <div className="workshop-features">
                  <span className="workshop-feature"><Users size={14} /> Partner Work</span>
                  <span className="workshop-feature"><Smile size={14} /> Team Bonding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Power of Both */}
          <div className="power-of-both-section">
            <h3 className="power-title">{featuresData.powerOfBoth.title}</h3>
            <div className="power-grid">
              <div className="power-card daily">
                <div className="power-icon">
                  <Monitor size={32} />
                </div>
                <h4 className="power-card-title">{featuresData.powerOfBoth.daily.title}</h4>
                <p className="power-card-desc">{featuresData.powerOfBoth.daily.description}</p>
              </div>
              <div className="power-plus">+</div>
              <div className="power-card quarterly">
                <div className="power-icon">
                  <Users size={32} />
                </div>
                <h4 className="power-card-title">{featuresData.powerOfBoth.quarterly.title}</h4>
                <p className="power-card-desc">{featuresData.powerOfBoth.quarterly.description}</p>
              </div>
            </div>
            <div className="power-synthesis">
              <span className="synthesis-equals">=</span>
              <span className="synthesis-text">{featuresData.powerOfBoth.synthesis}</span>
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

      {/* Impact & ROI Section - New Infographic Design */}
      <section className="infographic-section" id="resources">
        <div className="infographic-container">
          <div className="infographic-header">
            <h2 className="infographic-title">Measurable Impact</h2>
            <p className="infographic-subtitle">Science-backed results that transform workplace wellness</p>
          </div>

          {/* Infographic Cards Grid */}
          <div className="infographic-grid">
            {/* Card 1: Productivity (Indigo) */}
            <div className="infographic-card indigo">
              <div className="infographic-icon-wrapper indigo">
                <i className="fas fa-chart-line"></i>
              </div>
              <h2 className="infographic-stat indigo">+21%</h2>
              <div className="infographic-stat-bar indigo"></div>
              <h3 className="infographic-card-title">Productivity</h3>
              <p className="infographic-card-desc">
                Increase in profitability reported by organizations with highly engaged wellness programs.
              </p>
              <p className="infographic-source">— Gallup Workplace Study</p>
            </div>

            {/* Card 2: Disease Risk (Teal - Featured) */}
            <div className="infographic-card teal featured">
              <div className="infographic-icon-wrapper teal">
                <i className="fas fa-heart-pulse"></i>
              </div>
              <h2 className="infographic-stat teal">-40%</h2>
              <div className="infographic-stat-bar teal"></div>
              <h3 className="infographic-card-title">Disease Risk</h3>
              <p className="infographic-card-desc">
                Reduction in chronic disease risk factors among employees participating in regular wellness activities.
              </p>
              <p className="infographic-source">— WHO Workplace Health</p>
            </div>

            {/* Card 3: Metabolic Health (Purple) */}
            <div className="infographic-card purple">
              <div className="infographic-icon-wrapper purple">
                <i className="fas fa-dna"></i>
              </div>
              <h2 className="infographic-stat purple">+35%</h2>
              <div className="infographic-stat-bar purple"></div>
              <h3 className="infographic-card-title">Metabolic Health</h3>
              <p className="infographic-card-desc">
                Improvement in metabolic markers including stress hormones, sleep quality, and energy levels.
              </p>
              <p className="infographic-source">— Harvard Business Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Impact Section */}
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
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
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

      {/* Contact Form Section */}
      <section className="contact-form-section" id="contact">
        <div className="contact-form-container">
          <div className="contact-form-header">
            <h2 className="contact-form-title">Get in Touch</h2>
            <p className="contact-form-subtitle">Ready to bring Reset Rituals to your workplace? Let's talk.</p>
          </div>
          
          <form 
            action="https://formsubmit.co/Gunjan@thepro.fit" 
            method="POST"
            className="contact-form"
            data-testid="contact-form"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Reset Rituals Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://resetritual.ai" />
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  required 
                  className="form-input"
                  placeholder="Your name"
                  data-testid="contact-name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Work Email *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  required 
                  className="form-input"
                  placeholder="you@company.com"
                  data-testid="contact-email"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company" className="form-label">Company Name *</label>
                <input 
                  type="text" 
                  id="company"
                  name="company" 
                  required 
                  className="form-input"
                  placeholder="Your company"
                  data-testid="contact-company"
                />
              </div>
              <div className="form-group">
                <label htmlFor="team_size" className="form-label">Team Size</label>
                <select 
                  id="team_size"
                  name="team_size" 
                  className="form-input form-select"
                  data-testid="contact-team-size"
                >
                  <option value="">Select team size</option>
                  <option value="10-50">10-50 employees</option>
                  <option value="50-100">50-100 employees</option>
                  <option value="100-500">100-500 employees</option>
                  <option value="500-1000">500-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="message" className="form-label">Tell us about your wellness goals</label>
              <textarea 
                id="message"
                name="message" 
                rows="4"
                className="form-input form-textarea"
                placeholder="What challenges is your team facing? What are you looking to achieve?"
                data-testid="contact-message"
              ></textarea>
            </div>
            
            <button type="submit" className="form-submit-btn" data-testid="contact-submit">
              <Send size={18} />
              Send Message
            </button>
          </form>
          
          <div className="contact-alternatives">
            <p>Or reach us directly:</p>
            <div className="contact-direct">
              <a href="mailto:Gunjan@thepro.fit" className="contact-link">
                <Mail size={16} /> Gunjan@thepro.fit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
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

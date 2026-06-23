import React, { useState } from 'react';
import { BookOpen, Zap, Compass, ArrowRight, Play } from 'lucide-react';
import ElectricSwitchActivity from './activities/ElectricSwitch';
import ActivityTemplate from './activities/ActivityTemplate';
import './App.css';

export default function App() {
  const [activeActivity, setActiveActivity] = useState(null); // null | 'electric_switch' | 'boilerplate'

  const handleBackToDashboard = () => {
    setActiveActivity(null);
  };

  return (
    <div className="app-container">
      {/* Page Title Header */}
      <header className="header" style={{ marginBottom: activeActivity ? '1.5rem' : '2.5rem' }}>
        <div>
          <div className="header-title">
            <BookOpen style={{ color: '#6366f1' }} size={26} />
            <h1 style={{ fontSize: '1.9rem' }}>Interactive Physics Lab</h1>
          </div>
          <p className="header-subtitle">
            Active-learning simulations and concepts reviews for middle school science
          </p>
        </div>
      </header>

      {/* Main Workspace content */}
      <main style={{ minHeight: '520px' }}>
        {activeActivity === 'electric_switch' ? (
          <ElectricSwitchActivity onBackToDashboard={handleBackToDashboard} />
        ) : activeActivity === 'boilerplate' ? (
          <ActivityTemplate onBackToDashboard={handleBackToDashboard} />
        ) : (
          /* Dashboard Landing Page */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid #6366f1' }}>
              <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Compass size={18} style={{ color: '#818cf8' }} /> Welcome to the Science Lab!
              </h3>
              <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>
                Select an interactive module below. Each lab guides you through constructing physical configurations step-by-step, predicting scientific outcomes, sandboxing with different physical variables, and testing your retention with a conceptual quiz.
              </p>
            </div>

            {/* Activities Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.25rem'
            }}>
              
              {/* Activity Card 1: Electric Switch */}
              <div 
                className="glass-panel" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(99, 102, 241, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative glow badge */}
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '0.7rem', fontWeight: 'bold', padding: '0.25rem 0.75rem', borderBottomLeftRadius: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Active Lab
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <Zap size={20} style={{ color: '#f59e0b' }} />
                  <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#ffffff' }}>Electric Switch</h3>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0, lineHeight: '1.5', flex: 1 }}>
                  NCERT Class 6 Chapter 3 (Activities 3.8 & 3.9). Learn how to build a switch, predict electrical flows, and test materials like wood, plastic, or metals.
                </p>

                <button 
                  onClick={() => setActiveActivity('electric_switch')}
                  className="primary" 
                  style={{ width: '100%', gap: '0.35rem', justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem' }}
                >
                  <Play size={14} fill="#ffffff" /> Open Switch Lab <ArrowRight size={14} />
                </button>
              </div>

              {/* Activity Card 2: Boilerplate Template */}
              <div 
                className="glass-panel" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative badge */}
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', fontSize: '0.7rem', fontWeight: 'bold', padding: '0.25rem 0.75rem', borderBottomLeftRadius: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Boilerplate
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <BookOpen size={20} style={{ color: '#818cf8' }} />
                  <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#ffffff' }}>Activity Template</h3>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0, lineHeight: '1.5', flex: 1 }}>
                  A ready-to-copy code blueprint designed with the exact same structure and styling. Duplicate this folder to build new science activities.
                </p>

                <button 
                  onClick={() => setActiveActivity('boilerplate')}
                  className="outline" 
                  style={{ width: '100%', gap: '0.35rem', justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem' }}
                >
                  View Template Demo <ArrowRight size={14} />
                </button>
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}

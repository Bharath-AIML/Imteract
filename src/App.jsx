import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  Play, 
  Globe, 
  HelpCircle, 
  CheckCircle, 
  BookOpen, 
  ChevronRight,
  Info
} from 'lucide-react';
import Stage1_Build from './components/Stage1_Build';
import Stage2_Test from './components/Stage2_Test';
import Stage3_Explore from './components/Stage3_Explore';
import QuizPanel from './components/QuizPanel';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('build');
  const [progress, setProgress] = useState({
    build: false,
    test: false,
    explore: false,
    quiz: false
  });

  const handleStage1Complete = () => {
    setProgress(prev => ({ ...prev, build: true }));
    setActiveTab('test');
  };

  const handleStage2Complete = () => {
    setProgress(prev => ({ ...prev, test: true }));
    setActiveTab('explore');
  };

  const handleStage3Complete = () => {
    setProgress(prev => ({ ...prev, explore: true }));
    setActiveTab('quiz');
  };

  const tabs = [
    { id: 'build', name: '1. Build Switch', icon: Wrench, component: <Stage1_Build onComplete={handleStage1Complete} /> },
    { id: 'test', name: '2. Test Switch', icon: Play, component: <Stage2_Test onComplete={handleStage2Complete} />, locked: !progress.build },
    { id: 'explore', name: '3. Explore Sandbox', icon: Globe, component: <Stage3_Explore onComplete={handleStage3Complete} />, locked: !progress.build },
    { id: 'quiz', name: '4. Concept Quiz', icon: HelpCircle, component: <QuizPanel />, locked: !progress.build }
  ];

  return (
    <div className="app-container">
      {/* Premium Header */}
      <header className="header">
        <div>
          <div className="header-title">
            <BookOpen style={{ color: '#6366f1' }} size={24} />
            <h1>Interactive Switch Lab</h1>
          </div>
          <p className="header-subtitle">
            NCERT Science Chapter 3 — Electricity & Circuits (Activities 3.8 & 3.9)
          </p>
        </div>

        {/* Tabbed Navigation Bar */}
        <nav className="tabs-container">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isCompleted = progress[tab.id];
            
            return (
              <button
                key={tab.id}
                onClick={() => !tab.locked && setActiveTab(tab.id)}
                disabled={tab.locked}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                style={{
                  opacity: tab.locked ? 0.4 : 1,
                  cursor: tab.locked ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 0.9rem',
                  fontSize: '0.85rem'
                }}
              >
                <Icon size={14} />
                <span>{tab.name}</span>
                {isCompleted && (
                  <CheckCircle size={12} style={{ color: '#10b981', marginLeft: '0.15rem' }} />
                )}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Workspace content */}
      <main style={{ minHeight: '520px', marginBottom: '2rem' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {tabs.find(t => t.id === activeTab)?.component}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Educational Box */}
      <footer className="glass-panel" style={{ marginTop: '2rem', padding: '1.25rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <Info style={{ color: '#6366f1', flexShrink: 0 }} size={20} />
          <div>
            <h4 style={{ margin: 0, fontSize: '0.9rem', color: '#f8fafc' }}>
              Did you know? (Science Insights)
            </h4>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.825rem', color: '#94a3b8', lineHeight: '1.5' }}>
              An <strong>electric switch</strong> is a simple device that either completes (closes) or breaks (opens) an electrical circuit. 
              Switches used in household lighting and electronics work on this exact same principle—by moving a metal conductor into 
              and out of contact with the circuit terminals to start or halt the flow of current.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { TabNavigation } from './components/TabNavigation';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { MentoringSection } from './components/MentoringSection';

type Tab = 'about' | 'education' | 'experience' | 'skills' | 'publications' | 'mentoring';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <ProfileHeader />
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="p-8 md:p-12">
            {activeTab === 'about' && <AboutSection />}
            {activeTab === 'education' && <EducationSection />}
            {activeTab === 'experience' && <ExperienceSection />}
            {activeTab === 'skills' && <SkillsSection />}
            {activeTab === 'publications' && <PublicationsSection />}
            {activeTab === 'mentoring' && <MentoringSection />}
          </div>
        </div>
      </div>
    </div>
  );
}
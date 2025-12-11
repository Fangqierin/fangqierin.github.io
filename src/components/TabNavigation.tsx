import { User, GraduationCap, Briefcase, Award, FileText, Users } from 'lucide-react@0.487.0';

type Tab = 'about' | 'education' | 'experience' | 'skills' | 'publications' | 'mentoring';

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: 'about' as Tab, label: 'About Me', icon: User },
    { id: 'education' as Tab, label: 'Education', icon: GraduationCap },
    { id: 'experience' as Tab, label: 'Experience', icon: Briefcase },
    { id: 'publications' as Tab, label: 'Publications', icon: FileText },
    { id: 'mentoring' as Tab, label: 'Service', icon: Users },
    { id: 'skills' as Tab, label: 'Skills', icon: Award },
  ];

  return (
    <div className="border-b border-slate-200">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 transition-colors whitespace-nowrap ${
                isActive
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
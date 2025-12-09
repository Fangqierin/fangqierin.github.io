import { Calendar, MapPin } from 'lucide-react@0.487.0';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Postdoctoral Scholar',
      company: 'Vanderbilt University',
      department: 'Department/Program of Computer Science, School of Engineering',
      location: 'Nashville, TN, USA',
      period: 'Sep. 15, 2023 - Present',
      responsibilities: [
        'Conducting research on reinforcement learning for vehicle-to-building charging systems',
        'Published Best Paper Finalist at AAMAS 2025',
        'Developing online decision-making systems under uncertainty for V2B applications',
        'Collaborating on MILP-based route planning for pickup and delivery problems',
      ],
    },
    {
      title: 'PhD Candidate',
      company: 'University of California, Irvine',
      department: 'Distributed Systems Middleware Group & Information Systems Group',
      location: 'Irvine, CA, USA',
      period: 'Sep. 2017 - Sep. 13, 2023',
      responsibilities: [
        'Dissertation: Leveraging Mobility to Enhance IoT Applications',
        'Developed DOME system for drone-assisted monitoring of wildland fires',
        'Designed DragonFly platform for real-time high-rise fire monitoring using drones',
        'Created data ferry routing mechanisms for IoT data collection using public transit',
        'Mentored graduate students and served as TA for multiple courses',
        'Collaborated with external research teams at NTHU Taiwan and SRI International',
      ],
    },
    {
      title: 'Research Intern',
      company: 'SRI International',
      department: 'Computer Science Lab',
      location: 'Menlo Park, CA, USA',
      period: 'June - Sep. 2021',
      responsibilities: [
        'Experimented with 5G networks using Free5GC open source implementation',
        'Explored 5G Authentication and Key Agreement (AKA) process',
        'Used formal specification language Maude to verify security properties',
        'Designed test cases for security and robustness of 5G AKA procedures',
        'Analyzed scenarios involving malicious attackers and system malfunctions',
      ],
    },
  ];

  const projects = [
    {
      name: 'SPARx & DOME',
      period: 'Jun. 2021 - Jun. 2023',
      description: 'Smart Practices and Architectures for Prescribed Fire in California (UCRI funded)',
      highlights: [
        'Designed DOME cyber-physical system for drone-based wildfire monitoring',
        'Created physics-inspired task generation for autonomous drone operations',
        'Implemented multi-drone flight planning with coverage-quality tradeoffs',
      ],
    },
    {
      name: 'SciFire - DragonFly',
      period: 'Sep. 2019 - Feb. 2021',
      description: 'Smart Firefighting Project (NIST funded)',
      highlights: [
        'Built IoT platform for real-time high-rise fire monitoring with drone fleets',
        'Developed dynamic path scheduling for multiple drones',
        'Applied machine learning for event detection in RGB and thermal images',
        'Created data fusion approach for multi-source event detection',
      ],
    },
    {
      name: 'IoT Data Collection via Public Transit',
      period: 'Sep. 2017 - Feb. 2019',
      description: 'Network planning for urban IoT data collection',
      highlights: [
        'Proposed data ferry routing for IoT islands using public transit fleets',
        'Optimized upload point deployment to minimize cost while meeting requirements',
        'Evaluated network parameters using network simulators',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-6">Work Experience</h2>
        
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-purple-600 pl-6 pb-6 mb-6 last:mb-0">
            <h3 className="text-slate-900 mb-1">{exp.title}</h3>
            <p className="text-purple-600 mb-1">{exp.company}</p>
            {exp.department && <p className="text-sm text-slate-500 mb-3">{exp.department}</p>}
            
            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="space-y-2 text-slate-600">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-slate-900 mb-6">Major Research Projects</h2>
        
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-50 rounded-lg p-6 mb-4 last:mb-0">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-slate-900">{project.name}</h3>
              <span className="text-sm text-slate-500">{project.period}</span>
            </div>
            <p className="text-slate-600 mb-3 italic">{project.description}</p>
            <ul className="space-y-2 text-slate-600">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
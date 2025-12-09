export function SkillsSection() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C/C++', level: 90 },
      ],
    },
    {
      category: 'Networking & Simulation',
      skills: [
        { name: 'OMNET++', level: 90 },
        { name: 'NS-3', level: 85 },
        { name: 'SUMO', level: 85 },
        { name: 'GNS3', level: 80 },
        { name: 'Wireshark', level: 85 },
        { name: 'ONE Simulator', level: 80 },
      ],
    },
    {
      category: 'Data Science & Machine Learning',
      skills: [
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 90 },
        { name: 'MATLAB', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'TensorFlow', level: 85 },
        { name: 'Reinforcement Learning', level: 88 },
      ],
    },
    {
      category: 'System & Tools',
      skills: [
        { name: 'Linux CLI', level: 90 },
        { name: 'VMware', level: 85 },
        { name: 'OpenCV', level: 85 },
        { name: 'Raspberry Pi', level: 88 },
        { name: 'Drone Systems', level: 90 },
      ],
    },
  ];

  const publications = [
    {
      year: '2025',
      papers: [
        'Reinforcement learning-based approach for vehicle-to-building charging - AAMAS 2025 (Best Paper Finalist)',
        'Online decision-making under uncertainty for V2B systems - ICCPS 2025',
        'PDPTW-DB: MILP-Based Offline Route Planning - ICDCN 2025',
      ],
    },
    {
      year: '2024',
      papers: [
        'AMPHI: Adaptive Microservice Provisioning in Heterogeneous IoT Settings - SMARTCOMP 2024',
      ],
    },
    {
      year: '2023',
      papers: [
        'DOME: Drone-assisted Monitoring of Emergent Events for Wildland Fire Resilience - ICCPS 2023',
        'Demo Abstract: DOME – IoT-Based Monitoring Emergent Events - IOTDI 2023',
      ],
    },
    {
      year: '2021-2022',
      papers: [
        'Enhancing Situational Awareness with Adaptive Firefighting Drones - ACM MMsys 2022',
        'DragonFly: Drone-Assisted High-Rise Monitoring for Fire Safety - SRDS 2021',
        'WinSet: The First Multi-Modal Window Dataset - BuildSys 2021',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-slate-900">Technical Skills</h2>
      
      {skillCategories.map((category, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-slate-900">{category.category}</h3>
          
          <div className="space-y-4">
            {category.skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700">{skill.name}</span>
                  <span className="text-slate-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-slate-50 rounded-lg p-6 mt-8">
        <h3 className="text-slate-900 mb-4">Specialized Expertise</h3>
        <div className="grid md:grid-cols-2 gap-4 text-slate-600">
          <div>
            <p>System Building</p>
            <p className="text-sm text-slate-500 ml-4">End-to-end drone monitoring systems</p>
          </div>
          <div>
            <p>IoT & Sensor Networks</p>
            <p className="text-sm text-slate-500 ml-4">Cameras, sensors, and embedded devices</p>
          </div>
          <div>
            <p>Image Processing</p>
            <p className="text-sm text-slate-500 ml-4">Event detection and computer vision</p>
          </div>
          <div>
            <p>Network Protocols</p>
            <p className="text-sm text-slate-500 ml-4">5G, VANET, mobile networks</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-slate-900 mb-6">Selected Publications</h2>
        
        {publications.map((yearGroup, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-slate-900 mb-3">{yearGroup.year}</h3>
            <ul className="space-y-3 text-slate-600">
              {yearGroup.papers.map((paper, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">📄</span>
                  <span>{paper}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="mt-6 text-sm text-slate-500 italic">
          <p>Additional publications include journal articles in IEEE Transactions and multiple conference papers. 
          Total: 10+ conference papers and journal articles.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-slate-900 mb-4">Awards & Recognition</h3>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">🏆</span>
            <div>
              <p>CSP Rising Star - CPS Rising Stars 2023 Workshop</p>
              <p className="text-sm text-slate-500">Recognition for outstanding contributions to cyber-physical systems</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">🏆</span>
            <div>
              <p>Best Paper Finalist - AAMAS 2025</p>
              <p className="text-sm text-slate-500">For reinforcement learning research in V2B charging</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">🏆</span>
            <div>
              <p>Patent Holder</p>
              <p className="text-sm text-slate-500">Control method for transmit power in vehicular networks (China, No. 201510702461)</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-slate-50 rounded-lg p-6">
        <h3 className="text-slate-900 mb-4">Service & Outreach</h3>
        <ul className="space-y-2 text-slate-600">
          <li>• Program Co-Chair, 7th International Workshop On Design Automation For CPS and IoT (DESTION 2025)</li>
          <li>• Mentor for IoT-SITY project students (summers 2020, 2022)</li>
          <li>• Speaker at Pathways to Computing for Women of Color (PCWOC), UCI, 2023</li>
          <li>• Student Representative, Diverse Educational Community and Doctoral Experience (DECADE), UCI, 2019-2021</li>
          <li>• Speaker at Smart IoT Webinars, Taiwan, 2020</li>
        </ul>
      </div>
    </div>
  );
}

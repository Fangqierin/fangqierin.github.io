export function AboutSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900 mb-4">About Me</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          I am a Postdoctoral Scholar in the Department of Computer Science at Vanderbilt University's School of Engineering. 
          My research focuses on leveraging mobility to enhance IoT applications, with expertise in Internet of Things, 
          mobile wireless networks, mobile computing, cyber-physical systems, drones, and mobile sensing. I am currently 
          working on reinforcement learning (RL) and neural-symbolic AI approaches to address complex decision-making 
          challenges in cyber-physical systems.
        </p>
        <p className="text-slate-600 leading-relaxed">
          I completed my PhD in Networked Systems at UC Irvine, where my dissertation explored "Leveraging Mobility to 
          Enhance IoT Applications." Throughout my research career, I have collaborated with external research teams 
          including NSML at NTHU Taiwan and SRI research lab to explore diverse smart city settings and emergency response systems.
        </p>
      </div>

      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-slate-900 mb-4">Research Interests</h3>
        <div className="flex flex-wrap gap-2">
          {['Internet of Things', 'Mobile Wireless Networks', 'Mobile Computing', 'Cyber-Physical Systems', 
            'Drone Systems', 'Mobile Sensing', 'Reinforcement Learning', 'Neural-Symbolic AI', 'EV Charging Optimization',
            'Smart Cities', 'Emergency Response Systems'].map((interest, i) => (
            <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-slate-900 mb-4">Awards & Recognition</h3>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">🏆</span>
            <span><strong>AAMAS 2025 Best Paper Finalist</strong> – Reinforcement learning research for Vehicle-to-Building charging with heterogeneous agents</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">⭐</span>
            <span><strong>CPS Rising Star</strong> – Selected as a rising star in Cyber-Physical Systems, CPS Rising Stars 2023 Workshop</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Published 14 conference papers and 4 journal articles in top-tier venues including ICCPS, AAMAS, SRDS, and IEEE TITS</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Program Co-Chair for DESTION 2025 Workshop (7th International Workshop on Design Automation for CPS and IoT)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Patent holder for vehicular network communication methods (China, No. 201510702461)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
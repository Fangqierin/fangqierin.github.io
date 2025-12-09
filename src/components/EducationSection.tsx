import { Calendar, MapPin, Award } from 'lucide-react@0.487.0';

export function EducationSection() {
  const education = [
    {
      degree: 'PhD in Networked Systems',
      school: 'University of California, Irvine',
      location: 'Irvine, CA, USA',
      period: 'Sep. 2017 - Sep. 13, 2023',
      gpa: '3.882',
      achievements: [
        'Dissertation: Leveraging Mobility to Enhance IoT Applications',
        'Collaborated with NSML at NTHU Taiwan and SRI research lab',
        'Mentored graduate students',
        'TA for Computer and Communication Networks, Python, Networking Lab, and Distributed Systems',
      ],
    },
    {
      degree: 'Master of Software Engineering',
      school: 'Jilin University, College of Software',
      location: 'Jilin, China',
      period: 'Sep. 2014 - Jun. 19, 2017',
      gpa: '93.2/100 (CPA)',
      achievements: [
        'Conducted research on VANET and vehicular communication systems',
        'Published multiple journal articles and conference papers',
        'Developed distance-driven consensus quantification model',
      ],
    },
    {
      degree: 'Bachelor of Software Engineering',
      school: 'Jilin University, College of Software',
      location: 'Jilin, China',
      period: 'Sep. 2010 - Jul. 1, 2014',
      gpa: '3.3/4.0 (Overall), 3.51/4.0 (Major)',
      achievements: [
        'Strong foundation in software engineering principles',
        'Coursework in algorithms, data structures, and network systems',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-slate-900">Education</h2>
      
      {education.map((edu, index) => (
        <div key={index} className="border-l-4 border-blue-600 pl-6 pb-6 last:pb-0">
          <h3 className="text-slate-900 mb-2">{edu.degree}</h3>
          <p className="text-blue-600 mb-3">{edu.school}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{edu.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{edu.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>GPA: {edu.gpa}</span>
            </div>
          </div>

          <ul className="space-y-2 text-slate-600">
            {edu.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="bg-slate-50 rounded-lg p-6 mt-8">
        <h3 className="text-slate-900 mb-4">Research Focus Areas</h3>
        <div className="space-y-4 text-slate-600">
          <div>
            <p className="mb-2">PhD Research Areas:</p>
            <ul className="ml-4 space-y-1">
              <li>• Internet of Things and Mobile Wireless Networks</li>
              <li>• Cyber-Physical Systems and Drone-based Monitoring</li>
              <li>• Smart City Applications and Emergency Response</li>
              <li>• Mobile Computing and Mobile Sensing</li>
            </ul>
          </div>
          <div>
            <p className="mb-2">Master&apos;s Research:</p>
            <ul className="ml-4 space-y-1">
              <li>• Vehicular Ad-Hoc Networks (VANETs)</li>
              <li>• Cross-layer Network Optimization</li>
              <li>• QoS and Safety in Vehicular Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
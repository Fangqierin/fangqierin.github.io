export function MentoringSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-6">Academic Service</h2>
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-slate-900 mb-2">Program Co-Chair</h3>
            <p className="text-slate-600 mb-1">7th International Workshop on Design Automation for CPS and IoT (DESTION 2025)</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-slate-900 mb-2">Workshop Organization</h3>
            <p className="text-slate-600">Helped organize multiple sessions in MDM 2025 and Middleware 2026</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8">
        <h2 className="mb-6">Research Mentoring</h2>
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-slate-900">PhD Student Mentoring</h3>
              <span className="text-sm text-slate-600">2023 – 2025</span>
            </div>
            <p className="text-slate-600 mb-3">Vanderbilt University</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Led collaborative RL research with Nissan on Vehicle-to-Building optimization and VRP-related decision-making</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Mentored four PhD students, resulting in multiple publications and submissions across CPS, AI, and transportation venues</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-slate-900">Master's Student Supervision</h3>
              <span className="text-sm text-slate-600">2023</span>
            </div>
            <p className="text-slate-600 mb-3">Vanderbilt University</p>
            <p className="text-slate-700">Supervised four Master's students on a graduate-level systems implementation project</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-slate-900">Undergraduate Research Mentoring</h3>
              <span className="text-sm text-slate-600">Summer 2020, 2022</span>
            </div>
            <p className="text-slate-600 mb-3">University of California, Irvine</p>
            <p className="text-slate-700">Mentored undergraduate students in the IoT-SITY project</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8">
        <h2 className="mb-6">Teaching Experience</h2>
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-slate-900">Teaching Assistant</h3>
            <span className="text-sm text-slate-600">2017 – 2023</span>
          </div>
          <p className="text-slate-600 mb-3">University of California, Irvine</p>
          <p className="text-slate-700 mb-3">Courses:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1">•</span>
              <span>Communication and Networking</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1">•</span>
              <span>Networking Lab</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1">•</span>
              <span>Distributed Systems</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1">•</span>
              <span>Programming in C++ and Python</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8">
        <h2 className="mb-6">Outreach & Talks</h2>
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-slate-900 mb-2">Invited Speaker</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Pathways to Computing for Women of Color (PCWOC), 2021</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Smart IoT Webinars in Taiwan, 2021</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-slate-900 mb-2">Student Leadership</h3>
            <p className="text-slate-700">Student representative in DECADE at UCI (2019–2021)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

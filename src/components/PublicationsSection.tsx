export function PublicationsSection() {
  const conferencePublications = [
    {
      year: 2026,
      status: "Under review/Accepted",
      papers: [
        'Nath, V., Liu, Fangqi, He, G., Rogers, D., (2026). "SchoolRide: A Platform for School Bus Disruption Management and Operational Resilience". In: Proceedings of the 2026 ACM/IEEE International Conference on Cyber-Physical Systems (ICCPS), (Under review)',
        'Sen, R., Liu, Fangqi, Talusan, J. P., Pettet, A., (2026). "P-V2B: A Neuro-Symbolic Framework for Leveraging User Persistence in Vehicle-to-Building Charging". In: Proceedings of the 2026 ACM/IEEE International Conference on Cyber-Physical Systems (ICCPS). (Under review)',
        'Sen, R., Liu, Fangqi, Talusan, J. P., Pettet, A., (2026). "CONSENT: A Negotiation Framework for Leveraging User Flexibility in Vehicle-to-Building Charging under Uncertainty". In: AAMAS 2026 (Accepted)',

      ]
    },
    {
      year: 2025,
      status: "Published",
      papers: [
        'Khanna, A., Liu, Fangqi, Gupta, S., Pavia, S., Mukhopadhyay, A., Dubey, A., (2025). "PDPTW-DB: MILP-Based Offline Route Planning for PDPTW with Driver Breaks". In: Proceedings of the 26th International Conference on Distributed Computing and Networking (ICDCN), pp. 73–83.',
        'Liu, Fangqi, Sen, R., Talusan, J. P., Pettet, A., (2025). "Reinforcement Learning-Based Approach for Vehicle-to-Building Charging with Heterogeneous Agents and Long-Term Rewards". In: Proceedings of the 24th International Conference on Autonomous Agents and Multiagent Systems (AAMAS). 🏆 Best Paper Finalist',
        'Sen, R., Zhang, Y., Liu, Fangqi, Talusan, J. P., (2025). "Online Decision-Making Under Uncertainty for Vehicle-to-Building Systems". In: Proceedings of the ACM/IEEE 16th International Conference on Cyber-Physical Systems (with CPS-IoT Week 2025). DOI: 10.1145/3716550.3722024',
      ]
    },
    {
      year: 2024,
      status: "Published",
      papers: [
        'Li, Y., Liu, Fangqi, Hsu, C.-H., Venkatasubramanian, N., (2024). "AMPHI: Adaptive Mission-Aware Microservices Provisioning in Heterogeneous IoT Settings". In: Proceedings of the IEEE International Conference on Smart Computing (SMARTCOMP), pp. 63–70. DOI: 10.1109/SMARTCOMP61445.2024.00030',
      ]
    },
    {
      year: 2023,
      status: "Published",
      papers: [
        'Liu, Fangqi, Baijnath-Rodino, J. A., Chang, T.-C., Banerjee, T., Venkatasubramanian, N., (2023a). "DOME: Drone-Assisted Monitoring of Emergent Events for Wildland Fire Resilience". In: Proceedings of the ACM/IEEE International Conference on Cyber-Physical Systems (ICCPS), pp. 56–67.',
        'Liu, Fangqi, Chang, T.-C., Liu, K., Li, C., (2023b). "Demo Abstract: DOME – IoT-Based Monitoring of Emergent Events for Wildland Fire Resilience". In: Proceedings of the ACM/IEEE Conference on Internet of Things Design and Implementation (IoTDI), pp. 496–498.',
      ]
    },
    {
      year: 2022,
      status: "Published",
      papers: [
        'Fan, T.-Y., Liu, Fangqi, Fang, J.-W., Venkatasubramanian, N., Hsu, C.-H., (2022). "Enhancing Situational Awareness with Adaptive Firefighting Drones: Leveraging Diverse Media Types and Classifiers". In: Proceedings of the 13th ACM Multimedia Systems Conference, pp. 279–286.',
      ]
    },
    {
      year: 2021,
      status: "Published",
      papers: [
        'Fan, T.-Y., Tsai, T.-C., Hsu, C.-H., Liu, Fangqi, Venkatasubramanian, N., (2021). "WinSet: The First Multi-Modal Window Dataset for Heterogeneous Window States". In: Proceedings of the 8th ACM International Conference on Systems for Energy-Efficient Buildings, Cities, and Transportation (BuildSys), pp. 192–195. DOI: 10.1145/3486611.3486662',
        'Liu, Fangqi, Fan, T.-Y., Grant, C., Hsu, C.-H., Venkatasubramanian, N., (2021). "DragonFly: Drone-Assisted High-Rise Monitoring for Fire Safety". In: Proceedings of the 40th International Symposium on Reliable Distributed Systems (SRDS), pp. 331–342. DOI: 10.1109/SRDS53918.2021.00040',
      ]
    },
    {
      year: 2019,
      status: "Published",
      papers: [
        'Liu, Fangqi, Zhu, Q., Uddin, M. Y. S., Hsu, C.-H., Venkatasubramanian, N., (2019). "Cost-Effective Sensor Data Collection from Internet-of-Things Zones Using Existing Transportation Fleets". In: Proceedings of the IEEE International Conference on Smart Computing (SMARTCOMP), pp. 340–349. DOI: 10.1109/SMARTCOMP.2019.00071',
      ]
    }
  ];

  const journalPublications = [
    {
      year: 2025,
      status: "Under review",
      papers: [
        'Khanna, A., Liu, Fangqi, Gupta, S., Pavia, S., Mukhopadhyay, A., Dubey, A., (2025). "Dynamic Routing for the Pickup-and-Delivery Problem with Time Windows and Breaks". In: Pervasive and Mobile Computing.',
        'Li, Y., Liu, Fangqi, Chang, T.-Y., Hsu, C.-H., Venkatasubramanian, N., (2025). "Microservice Provisioning and Event-Driven Adaptation in Heterogeneous IoT Settings". In: Pervasive and Mobile Computing.',
      ]
    },
    {
      year: 2018,
      status: "Published",
      papers: [
        'Wang, J., Liu, Fangqi, Liu, Y., Deng, W., Li, L., (2018). "Distance-Driven Consensus Quantification". In: IEEE Transactions on Intelligent Transportation Systems 19.5, pp. 1471–1484. DOI: 10.1109/TITS.2017.2728125',
      ]
    },
    {
      year: 2017,
      status: "Published",
      papers: [
        'Liu, Fangqi, Liu, Y., Wang, J., Deng, W., Xu, S., (2017). "ADMB: Application-driven multihop broadcast for vehicular networks". In: International Journal of Communication Systems 30.15, e3306. DOI: 10.1002/dac.3306',
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-6">Conference Publications</h2>
        <div className="space-y-8">
          {conferencePublications.map((group, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-slate-900">{group.year}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  group.status === "Under review" 
                    ? "bg-amber-100 text-amber-700" 
                    : "bg-green-100 text-green-700"
                }`}>
                  {group.status}
                </span>
              </div>
              <ul className="space-y-4">
                {group.papers.map((paper, pIdx) => (
                  <li key={pIdx} className="text-slate-700 pl-4 border-l-2 border-blue-200">
                    {paper}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8">
        <h2 className="mb-6">Journal Publications</h2>
        <div className="space-y-8">
          {journalPublications.map((group, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-slate-900">{group.year}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  group.status === "Under review" 
                    ? "bg-amber-100 text-amber-700" 
                    : "bg-green-100 text-green-700"
                }`}>
                  {group.status}
                </span>
              </div>
              <ul className="space-y-4">
                {group.papers.map((paper, pIdx) => (
                  <li key={pIdx} className="text-slate-700 pl-4 border-l-2 border-blue-200">
                    {paper}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8">
        <h2 className="mb-4">Patent</h2>
        <p className="text-slate-700 pl-4 border-l-2 border-blue-200">
          Jian Wang, Fangqi Liu, Zhengxiang Wang. "A control method, devices, and vehicular equipment of transmitting power", China, No. 201510702461.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <p className="text-slate-700">
          <strong className="text-slate-900">Total:</strong> 14 conference publications, 4 journal publications, and 1 patent
        </p>
      </div>
    </div>
  );
}
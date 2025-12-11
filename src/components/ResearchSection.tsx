export function ResearchSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-6">Research Overview</h2>
        
        <div className="space-y-4 text-slate-700">
          <p>
            Modern cyber-physical systems (CPS) are rapidly evolving toward ecosystems of capable mobile agents, including aerial vehicles, autonomous vehicles, and large fleets of electric vehicles (EVs). These platforms have become increasingly mature in sensing and autonomy. Yet the real bottleneck for the next generation of CPS is no longer hardware, but decision-making: <em>how do we coordinate these agents to achieve complex, human-defined objectives under real-world physical and operational constraints?</em>
          </p>
          
          <p>
            Emerging CPS must address four fundamental challenges:
          </p>
          
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Perceive and interpret dynamic environments despite delay-sensitive sensing, intermittent connectivity, and limited infrastructure</li>
            <li>Coordinate heterogeneous agents through planning and scheduling to execute complex tasks while optimizing metrics such as latency, data quality, and sensing coverage</li>
            <li>Adapt to environmental uncertainty and dynamics such as wildfire evolution or vehicle mobility</li>
            <li>Optimize long-horizon objectives where current actions produce delayed impacts on system-level goals</li>
          </ul>
          
          <p>
            Motivated by these challenges, my research develops CPS systems that integrate mobile agents and operate in real, dynamic environments. My work includes mobile sensing platforms, drone-based fire monitoring in collaboration with California fire agencies, and Vehicle-to-Building (V2B) energy optimization in partnership with Nissan.
          </p>
        </div>
      </div>
    </div>
  );
}

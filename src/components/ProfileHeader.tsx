import { Mail, Phone, MapPin, Globe, GraduationCap, Linkedin, Github } from 'lucide-react@0.487.0';
import profilePhoto from "figma:asset/721d39bf145b101fb70f4d1c818b89803a2664cb.png";

export function ProfileHeader() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <img
          src={profilePhoto}
          alt="Fangqi Liu"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
        />
        
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-white mb-2">Fangqi Liu</h1>
          <p className="text-xl text-blue-100 mb-4">Postdoctoral Scholar in Computer Science</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Fangqi.liu@vanderbilt.edu</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (949) 247-1668</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Vanderbilt University</span>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            {/* <a href="https://sites.google.com/a/uci.edu/fangqi-liu/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
              <Globe className="w-5 h-5 text-white" />
            </a> */}
            <a href="https://scholar.google.com/citations?user=4utO7BMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
              <GraduationCap className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/%E6%96%B9%E7%90%AA-%E5%88%98-46214a161/?locale=en_US" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="https://github.com/Fangqierin" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
              <Github className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
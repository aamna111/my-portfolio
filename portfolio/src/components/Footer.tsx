import { Mail, Linkedin, Github, Phone } from "lucide-react"

export const Footer=()=>{
    return(
        <section id="contact" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Available for challenging opportunities. Let's discuss how I can contribute to your team.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { icon: <Mail size={24} />, label: "Email" },
              { icon: <Linkedin size={24} />, label: "LinkedIn" },
              { icon: <Github size={24} />, label: "GitHub" },
              { icon: <Phone size={24} />, label: "Phone" }
            ].map((contact, index) => (
              <a
                key={index}
                href="#"
                className="p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
              >
                <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                  {contact.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
}
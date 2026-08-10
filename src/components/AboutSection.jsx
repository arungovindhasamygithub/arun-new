import {
  Monitor,
  Server,
  Zap,
  Rocket,
  Users,
  Briefcase
} from "lucide-react";

export const AboutSection = () => {
  const DesignationData = [
    {
      id: 1,
      icon: Monitor, 
      title: "Full-Stack Web Development",
      description:
        "Building scalable, responsive, and high-performance interfaces using HTML, CSS, JavaScript, ReactJS, and Next.js.",
    },
    {
      id: 2,
      icon: Server, 
      title: "Backend Development & APIs",
      description:
        "Developing robust backend architectures and integrating RESTful APIs using Python, Django, Flask, and Node.js.",
    },
    {
      id: 3,
      icon: Zap, 
      title: "AI & Automation Strategy",
      description:
        "Leading AI-powered application development and implementing seamless workflow automations using n8n.",
    },
    {
      id: 4,
      icon: Users, 
      title: "Technical Workshops & Training",
      description:
        "Conducting practical, project-driven sessions on full-stack development, live coding, and career readiness for student communities.",
    },
    {
      id: 5,
      icon: Rocket, 
      title: "From Idea to Deployment",
      description:
        "Managing the complete project lifecycle—building, hosting, and shipping real-world applications across various industries.",
    },
    {
      id: 6,
      icon: Briefcase, 
      title: "Tech Leadership & Entrepreneurship",
      description:
        "Driving business operations, scalable tech solutions, and industry collaborations as Chief Operating Officer.",
    },
  ];

  // Designation Card Component
  const Card = ({ icon: Icon, title, description }) => (
    <div className="gradient-border p-6 card-hover min-w-full">
      <div className="flex items-start gap-2 md:gap-4">
        <div className="p-2 md:p-3 rounded-full bg-primary/10">
          <Icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-md md:text-lg">{title}</h4>
          <p className="text-muted-foreground text-justify leading-normal text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold animate-fade-in">
              COO & Full-Stack Developer
            </h3>

            <p className="text-justify md:text-lg tracking-tight text-muted-foreground animate-fade-in-delay-1">
              I am a technology entrepreneur and full-stack developer with over 6+ years of hands-on industry experience. Currently serving as the Chief Operating Officer at Inovate Solution Technology, I specialize in scalable web solutions, AI-powered applications, and workflow automation.
            </p>

            <p className="text-justify md:text-lg tracking-tight text-muted-foreground animate-fade-in-delay-2">
              Beyond development, I am a passionate workshop trainer and tech speaker. I conduct practical, project-driven sessions for colleges, bridging the gap between academic theory and real-world deployment with live coding, project walkthroughs, and industry guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start animate-fade-in-delay-3">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://www.canva.com/design/DAGPZ28zKoU/-FySt1oYRIb9efY192ZrRw/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 animate-fade-in-delay-4 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Scrollable Designation Cards */}
          <div className="relative h-auto md:h-[460px] overflow-visible md:overflow-hidden">
            <div className="space-y-6 pr-2 will-change-transform md:animate-auto-scroll">
              {DesignationData.map((item) => (
                <Card
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

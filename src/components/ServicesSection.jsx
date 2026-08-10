import React from "react";
import {
  Monitor,
  Server,
  Zap,
  Users,
  Rocket,
  Search,
  BookOpen,
  Briefcase,
} from "lucide-react";

const ServicesSection = () => {
  // Services Data
  const Services = [
    {
      id: 1,
      icon: Monitor, 
      title: "Full-Stack Web Development",
      description:
        "Building modern, responsive, and high-performance user interfaces using HTML, CSS, JavaScript, ReactJS, and Next.js.",
    },
    {
      id: 2,
      icon: Server, 
      title: "Backend Development & APIs",
      description:
        "Creating robust backend architectures and integrating secure RESTful APIs using Python, Django, Flask, and Node.js.",
    },
    {
      id: 3,
      icon: Zap, 
      title: "AI & Workflow Automation",
      description:
        "Implementing AI-powered applications and designing seamless workflow automations using n8n to boost operational efficiency.",
    },
    {
      id: 4,
      icon: Users, 
      title: "Technical Workshops",
      description:
        "Conducting hands-on, project-driven training sessions for colleges, focusing on live coding and real-world industry practices.",
    },
    {
      id: 5,
      icon: Rocket, 
      title: "End-to-End Deployment",
      description:
        "Managing the complete project lifecycle from initial idea and architecture to hosting and shipping scalable applications.",
    },
    {
      id: 6,
      icon: Search, 
      title: "SEO & Digital Presence",
      description:
        "Optimizing digital platforms with SEO fundamentals, integrating CMS platforms, and building personal brands for developers.",
    },
    {
      id: 7,
      icon: BookOpen, 
      title: "Career Readiness Mentorship",
      description:
        "Guiding students through industry expectations, project portfolio building, and interview preparation to bridge the academic gap.",
    },
    {
      id: 8,
      icon: Briefcase, 
      title: "Tech Strategy & Consulting",
      description:
        "Offering architectural guidance, scalable business solutions, and operational strategy based on tech entrepreneurship experience.",
    },
  ];

  // Service Card
  const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
      <div className="gradient-border p-6 card-hover rounded-2xl min-w-full flex flex-col items-center gap-4 text-center">
        {/* Icon on top */}
        <div className="p-3 rounded-full bg-primary/10 transition duration-300">
          <Icon className="h-8 w-8 text-primary" />
        </div>

        {/* Title */}
        <h4 className="font-semibold text-lg">{title}</h4>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    );
  };

  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Services</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I provide high-quality Full-Stack Development, AI & Automation solutions, and Technical Training to help businesses scale and empower the next generation of developers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

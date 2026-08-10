import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Robotics & AI Academy - Otomatiks",
    description:
      "Educational academy platform with advanced content management, SEO optimization, and automated workflows via Pabbly Connect.",
    tags: ["Next.js", "Tailwind CSS", "Google App Script", "Contentful CMS", "Pabbly Connect", "SEO"],
    demoUrl: "https://www.otomatiks.com",
  },
  {
    id: 2,
    title: "Corporate Website - Firstchoice Supplies",
    description:
      "Corporate B2B website optimized for high performance, server-side rendering, and a seamless user experience.",
    tags: ["Next.js", "Tailwind CSS", "Google App Script"],
    demoUrl: "https://www.firstchoice.supplies",
  },
  {
    id: 3,
    title: "Library and Organization - Book Buddy",
    description:
      "Comprehensive library organization platform featuring secure user-based authentication and scalable cloud storage.",
    tags: ["Django", "Cloudinary", "Render", "Admin Panel (CMS)", "Auth"],
    demoUrl: "https://www.book-buddy.in",
  },
  {
    id: 4,
    title: "Robotica Event - Otomatiks",
    description:
      "Custom event evaluation platform built with a robust Python backend, user authentication, and full admin panel control.",
    tags: ["Flask", "Python", "Auth", "Admin Panel (CMS)", "Neon"],
    demoUrl: "https://www.arun-evaluation.vercel.app",
  },
  {
    id: 5,
    title: "FlipBook - Book Buddy",
    description:
      "Full-stack web application for managing and displaying digital flipbooks, integrated with blob storage for media handling.",
    tags: ["Node.js", "Python", "Blob Storage", "Neon", "Vercel"],
    demoUrl: "https://www.flip-book-frontend.vercel.app",
  },
  {
    id: 6,
    title: "Event - Robotica 2026",
    description:
      "Interactive and responsive event website designed for fast loading and cross-device compatibility.",
    tags: ["HTML", "CSS", "JS", "Tailwind CSS", "Google App Script"],
    demoUrl: "https://www.robotica.org.in",
  },
  {
    id: 7,
    title: "Academy - Qbee Academy",
    description:
      "Dynamic coaching academy platform integrated with Google App Script for automated operations and inquiries.",
    tags: ["React.js", "Bootstrap", "Google App Script"],
    demoUrl: "https://www.qbeeacademy.in",
  },
  {
    id: 8,
    title: "Play School - SK Kids",
    description:
      "Engaging and child-friendly play school interface detailing educational programs, admissions, and interactive galleries.",
    tags: ["HTML", "CSS", "JS", "Tailwind CSS", "Google App Script"],
    demoUrl: "https://www.skkidsplayschool.com",
  },
  {
    id: 9,
    title: "E-Learning - Otomatiks",
    description:
      "Dedicated e-learning storefront featuring secure Clerk authentication and dynamic course enrollment capabilities.",
    tags: ["React.js", "Bootstrap", "Clerk", "Auth"],
    demoUrl: "https://www.otomatikscourse.shop",
  },
  {
    id: 10,
    title: "Digital Coding Platform",
    description:
      "A digital environment for coding education, equipped with a custom admin CMS for managing curriculum and users.",
    tags: ["Flask", "Python", "Auth", "Admin Panel (CMS)"],
    demoUrl: "https://www.copack.online",
  },
  {
    id: 11,
    title: "Event - Dreamland Entertainment",
    description:
      "Event management and entertainment platform featuring secure user authentication and administrative controls.",
    tags: ["Flask", "Python", "Auth", "Admin Panel (CMS)"],
    demoUrl: "https://www.dreamlandentertainment.org",
  },
  {
    id: 12,
    title: "Eco Challenge Hub",
    description:
      "Environment-focused platform built with robust backend authentication and content management capabilities.",
    tags: ["Flask", "Python", "Auth", "Admin Panel (CMS)"],
    demoUrl: "https://www.ecochallengehub.online",
  },
  {
    id: 13,
    title: "Car Service - Mech Zone",
    description:
      "Professional corporate web application designed to streamline automotive service operations and client bookings.",
    tags: ["Flask", "Python", "Auth", "Admin Panel (CMS)"],
    demoUrl: "https://www.mechzoneautomotive.shop",
  },
  {
    id: 14,
    title: "Graphics Design Portfolio",
    description:
      "A curated Pinterest portfolio showcasing comprehensive graphic design works, marketing posters, and branding visuals.",
    tags: ["Marketing Posters", "Videos", "Canva"],
    demoUrl: "https://in.pinterest.com/arungwork63",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my recent full-stack applications, automated platforms, and corporate web solutions. Each project reflects a focus on scalable architecture and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full border border-border/50"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="relative group mb-4">
                  <div className="flex flex-wrap gap-2 overflow-hidden md:max-h-10 md:group-hover:max-h-40 transition-all duration-300 ease-in-out">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`py-1 px-2 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground
                                  ${index >= 3 ? "md:hidden md:group-hover:inline-flex" : ""}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.tags.length > 3 && (
                    <div className="text-xs text-muted-foreground mt-2 hidden md:block md:group-hover:hidden">
                      +{project.tags.length - 3} more
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-justify text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-border/50">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1 text-sm font-medium"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

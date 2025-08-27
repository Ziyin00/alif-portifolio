import Image from 'next/image';
import Link from 'next/link';

// Data for the project cards to keep the component clean and scalable
const projects = [
  {
    imageSrc: '/zadul-mead_app.jpg',
    title: 'Zadul-Mead - Elearning Application',
    description: 'A mobile-first religious eLearning app combining tradition with technology. With live classes, structured courses, progress tracking, and community engagement, it makes spiritual learning accessible anytime, anywhere.',
    tags: ['Mobile App', 'E-Learning', 'UI/UX', 'SaaS'],
    link: 'https://zadalmead.com/',
  },
  {
    imageSrc: '/voomGo.jpg',
    title: 'Zyli - Ride and Delivery Service',
    description: 'A secure, reliable platform connecting users with drivers for rides and on-demand deliveries. Zyli offers real-time tracking, seamless payments, and a smooth user experience for smarter mobility.',
    tags: ['Ride-Hailing', 'Delivery', 'On-Demand Service', 'Web App'],
    link: '',
  },
  {
    imageSrc: '/zadul-mead_web.jpg',
    title: 'Zadul-Mead - Elearning Website',
    description: 'A responsive eLearning website built to make religious education accessible worldwide. With live sessions, easy course navigation, and modern learning tools, it connects students and scholars in a meaningful way.',
    tags: ['Website', 'E-Learning', 'Web Development', 'Education'],
    link: 'https://zadalmead.com/',
  },
  // Duplicate projects to ensure a seamless "infinite" loop effect
  // In a real-world scenario with many projects, you might dynamically
  // duplicate only enough to fill the "gap" for the animation.
  {
    imageSrc: '/zadul-mead_app.jpg',
    title: 'Zadul-Mead - Elearning Application',
    description: 'A mobile-first religious eLearning app combining tradition with technology. With live classes, structured courses, progress tracking, and community engagement, it makes spiritual learning accessible anytime, anywhere.',
    tags: ['Mobile App', 'E-Learning', 'UI/UX', 'SaaS'],
    link: 'https://zadalmead.com/',
  },
  {
    imageSrc: '/voomGo.jpg',
    title: 'Zyli - Ride and Delivery Service',
    description: 'A secure, reliable platform connecting users with drivers for rides and on-demand deliveries. Zyli offers real-time tracking, seamless payments, and a smooth user experience for smarter mobility.',
    tags: ['Ride-Hailing', 'Delivery', 'On-Demand Service', 'Web App'],
    link: '',
  },
  {
    imageSrc: '/zadul-mead_web.jpg',
    title: 'Zadul-Mead - Elearning Website',
    description: 'A responsive eLearning website built to make religious education accessible worldwide. With live sessions, easy course navigation, and modern learning tools, it connects students and scholars in a meaningful way.',
    tags: ['Website', 'E-Learning', 'Web Development', 'Education'],
    link: 'https://zadalmead.com/',
  },
];


export function SuccessStories() {
  return (
    <section className="bg-white py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center relative mb-16">
          <div className="absolute -top-8 -right-4 flex items-center">
            <Image
              src="/avatar.png"
              alt="avatar"
              width={70}
              height={70}
            />
          </div>
          <p className="text-base font-semibold leading-7 text-blue-600">Projects</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Discover Our Success Stories
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Behind every great innovation is a passionate and skilled team. Meet the brilliant minds at Arsion Tech Group who bring ideas to life with creativity and expertise.
          </p>
        </div>

        {/* Slider Container */}
        <div className="slider-container">
          <div className="slider-track group">
            {projects.map((project, index) => (
              <div key={project.title + index} className="slider-item">
                <div className="bg-slate-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <Link href={project.link} className="overflow-hidden rounded-xl block flex-shrink-0">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="rounded-xl w-full h-auto object-cover transform transition duration-500 hover:scale-110"
                    />
                  </Link>

                  <div className="mt-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold leading-8 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600 flex-grow">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 flex-shrink-0">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';
import Link from 'next/link';

// Data for the project cards to keep the component clean and scalable
const projects = [
  {
    imageSrc: '/zadul-mead_app.jpg', 
    title: 'Zadul-Mead - Elearning Application',
    description: 'A mobile-first religious eLearning platform that combines tradition with technology. Featuring live classes, structured courses, progress tracking, interactive assessments, and community engagement, it empowers learners to access spiritual knowledge anytime, anywhere in a modern and meaningful way.',
    tags: ['Mobile App', 'E-Learning', 'UI/UX', 'SaaS'],
    link: 'https://zadalmead.com/', 
  },
  {
    imageSrc: '/voomGo.jpg', 
    title: 'Zyli - Ride and Delivery Service',
    description: 'A fast, secure, and reliable platform that connects users with drivers for rides and on-demand deliveries. Zyli offers real-time tracking, seamless payments, and a user-friendly experience making transportation and delivery smarter and more convenient.',
    tags: ['Ride-Hailing', 'Delivery', 'On-Demand Service', 'Web App'],
    link: '',
  },
  {
    imageSrc: '/voomGo.jpg', 
    title: 'Zyli - Rider & Driver Management System',
    description: 'A fast, secure, and reliable platform that connects users with drivers for rides and on-demand deliveries. Zyli offers real-time tracking, seamless payments, and a user-friendly experience making transportation and delivery smarter and more convenient.',
    tags: ['Admin Dashboard', 'Management System', 'Payments', 'Web Platform'],
    link: '', 
  },
  {
    imageSrc: '/zadul-mead_web.jpg', 
    title: 'Zadul-Mead - Elearning Website',
    description: 'A professional religious eLearning platform designed to make spiritual education accessible worldwide. With a responsive design, intuitive course navigation, live sessions, and seamless integration of modern learning tools, it connects students and scholars in a meaningful digital learning experience.',
    tags: ['Website', 'E-Learning', 'Web Development', 'Education'],
    link: 'https://zadalmead.com/', 
  },
];

export function SuccessStories() {
  return (
    <section className="bg-white py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center relative">
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

        {/* Projects Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="bg-slate-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <Link href={project.link} className="overflow-hidden rounded-xl">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="rounded-xl w-full object-cover transform transition duration-500 hover:scale-110"
                />
              </Link>

              <div className="mt-6">
                <h3 className="text-xl font-semibold leading-8 text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Button */}
                {/* <div className="mt-6">
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
                  >
                    View Project
                  </Link>
                </div> */}


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

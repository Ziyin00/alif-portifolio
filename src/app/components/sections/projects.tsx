import Image from 'next/image';



// Data for the project cards to keep the component clean and scalable
const projects = [
  {
    imageSrc: '/project-1.png', // Replace with your image
    title: 'AirFlow X - SaaS Website Template',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    tags: ['SaaS', 'Webflow', 'UIUX'],
  },
  {
    imageSrc: '/project-2.png', // Replace with your image
    title: 'AirExploreX - Tourism Website Template',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    tags: ['Tag one', 'Tag two', 'Tag three'],
  },
  {
    imageSrc: '/project-3.png', // Replace with your image
    title: 'AirTach SaaS Webflow Website Template',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    tags: ['Tag one', 'Tag two', 'Tag three'],
  },
    {
    imageSrc: '/project-4.png', // Replace with your image
    title: 'AirFlow - SaaS Website Template',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    tags: ['SaaS', 'Software', 'Webflow'],
  },
];

export function SuccessStories() {
  return (
    <section className="bg-white py-24 sm:py-32" id='projects'>
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
            Behind every great innovation is a passionate and skilled team. Meet the brilliant minds at Alif Tech Group who bring ideas to life with creativity and expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="bg-slate-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
             <div className="overflow-hidden rounded-xl">
  <Image
    src={project.imageSrc}
    alt={project.title}
    width={800}
    height={600}
    className="rounded-xl w-full object-cover transform transition duration-500 hover:scale-110"
  />
</div>

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
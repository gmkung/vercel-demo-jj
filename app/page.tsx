export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-2">Peter Pan</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">Next.js Developer</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:peter.pan@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              peter.pan@example.com
            </a>
            <span className="text-gray-400">•</span>
            <a href="https://github.com/peterpan" className="text-blue-600 dark:text-blue-400 hover:underline">
              github.com/peterpan
            </a>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 dark:text-gray-400">San Francisco, CA</span>
          </div>
        </header>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            About
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A passionate developer who has grown alongside Next.js, from its initial release to mastering 
            the App Router and React Server Components. My journey mirrors the evolution of modern web 
            development, starting with vanilla JavaScript and evolving into a Next.js expert.
          </p>
        </section>

        {/* Career Progression Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Career Progression
          </h2>
          <div className="space-y-8">
            {/* Stage 1: Vanilla JS */}
            <div className="relative pl-8 border-l-4 border-blue-500">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="mb-2">
                <h3 className="text-xl font-semibold">JavaScript Developer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">2014 - 2016</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Started as a frontend developer working with vanilla JavaScript, jQuery, and traditional 
                server-rendered applications. Built responsive websites using HTML, CSS, and JavaScript, 
                learning the fundamentals of DOM manipulation and event handling.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">jQuery</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">HTML/CSS</span>
              </div>
            </div>

            {/* Stage 2: React Era */}
            <div className="relative pl-8 border-l-4 border-green-500">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="mb-2">
                <h3 className="text-xl font-semibold">React Developer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">2016 - 2017</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Transitioned to React, learning component-based architecture, state management, and 
                modern JavaScript (ES6+). Built single-page applications using Create React App, 
                mastered hooks, context API, and Redux for state management.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Redux</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">React Router</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Webpack</span>
              </div>
            </div>

            {/* Stage 3: Early Next.js (Pages Router) */}
            <div className="relative pl-8 border-l-4 border-purple-500">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="mb-2">
                <h3 className="text-xl font-semibold">Next.js Developer - Pages Router Era</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">2017 - 2021</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Discovered Next.js v1.0 and quickly adopted it for production projects. Mastered file-based 
                routing, Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static 
                Regeneration (ISR). Built performant web applications with automatic code splitting and 
                optimized images.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Next.js Pages</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">SSR</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">SSG</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">API Routes</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Vercel</span>
              </div>
            </div>

            {/* Stage 4: Next.js 12-13 Transition */}
            <div className="relative pl-8 border-l-4 border-yellow-500">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="mb-2">
                <h3 className="text-xl font-semibold">Senior Next.js Developer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">2021 - 2022</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Explored Next.js 12 features including Middleware, Image Optimization improvements, and 
                experimental features. Led migration projects and mentored junior developers. Worked with 
                TypeScript extensively and built complex applications with advanced routing patterns.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Next.js 12</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Middleware</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Turbopack</span>
              </div>
            </div>

            {/* Stage 5: App Router Mastery */}
            <div className="relative pl-8 border-l-4 border-indigo-500">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
              <div className="mb-2">
                <h3 className="text-xl font-semibold">Next.js Expert - App Router Specialist</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">2022 - Present</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Early adopter of Next.js 13+ App Router and React Server Components. Mastered Server and 
                Client Components, Streaming, Suspense, and the new data fetching patterns. Built 
                high-performance applications leveraging Server Actions, Parallel Routes, and Intercepting 
                Routes. Currently exploring Next.js 14+ features including Partial Prerendering and 
                advanced caching strategies.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">App Router</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">RSC</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Server Actions</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Streaming</span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Next.js 14+</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Core Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-lg">Frontend</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Next.js (Pages & App Router)</li>
                <li>• React & React Server Components</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• JavaScript (ES6+)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">Backend & Tools</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Node.js</li>
                <li>• REST & GraphQL APIs</li>
                <li>• Vercel Deployment</li>
                <li>• Git & GitHub</li>
                <li>• Testing (Jest, React Testing Library)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Education
          </h2>
          <div>
            <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-400">San Francisco State University • 2010 - 2014</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Built with Next.js App Router • Last updated: {new Date().getFullYear()}</p>
        </footer>
      </div>
    </main>
  )
}
// pages/index.js
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { FiInstagram, FiMail, FiGithub } from 'react-icons/fi';
import { FaDribbble, FaGoogle, FaLinkedin, FaBehance } from 'react-icons/fa';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const skills = [
  { name: 'Communication', color: 'bg-green-400' },
  { name: 'Collaboration', color: 'bg-blue-400' },
  { name: 'Problem Solving', color: 'bg-purple-400' },
  { name: 'Responsiveness', color: 'bg-pink-400' },
  { name: 'UI Design', color: 'bg-indigo-400' },
  { name: 'Creative', color: 'bg-yellow-400' },
  { name: 'Code', color: 'bg-red-400' }
];

const workExperience = [
  {
    title: 'INTERN UI/UX Engineer',
    company: 'wavenet',
    duration: '6 months',
    technologies: ['Angular', 'React', 'CSS', 'JavaScript'],
    bgColor: 'bg-violet-900/20'
  },
  {
    title: 'Graphic Designer',
    company: 'fiver',
    type: 'freelancing',
    duration: '3+',
    icon: '⚡',
    bgColor: 'bg-purple-900/20'
  }
];

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#0a0118] text-white ${inter.className}`}>
      <Head>
        <title>Charitha Weerasekara - UI/UX Engineer</title>
        <meta name="description" content="Portfolio of Charitha Weerasekara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="my-4 bg-white/5 backdrop-blur-lg rounded-full">
            <ul className="flex justify-center space-x-8 py-3 text-sm">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact me</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <section className="text-center py-20">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
              <Image
                src="/avatar-3d.png"
                alt="3D Avatar"
                width={128}
                height={128}
                className="relative z-10 rounded-full"
              />
            </div>
            <div className="absolute -right-2 top-0 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full rotate-90 text-sm">
              WELCOME
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">
            I'm Charitha Weerasekara
            <div className="text-sm opacity-50 mt-1">I'm Charitha Weerasekara</div>
            <div className="text-xs opacity-30 mt-1">I'm Charitha Weerasekara</div>
          </h1>

          <h2 className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            UI/UX Engineer
          </h2>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm ${skill.color} bg-opacity-20 backdrop-blur-sm`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
          <div className="grid gap-6">
            {workExperience.map((work, index) => (
              <div
                key={index}
                className={`${work.bgColor} rounded-2xl p-6 backdrop-blur-lg`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {work.title}
                    </h3>
                    <p className="text-gray-400 mt-1">{work.company}</p>
                    <p className="text-sm text-gray-500 mt-2">{work.duration}</p>
                    {work.technologies && (
                      <div className="flex gap-2 mt-4">
                        {work.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"
                          >
                            <span className="text-xs">{tech[0]}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {work.icon && (
                    <div className="text-2xl">{work.icon}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Example Project */}
        <section className="py-16">
          <h3 className="text-sm text-purple-400 mb-2">Featured Project</h3>
          <h2 className="text-2xl font-bold mb-4">Example Project</h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
            <p className="text-gray-400 mb-4">
              A web app for visualizing personalized spotify data. View your
              top artists, top tracks, recently played tracks and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists.
            </p>
            <div className="flex gap-4">
              <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                🌞
              </span>
              <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                🌙
              </span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Get in Touch!</h2>
          <p className="text-gray-400 mb-8">
            Feel free to reach out to me—I'm just a message away!
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:opacity-90 transition">
            Contact me
          </button>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <SocialIcon Icon={FiInstagram} />
            <SocialIcon Icon={FaDribbble} />
            <SocialIcon Icon={FaGoogle} />
            <SocialIcon Icon={FiGithub} />
            <SocialIcon Icon={FiMail} />
            <SocialIcon Icon={FaLinkedin} />
            <SocialIcon Icon={FaBehance} />
          </div>
        </section>
      </main>
    </div>
  );
}

const SocialIcon = ({ Icon }) => (
  <a
    href="#"
    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition"
  >
    <Icon className="w-5 h-5" />
  </a>
);
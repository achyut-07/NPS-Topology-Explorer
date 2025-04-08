import React from 'react';
import { Users, BookOpen, Network } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Network className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">Network Topologies</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24">
        {/* Project Information */}
        <section className="bg-gray-800 rounded-xl p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Network Topologies Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold">Group Project</h3>
                </div>
                <p className="text-gray-300">
                  This project is developed by a team of students as part of their network studies.
                  It aims to provide an interactive learning experience about different network topologies.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold">Project Goals</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Understand different network topology types</li>
                  <li>• Compare advantages and disadvantages</li>
                  <li>• Visualize network structures</li>
                  <li>• Learn real-world applications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Understanding Network Topologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore different network topology types and learn how they shape modern computer networks.
            Click the button below to start exploring various network topologies.
          </p>
          <button
            onClick={onStart}
            className="px-8 py-4 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-xl font-semibold flex items-center mx-auto"
          >
            Start Exploring
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </section>
      </main>
    </div>
  );
};

export default LandingPage; 
import React, { useState } from 'react';
import { Network, Workflow, Zap, GitFork, GitMerge, GitBranch, Info, ArrowRight } from 'lucide-react';
import TopologyVisualizer from './components/TopologyVisualizer';
import ComparisonTable from './components/ComparisonTable';
import TopologyDetails from './components/TopologyDetails';
import LandingPage from './components/LandingPage';
import StarTopologyVisualizer from './components/StarTopologyVisualizer';
import BusTopologyVisualizer from './components/BusTopologyVisualizer';
import RingTopologyVisualizer from './components/RingTopologyVisualizer';

const topologies = [
  {
    id: 'bus',
    name: 'Bus Topology',
    icon: Workflow,
    description: 'All devices are connected to a single central cable.',
    image: '/images/bus-topology.jpg'
  },
  {
    id: 'ring',
    name: 'Ring Topology',
    icon: GitBranch,
    description: 'Devices are connected in a circular chain.',
    image: '/images/ring-topology.jpg'
  },
  {
    id: 'star',
    name: 'Star Topology',
    icon: Zap,
    description: 'All devices connect to a central hub.',
    image: '/images/star-topology.jpg'
  },
  {
    id: 'mesh',
    name: 'Mesh Topology',
    icon: GitMerge,
    description: 'Every device is connected to every other device.',
    image: '/images/mesh-topology.jpg'
  },
  {
    id: 'tree',
    name: 'Tree Topology',
    icon: GitFork,
    description: 'Devices are connected in a hierarchical structure.',
    image: '/images/tree-topology.jpg'
  }
];

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [selectedTopology, setSelectedTopology] = useState(topologies[0]);
  const [showComparison, setShowComparison] = useState(false);
  const [showVisualization, setShowVisualization] = useState(false);

  if (showLandingPage) {
    return <LandingPage onStart={() => setShowLandingPage(false)} />;
  }

  if (showVisualization) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <header className="bg-black/30 backdrop-blur-sm fixed w-full z-10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Network className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold">Network Topologies</h1>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowVisualization(false)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <span>Back to Topologies</span>
              </button>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 pt-24">
          {selectedTopology.id === 'star' && <StarTopologyVisualizer />}
          {selectedTopology.id === 'bus' && <BusTopologyVisualizer />}
          {selectedTopology.id === 'ring' && <RingTopologyVisualizer />}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Network className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">Network Topologies</h1>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowLandingPage(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <span>Back to Home</span>
            </button>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Info className="h-5 w-5" />
              <span>{showComparison ? 'Hide Comparison' : 'Compare All'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24">
        {/* Topology Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {topologies.map((topology) => (
            <button
              key={topology.id}
              onClick={() => {
                setSelectedTopology(topology);
                if (topology.id === 'star' || topology.id === 'bus' || topology.id === 'ring') {
                  setShowVisualization(true);
                }
              }}
              className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                selectedTopology.id === topology.id
                  ? 'bg-blue-600 shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <topology.icon className="h-12 w-12 mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{topology.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{topology.description}</p>
              <div className="flex items-center justify-center text-blue-400">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </button>
          ))}
        </div>

        {showComparison ? (
          <ComparisonTable />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TopologyVisualizer topology={selectedTopology} />
            <TopologyDetails topology={selectedTopology} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
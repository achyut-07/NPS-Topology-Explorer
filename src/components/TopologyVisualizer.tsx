import React from 'react';

interface TopologyVisualizerProps {
  topology: {
    id: string;
    name: string;
    image: string;
  };
}

const TopologyVisualizer: React.FC<TopologyVisualizerProps> = ({ topology }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 transform transition-all hover:scale-[1.02]">
      <h3 className="text-2xl font-bold mb-4">{topology.name} Visualization</h3>
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <img
          src={topology.image}
          alt={`${topology.name} visualization`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </div>
  );
};

export default TopologyVisualizer;
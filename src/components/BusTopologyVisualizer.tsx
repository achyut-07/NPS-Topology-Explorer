import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const BusTopologyVisualizer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [reset, setReset] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleReset = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
      setIsPlaying(false);
      setReset(!reset);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Bus Topology Visualization</h2>
        <div className="flex space-x-4">
          <button
            onClick={handlePlayPause}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="h-5 w-5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-5 w-5" />
                <span>Play</span>
              </>
            )}
          </button>
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <RotateCcw className="h-5 w-5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
        {/* Video Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            ref={videoRef}
            src="/videos/bus-topology.mp4"
            className="w-full h-full object-contain"
            controls={false}
            playsInline
            preload="auto"
            onError={(e) => console.error('Video error:', e)}
          />
        </div>

        {/* Overlay Information */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• All devices share a single communication line</li>
                <li>• Simple and cost-effective design</li>
                <li>• Easy to install and extend</li>
                <li>• Limited cable length and performance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Flow</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Data travels in both directions on the bus</li>
                <li>• Only one device can transmit at a time</li>
                <li>• All devices receive the data</li>
                <li>• Collision detection and handling required</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Information */}
      <div className="mt-6 text-sm text-gray-400">
        <p>Use the play/pause button to control the animation and reset to start over.</p>
      </div>
    </div>
  );
};

export default BusTopologyVisualizer; 
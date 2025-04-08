import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface TopologyDetailsProps {
  topology: {
    id: string;
    name: string;
  };
}

const topologyInfo: Record<string, {
  advantages: string[];
  disadvantages: string[];
  applications: string[];
  description: string;
}> = {
  bus: {
    description: 'Bus topology is a network type where every computer and network device is connected to a single cable.',
    advantages: [
      'Easy to install and extend',
      'Requires less cable length',
      'Cost-effective for small networks'
    ],
    disadvantages: [
      'Limited cable length',
      'Performance issues with heavy traffic',
      'If backbone line breaks, network fails'
    ],
    applications: [
      'Small office networks',
      'School computer labs',
      'Simple industrial control systems'
    ]
  },
  ring: {
    description: 'Ring topology connects each device to exactly two other devices, forming a single continuous pathway.',
    advantages: [
      'Equal access for all devices',
      'Simple to install and configure',
      'Performs well under heavy load'
    ],
    disadvantages: [
      'Single point of failure affects all devices',
      'Adding/removing devices disrupts network',
      'Troubleshooting can be difficult'
    ],
    applications: [
      'Local Area Networks (LANs)',
      'Factory automation systems',
      'Early token ring networks'
    ]
  },
  star: {
    description: 'Star topology connects all devices to a central hub or switch.',
    advantages: [
      'Easy to modify without disrupting network',
      'Centralized management',
      'Fault isolation is simple'
    ],
    disadvantages: [
      'Requires more cable than bus topology',
      'Central hub failure affects entire network',
      'Higher cost due to central hub'
    ],
    applications: [
      'Office networks',
      'Home networks',
      'Modern Ethernet networks'
    ]
  },
  mesh: {
    description: 'Mesh topology connects each device directly to every other device in the network.',
    advantages: [
      'Highly reliable and redundant',
      'No traffic bottlenecks',
      'Excellent for security and privacy'
    ],
    disadvantages: [
      'Very expensive to implement',
      'Complex to set up and maintain',
      'Requires lots of connections'
    ],
    applications: [
      'Military networks',
      'Wireless networks',
      'Critical infrastructure'
    ]
  },
  tree: {
    description: 'Tree topology combines characteristics of star and bus topologies in a hierarchical structure.',
    advantages: [
      'Scalable and easy to extend',
      'Supports point-to-point wiring',
      'Suitable for large networks'
    ],
    disadvantages: [
      'Dependent on root node',
      'Maintenance can be complex',
      'Requires more cabling'
    ],
    applications: [
      'Large corporate networks',
      'Campus networks',
      'Distributed systems'
    ]
  }
};

const TopologyDetails: React.FC<TopologyDetailsProps> = ({ topology }) => {
  const info = topologyInfo[topology.id];

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-2xl font-bold mb-4">{topology.name} Details</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-semibold mb-2">Description</h4>
          <p className="text-gray-300">{info.description}</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Advantages</h4>
          <ul className="space-y-2">
            {info.advantages.map((advantage, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Disadvantages</h4>
          <ul className="space-y-2">
            {info.disadvantages.map((disadvantage, index) => (
              <li key={index} className="flex items-center space-x-2">
                <XCircle className="h-5 w-5 text-red-500" />
                <span>{disadvantage}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Common Applications</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {info.applications.map((application, index) => (
              <li
                key={index}
                className="bg-gray-700 rounded-lg px-4 py-2 text-sm"
              >
                {application}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopologyDetails;
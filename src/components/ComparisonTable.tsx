import React from 'react';
import { CheckCircle, XCircle, MinusCircle } from 'lucide-react';

const ComparisonTable = () => {
  const criteria = [
    'Cost',
    'Reliability',
    'Scalability',
    'Installation',
    'Performance',
    'Maintenance'
  ];

  const topologies = [
    'Bus',
    'Ring',
    'Star',
    'Mesh',
    'Tree'
  ];

  const ratings: Record<string, Record<string, 'high' | 'medium' | 'low'>> = {
    Bus: {
      Cost: 'low',
      Reliability: 'low',
      Scalability: 'low',
      Installation: 'high',
      Performance: 'medium',
      Maintenance: 'high'
    },
    Ring: {
      Cost: 'medium',
      Reliability: 'medium',
      Scalability: 'medium',
      Installation: 'medium',
      Performance: 'high',
      Maintenance: 'low'
    },
    Star: {
      Cost: 'medium',
      Reliability: 'high',
      Scalability: 'high',
      Installation: 'high',
      Performance: 'high',
      Maintenance: 'high'
    },
    Mesh: {
      Cost: 'high',
      Reliability: 'high',
      Scalability: 'medium',
      Installation: 'low',
      Performance: 'high',
      Maintenance: 'low'
    },
    Tree: {
      Cost: 'high',
      Reliability: 'medium',
      Scalability: 'high',
      Installation: 'medium',
      Performance: 'medium',
      Maintenance: 'medium'
    }
  };

  const getRatingIcon = (rating: 'high' | 'medium' | 'low') => {
    switch (rating) {
      case 'high':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'medium':
        return <MinusCircle className="h-6 w-6 text-yellow-500" />;
      case 'low':
        return <XCircle className="h-6 w-6 text-red-500" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 overflow-x-auto">
      <h3 className="text-2xl font-bold mb-6">Topology Comparison</h3>
      
      <div className="min-w-[800px]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-4 px-6 text-left">Criteria</th>
              {topologies.map(topology => (
                <th key={topology} className="py-4 px-6 text-center">{topology}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map(criterion => (
              <tr key={criterion} className="border-b border-gray-700">
                <td className="py-4 px-6 font-medium">{criterion}</td>
                {topologies.map(topology => (
                  <td key={`${topology}-${criterion}`} className="py-4 px-6">
                    <div className="flex justify-center">
                      {getRatingIcon(ratings[topology][criterion])}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-center space-x-8">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span>High</span>
        </div>
        <div className="flex items-center space-x-2">
          <MinusCircle className="h-5 w-5 text-yellow-500" />
          <span>Medium</span>
        </div>
        <div className="flex items-center space-x-2">
          <XCircle className="h-5 w-5 text-red-500" />
          <span>Low</span>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
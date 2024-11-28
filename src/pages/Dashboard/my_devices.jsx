import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyDevices = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [showGraphs, setShowGraphs] = useState({});
  const [timeRange, setTimeRange] = useState({});

  // Mock data for devices with detailed information
  const devices = [
    {
      id: "SB-001",
      name: "Smart Bulb",
      voltage: "220V",
      current: "0.5A",
      energy: "0.11kWh",
      power: "110W",
      frequency: "50Hz",
      registeredOn: "2023-05-15",
      state: "ON",
      pastValues: {
        '6days': {
          power: [95, 100, 105, 110, 108, 110],
          dates: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        '30days': {
          power: [92, 98, 103, 108, 112, 109, 95, 100, 105, 110, 108, 110, 115, 105, 102, 106, 109, 111, 107, 104, 101, 99, 102, 105, 108, 110, 113, 111, 108, 110],
          dates: Array.from({length: 30}, (_, i) => `Day ${i+1}`)
        }
      }
    },
    {
      id: "TV-102", 
      name: "Smart TV",
      voltage: "220V",
      current: "1.8A",
      energy: "0.396kWh",
      power: "396W",
      frequency: "50Hz",
      registeredOn: "2023-04-20",
      state: "OFF",
      pastValues: {
        '6days': {
          power: [380, 390, 385, 395, 392, 396],
          dates: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        '30days': {
          power: [375, 382, 388, 392, 385, 390, 388, 394, 389, 391, 387, 392, 396, 390, 385, 388, 392, 395, 389, 386, 383, 387, 390, 394, 397, 393, 388, 385, 390, 396],
          dates: Array.from({length: 30}, (_, i) => `Day ${i+1}`)
        }
      }
    }
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: isDark ? '#9CA3AF' : '#4B5563'
        }
      },
      x: {
        ticks: {
          color: isDark ? '#9CA3AF' : '#4B5563'
        }
      }
    }
  };

  const toggleGraph = (deviceId) => {
    setShowGraphs(prev => ({
      ...prev,
      [deviceId]: !prev[deviceId]
    }));
  };

  const toggleTimeRange = (deviceId) => {
    setTimeRange(prev => ({
      ...prev,
      [deviceId]: prev[deviceId] === '30days' ? '6days' : '30days'
    }));
  };

  return (
    <div className={`min-h-screen p-4 md:p-6 ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">My Devices</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {devices.map((device) => (
          <div 
            key={device.id}
            className={`rounded-lg shadow-lg p-4 md:p-6 ${
              isDark ? 'bg-gray-700' : 'bg-gray-50'
            }`}
            style={{ height: 'fit-content' }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold">{device.name}</h2>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  ID: {device.id}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                  <Download className="w-5 h-5" />
                </button>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  device.state === 'ON' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {device.state}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Voltage</p>
                <p className="font-semibold">{device.voltage}</p>
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Current</p>
                <p className="font-semibold">{device.current}</p>
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Energy</p>
                <p className="font-semibold">{device.energy}</p>
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Power</p>
                <p className="font-semibold">{device.power}</p>
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Frequency</p>
                <p className="font-semibold">{device.frequency}</p>
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Registered</p>
                <p className="font-semibold">{new Date(device.registeredOn).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <button 
                  onClick={() => toggleGraph(device.id)}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  Power Consumption Graph
                  {showGraphs[device.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showGraphs[device.id] && (
                  <button 
                    onClick={() => toggleTimeRange(device.id)}
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    {timeRange[device.id] === '30days' ? 'Show 6 Days' : 'Show 30 Days'}
                  </button>
                )}
              </div>
              
              {showGraphs[device.id] && (
                <div className="h-48 md:h-64">
                  <Line
                    options={chartOptions}
                    data={{
                      labels: device.pastValues[timeRange[device.id] || '6days'].dates,
                      datasets: [
                        {
                          data: device.pastValues[timeRange[device.id] || '6days'].power,
                          borderColor: isDark ? '#60A5FA' : '#3B82F6',
                          tension: 0.3
                        }
                      ]
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDevices;

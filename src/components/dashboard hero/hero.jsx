import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const DashboardHero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Mock data - replace with real data
  const recentDevices = [
    {
      name: "Smart Bulb",
      deviceId: "SB-001", 
      state: "ON",
      voltage: "12V"
    },
    {
      name: "Smart TV",
      deviceId: "TV-102",
      state: "OFF", 
      voltage: "220V"
    },
    {
      name: "Air Conditioner",
      deviceId: "AC-304",
      state: "ON",
      voltage: "240V"
    },
    {
      name: "Coffee Maker",
      deviceId: "CM-205",
      state: "OFF",
      voltage: "110V"
    },
    {
      name: "Security Camera",
      deviceId: "SC-405",
      state: "ON",
      voltage: "12V"
    }
  ];

  // Mock data for meters
  const meterData = [
    {
      title: "Voltage",
      value: 220,
      max: 250,
      unit: "V",
      color: "blue"
    },
    {
      title: "Current", 
      value: 10,
      max: 15,
      unit: "A",
      color: "green"
    },
    {
      title: "Power",
      value: 2200,
      max: 3000,
      unit: "W",
      color: "red"
    },
    {
      title: "Energy",
      value: 150,
      max: 200,
      unit: "kWh",
      color: "yellow"
    },
    {
      title: "Power Factor",
      value: 0.92,
      max: 1,
      unit: "",
      color: "purple" 
    }
  ];

  return (
    <div className={`min-h-screen p-4 md:p-6 ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="w-full lg:w-2/3">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Recent Devices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {recentDevices.map((device) => (
              <div 
                key={device.deviceId}
                className={`p-3 md:p-4 rounded-lg shadow-md ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-sm md:text-base">{device.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    device.state === 'ON' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}>
                    {device.state}
                  </span>
                </div>
                <div className={`text-xs md:text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Device ID: {device.deviceId}</p>
                  <p>Voltage: {device.voltage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Power Metrics</h2>
          <div className="grid gap-3 md:gap-4">
            {meterData.map((meter) => (
              <div 
                key={meter.title}
                className={`p-3 md:p-4 rounded-lg shadow-md ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-sm md:text-base">{meter.title}</h3>
                  <span className="font-bold text-sm md:text-base">
                    {meter.value}{meter.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-${meter.color}-500 h-2 rounded-full`}
                    style={{ width: `${(meter.value / meter.max) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>0</span>
                  <span>{meter.max}{meter.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;

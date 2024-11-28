import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Complaints() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newComplaint, setNewComplaint] = useState({
    title: '',
    description: ''
  });

  const generateId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await fetch('/get-complaints');
      if (!response.ok) {
        throw new Error('Error fetching complaints');
      }
      const data = await response.json();
      setComplaints(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const complaintData = {
      userId: generateId(),
      complaintId: generateId(),
      title: newComplaint.title,
      description: newComplaint.description,
      status: "Pending",
      date: new Date().toISOString().split('T')[0]
    };

    try {
      const response = await fetch('https://voltedge-backend.onrender.com/auth/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(complaintData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit complaint');
      }

      // Refresh complaints list
      fetchComplaints();
      setNewComplaint({ title: '', description: '' });
    } catch (err) {
      console.error('Error submitting complaint:', err);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto p-4 flex-grow">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Left Side - Complaint Cards */}
          <div className="md:w-1/2 flex flex-col">
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
              Previous Complaints
            </h2>
            <div className="space-y-4 flex-grow overflow-y-auto">
              {loading ? (
                <div className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Loading...
                </div>
              ) : error ? (
                <div className={`text-center p-8 rounded-lg ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>
                  <div className="text-4xl mb-4">😊</div>
                  <p className="animate-bounce">
                    Looks like we served you well, so you don't have any complaints!
                  </p>
                </div>
              ) : (
                complaints.map((complaint) => (
                  <div 
                    key={complaint.complaintId} 
                    className={`p-4 rounded-lg shadow-md transition-all duration-200 ${
                      isDark ? 'bg-gray-800 text-gray-100 hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{complaint.title}</h3>
                      <span className={`px-2 py-1 rounded text-sm ${
                        complaint.status === 'Pending' 
                          ? isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-200 text-yellow-800'
                          : isDark ? 'bg-green-900 text-green-200' : 'bg-green-200 text-green-800'
                      }`}>
                        {complaint.status}
                      </span>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {complaint.description}
                    </p>
                    <p className={`text-xs mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Submitted on: {complaint.date}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Side - Complaint Form */}
          <div className="md:w-1/2">
            <div className={`p-6 rounded-lg shadow-md transition-all duration-200 h-full ${
              isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
            }`}>
              <h2 className="text-xl font-bold mb-4">Lodge a New Complaint</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Title</label>
                  <input
                    type="text"
                    value={newComplaint.title}
                    onChange={(e) => setNewComplaint({...newComplaint, title: e.target.value})}
                    className={`w-full p-2 rounded-md border transition-colors duration-200 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 focus:bg-gray-600' 
                        : 'bg-gray-50 border-gray-300 text-gray-800 focus:bg-white'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Description</label>
                  <textarea
                    value={newComplaint.description}
                    onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})}
                    className={`w-full p-2 rounded-md border h-32 transition-colors duration-200 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 focus:bg-gray-600' 
                        : 'bg-gray-50 border-gray-300 text-gray-800 focus:bg-white'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-2 px-4 rounded-md transition-all duration-200 ${
                    isDark 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white shadow hover:shadow-lg'
                  }`}
                >
                  Submit Complaint
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

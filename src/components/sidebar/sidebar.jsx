import { Menu, Search, Home, Smartphone, MessageSquare, Heart, Settings, LogOut, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Sidebar = () => {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === 'dark';
	const [isOpen, setIsOpen] = useState(true);
	const { page } = useParams();

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	if (!isOpen) {
		return (
			<div className={`flex flex-col h-screen p-3 w-16 transition-all duration-300 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
				<div className="flex flex-col space-y-2">
					<button className="p-2 hover:bg-gray-700 rounded-md" onClick={toggleSidebar}>
						<Menu className={`w-5 h-5 ${isDark ? 'text-gray-100' : 'text-gray-800'}`} />
					</button>
					<button className="p-2 hover:bg-gray-700 rounded-md" onClick={toggleTheme}>
						{isDark ? (
							<Sun className="w-5 h-5 text-gray-100" />
						) : (
							<Moon className="w-5 h-5 text-gray-800" />
						)}
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className={`flex flex-col h-screen p-3 w-60 transition-all duration-300 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
			<div className="flex flex-col h-full">
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<h2>Dashboard</h2>
						<div className="flex items-center gap-2">
							<button className="p-2 hover:bg-gray-700 rounded-md" onClick={toggleTheme}>
								{isDark ? (
									<Sun className="w-5 h-5 text-gray-100" />
								) : (
									<Moon className="w-5 h-5 text-gray-800" />
								)}
							</button>
							<button className="p-2 hover:bg-gray-700 rounded-md" onClick={toggleSidebar}>
								<Menu className={`w-5 h-5 ${isDark ? 'text-gray-100' : 'text-gray-800'}`} />
							</button>
						</div>
					</div>
					<div className="relative">
						<span className="absolute inset-y-0 left-0 flex items-center py-4">
							<button type="submit" className="p-2 focus:outline-none focus:ring">
								<Search className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
							</button>
						</span>
						<input 
							type="search" 
							name="Search" 
							placeholder="Search..." 
							className={`w-full py-2 pl-10 text-sm rounded-md focus:outline-none ${
								isDark ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'
							} focus:${isDark ? 'bg-gray-700' : 'bg-gray-50'}`} 
						/>
					</div>
					<div className="flex-1">
						<ul className="pt-2 pb-4 space-y-1 text-sm">
							<li className="rounded-sm">
								<Link 
									to="/dashboard" 
									className={`flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 ${page === 'home' ? 'bg-gray-700 text-white' : ''}`}
								>
									<Home className={`w-5 h-5 ${page === 'home' ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`} />
									<span>Home</span>
								</Link>
							</li>
							<li className="rounded-sm">
								<Link 
									to="/dashboard/about" 
									className={`flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 ${page === 'about' ? 'bg-gray-700 text-white' : ''}`}
								>
									<Heart className={`w-5 h-5 ${page === 'about' ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`} />
									<span>About</span>
								</Link>
							</li>
							<li className="rounded-sm">
								<Link 
									to="/dashboard/my-devices" 
									className={`flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 ${page === 'my-devices' ? 'bg-gray-700 text-white' : ''}`}
								>
									<Smartphone className={`w-5 h-5 ${page === 'my-devices' ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`} />
									<span>My Devices</span>
								</Link>
							</li>
							<li className="rounded-sm">
								<Link 
									to="/dashboard/complaints" 
									className={`flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 ${page === 'complaints' ? 'bg-gray-700 text-white' : ''}`}
								>
									<MessageSquare className={`w-5 h-5 ${page === 'complaints' ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`} />
									<span>Complaints</span>
								</Link>
							</li>
							<li className="rounded-sm">
								<Link 
									to="/dashboard/contactus" 
									className={`flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 ${page === 'contactus' ? 'bg-gray-700 text-white' : ''}`}
								>
									<Settings className={`w-5 h-5 ${page === 'contactus' ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`} />
									<span>Contact Us</span>
								</Link>
							</li>
							<li className="rounded-sm">
								<Link 
									to="/dashboard/logout" 
									className={`flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 ${page === 'logout' ? 'bg-gray-700 text-white' : ''}`}
								>
									<LogOut className={`w-5 h-5 ${page === 'logout' ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`} />
									<span>Logout</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-auto flex items-center p-2 space-x-4">
					<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-lg bg-gray-500" />
					<div>
						<h2 className="text-lg font-semibold">Leroy Jenkins</h2>
						<span className="flex items-center space-x-1">
							<Link 
								to="/dashboard/profile" 
								className={`text-xs hover:underline ${page === 'profile' ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`}
							>
								View profile
							</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
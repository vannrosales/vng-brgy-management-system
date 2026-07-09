import { Head, Link, usePage } from '@inertiajs/react';
import DashboardSidebar from '@/Components/Dashboard/DashboardSidebar';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="flex min-h-screen bg-gray-50/50">
            {/* Left Persistent Sidebar */}
            <DashboardSidebar />

            {/* Main Content Column */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Header matching image_ee0036.jpg */}
                <header className="bg-white border-b border-gray-200 h-20 px-8 flex items-center justify-between sticky top-0 z-40">
                    <div className="flex-1">
                        {header ? (
                            header
                        ) : (
                            <h2 className="text-xl font-bold leading-tight text-gray-900">
                                V&G Smart Barangay
                            </h2>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Search Bar */}
                        <div className="relative hidden sm:block">
                            <input 
                                type="text" 
                                placeholder="Search services..." 
                                className="pl-9 pr-4 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 w-64"
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400 text-xs">&#128269;</span>
                        </div>

                        {/* Notification Bell */}
                        <button className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full" />
                            <span className="text-lg">&#128276;</span>
                        </button>

                        {/* User Profile Info */}
                        <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
                            <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-900 text-xs overflow-hidden shrink-0">
                                {user?.name ? user.name.split(' ').map(n => n[0]).join('') : 'JD'}
                            </div>
                            <div className="text-left hidden sm:block">
                                <p className="text-xs font-bold text-gray-900">{user?.name || 'Juan Dela Cruz'}</p>
                                <p className="text-[10px] text-green-600 font-medium">Verified Resident</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Body */}
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
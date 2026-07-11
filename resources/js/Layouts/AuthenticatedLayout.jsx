import React from 'react';
import { usePage } from '@inertiajs/react';
import DashboardSidebar from '@/Components/Dashboard/DashboardSidebar';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth?.user;

    return (
        <div className="flex min-h-screen bg-gray-50/50">
            {/* Left Persistent Sidebar (includes mobile responsive drawer) */}
            <DashboardSidebar />

            {/* Main Content Column */}
            <div className="flex-1 flex flex-col min-w-0 md:pl-0 pt-14 md:pt-0">
                {/* Top Header */}
                <header className="bg-white border-b border-gray-200 h-20 px-4 sm:px-8 flex items-center justify-between sticky top-0 md:top-0 z-30 shadow-2xs">
                    <div className="flex-1 truncate pr-4">
                        <h2 className="text-lg sm:text-xl font-bold leading-tight text-[#1B385D] truncate">
                            V&G Smart Barangay
                        </h2>  
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                        {/* Search Bar */}
                        <div className="relative hidden sm:block">
                            <input 
                                type="text" 
                                placeholder="Search services..." 
                                className="pl-9 pr-4 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B385D] w-52 lg:w-64"
                            />
                            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                        </div>

                        {/* Notification Bell */}
                        <button className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none rounded-xl hover:bg-gray-100 transition-colors">
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                            <BellIcon className="w-5 h-5" />
                        </button>

                        {/* User Profile Info */}
                        <div className="flex items-center gap-3 border-l pl-3 sm:pl-4 border-gray-200">
                            <div className="w-9 h-9 bg-[#1B385D]/10 rounded-full flex items-center justify-center font-bold text-[#1B385D] text-xs overflow-hidden shrink-0 shadow-inner">
                                {user?.name ? user.name.split(' ').map(n => n[0]).join('') : 'JD'}
                            </div>
                            <div className="text-left hidden sm:block">
                                <p className="text-xs font-bold text-gray-900">{user?.name || 'Juan Dela Cruz'}</p>
                                <p className="text-[10px] text-[#2D6A4F] font-bold">Verified Resident</p>
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
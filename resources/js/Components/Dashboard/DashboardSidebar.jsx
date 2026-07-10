import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
    Squares2X2Icon, 
    DocumentTextIcon, 
    ExclamationTriangleIcon, 
    NewspaperIcon, 
    Cog6ToothIcon, 
    PhoneIcon, 
    QuestionMarkCircleIcon, 
    ArrowRightOnRectangleIcon,
    BuildingLibraryIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline';

export default function DashboardSidebar() {
    const { url } = usePage();
    const [mobileOpen, setMobileOpen] = useState(false);

    // Helper function to check if the link is active
    const isActive = (path) => url.startsWith(path);

    // Refined active colors using the primary (#1B385D) background/text combo with a clean subtle look
    const getLinkClass = (path) => {
        const active = isActive(path);
        return `flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-all ${
            active 
                ? 'text-white bg-[#1B385D] font-bold shadow-sm' 
                : 'text-white/80 font-semibold hover:bg-white/5 hover:text-white'
        }`;
    };

    const getIconClass = (path) => {
        return `w-4 h-4 ${isActive(path) ? 'text-white' : 'text-white/80'}`;
    };

    const sidebarContent = (
        <div className="flex flex-col justify-between h-full p-5">
            <div>
                {/* Logo & Header */}
                <div className="flex items-center gap-3 mb-8 px-1">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                        <BuildingLibraryIcon className="w-5 h-5 text-[#2D6A4F]" />
                    </div>
                    <div>
                        <h1 className="font-bold text-[13px] leading-tight tracking-tight text-white">V&G Smart System</h1>
                        <p className="text-[10px] text-blue-200/70 font-normal">Local Governance Portal</p>
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="space-y-1 text-xs">
                    <Link href="/dashboard" onClick={() => setMobileOpen(false)} className={getLinkClass('/dashboard')}>
                        <Squares2X2Icon className={getIconClass('/dashboard')} /> Dashboard
                    </Link>
                    <Link href="/digital-services" onClick={() => setMobileOpen(false)} className={getLinkClass('/digital-services')}>
                        <DocumentTextIcon className={getIconClass('/digital-services')} /> Digital Services
                    </Link>
                    <Link href="/incident-reports" onClick={() => setMobileOpen(false)} className={getLinkClass('/incident-reports')}>
                        <ExclamationTriangleIcon className={getIconClass('/incident-reports')} /> Incident Reports
                    </Link>
                    <Link href="/community-news" onClick={() => setMobileOpen(false)} className={getLinkClass('/community-news')}>
                        <NewspaperIcon className={getIconClass('/community-news')} /> Community News
                    </Link>
                    <Link href="/settings" onClick={() => setMobileOpen(false)} className={getLinkClass('/settings')}>
                        <Cog6ToothIcon className={getIconClass('/settings')} /> Settings
                    </Link>
                </nav>
            </div>

            {/* Footer / Support / Logout */}
            <div className="space-y-3 pt-4 border-t border-blue-900/60">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-red-600 hover:bg-red-700 transition-colors text-white font-bold rounded-lg text-xs shadow-xs">
                    <PhoneIcon className="w-3.5 h-3.5 text-white" /> Emergency Hotline
                </button>
                <div className="space-y-0.5 text-xs text-white/90 font-medium">
                    <div className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg cursor-pointer">
                        <QuestionMarkCircleIcon className="w-4 h-4 text-white" /> Support
                    </div>
                    <Link href={route('logout')} method="post" as="button" className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg text-left text-white/90">
                        <ArrowRightOnRectangleIcon className="w-4 h-4 text-white" /> Logout
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile Header Bar with Hamburger */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#041933] text-white px-4 py-3 flex items-center justify-between border-b border-blue-900/60 shadow-md">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <BuildingLibraryIcon className="w-4 h-4 text-[#2D6A4F]" />
                    </div>
                    <span className="font-bold text-xs">V&G Smart System</span>
                </div>
                <button 
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
                >
                    {mobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Backdrop */}
            {mobileOpen && (
                <div 
                    onClick={() => setMobileOpen(false)} 
                    className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs transition-opacity"
                />
            )}

            {/* Mobile Drawer */}
            <aside className={`md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-[#041933] text-white transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} pt-14 md:pt-0`}>
                {sidebarContent}
            </aside>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 bg-[#041933] text-white flex-col justify-between min-h-screen shrink-0 sticky top-0">
                {sidebarContent}
            </aside>
        </>
    );
}
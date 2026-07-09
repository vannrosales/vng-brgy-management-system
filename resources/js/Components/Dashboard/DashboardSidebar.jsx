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
    BuildingLibraryIcon
} from '@heroicons/react/24/outline';

export default function DashboardSidebar() {
    const { url } = usePage();

    // Helper function to check if the link is active
    const isActive = (path) => url.startsWith(path);

    // Dynamic style classes for navigation items
    const getLinkClass = (path) => {
        const active = isActive(path);
        return `flex items-center gap-3 px-3.5 py-2.5 rounded-lg transition-all ${
            active 
                ? 'text-blue-950 bg-[#a7f3d0] font-bold' 
                : 'text-white/90 font-semibold hover:bg-white/5'
        }`;
    };

    const getIconClass = (path) => {
        return `w-4 h-4 ${isActive(path) ? 'text-blue-950' : 'text-white'}`;
    };

    return (
        <aside className="w-64 bg-[#041933] text-white flex flex-col justify-between min-h-screen p-5 shrink-0">
            <div>
                {/* Logo & Header */}
                <div className="flex items-center gap-3 mb-8 px-1">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                        <BuildingLibraryIcon className="w-5 h-5" />
                    </div>
                    <div>
                        <h1 className="font-bold text-[13px] leading-tight tracking-tight">V&G Smart System</h1>
                        <p className="text-[10px] text-blue-200/70 font-normal">Local Governance Portal</p>
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="space-y-1 text-xs">
                    <Link href="/dashboard" className={getLinkClass('/dashboard')}>
                        <Squares2X2Icon className={getIconClass('/dashboard')} /> Dashboard
                    </Link>
                    <Link href="/digital-services" className={getLinkClass('/digital-services')}>
                        <DocumentTextIcon className={getIconClass('/digital-services')} /> Digital Services
                    </Link>
                    <Link href="/incident-reports" className={getLinkClass('/incident-reports')}>
                        <ExclamationTriangleIcon className={getIconClass('/incident-reports')} /> Incident Reports
                    </Link>
                    <Link href="/community-news" className={getLinkClass('/community-news')}>
                        <NewspaperIcon className={getIconClass('/community-news')} /> Community News
                    </Link>
                    <Link href="#settings" className={getLinkClass('/settings')}>
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
        </aside>
    );
}
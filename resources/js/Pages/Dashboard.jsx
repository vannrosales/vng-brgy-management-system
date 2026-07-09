import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import WelcomeBanner from '@/Components/Dashboard/WelcomeBanner';
import QuickActions from '@/Components/Dashboard/QuickActions';
import CommunityNewsFeed from '@/Components/Dashboard/CommunityNewsFeed';
import BarangayStatus from '@/Components/Dashboard/BarangayStatus';
import UpcomingEvents from '@/Components/Dashboard/UpcomingEvents';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
        >
            <Head title="Dashboard" />

            <div className="flex min-h-screen bg-gray-50/50">

                {/* Main Content Area */}
                <div className="flex-1 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <WelcomeBanner />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <QuickActions />
                            <CommunityNewsFeed />
                        </div>

                        <div className="space-y-6">
                            <BarangayStatus />
                            <UpcomingEvents />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
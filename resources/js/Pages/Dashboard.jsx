import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WelcomeBanner from '@/Components/Dashboard/WelcomeBanner';
import { Head, usePage } from '@inertiajs/react';
import QuickActions from '@/Components/Dashboard/QuickActions';
import CommunityNewsFeed from '@/Components/Dashboard/CommunityNewsFeed';
import BarangayStatus from '@/Components/Dashboard/BarangayStatus';
import UpcomingEvents from '@/Components/Dashboard/UpcomingEvents';

export default function Dashboard({ pendingRequestsCount, upcomingMeeting }) {
    const { auth } = usePage().props;
    const userName = auth.user.name.split(' ')[0]; 

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <WelcomeBanner 
                    userName={userName} 
                    pendingCount={pendingRequestsCount} 
                    meetingTitle={upcomingMeeting?.title || 'upcoming town hall meeting'} 
                />
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
            
        </AuthenticatedLayout>
    );
}
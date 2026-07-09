import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FeaturedNewsHero from '@/Components/CommunityNews/FeaturedNewsHero';
import NewsCard from '@/Components/CommunityNews/NewsCard';
import UpcomingEventsSidebar from '@/Components/CommunityNews/UpcomingEventsSidebar';
import { Head } from '@inertiajs/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function CommunityNews({ auth }) {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Environment', 'Health', 'Events'];

    const updates = [
        {
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop',
            category: 'Health', categoryColor: 'bg-emerald-100 text-emerald-800', date: 'Oct 24, 2023',
            title: 'Barangay Vaccination Drive: Schedule for Seniors',
            excerpt: 'Join us this coming weekend for our scheduled health initiative aimed at protecting seniors...'
        },
        {
            image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=600&auto=format&fit=crop',
            category: 'Environment', categoryColor: 'bg-amber-100 text-amber-800', date: 'Oct 22, 2023',
            title: 'River Protection Program Reaches 1-Year Milestone',
            excerpt: 'Our volunteer-led program has successfully cleaned up kilograms of debris and planted...'
        }
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Community News" />
            <div className="flex min-h-screen bg-gray-50/50">
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="space-y-6 max-w-7xl mx-auto">
                        {/* Top Header & Search Bar matching image_efe05d.jpg */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h2 className="text-xl font-extrabold text-[#041933] tracking-tight">Community News and Announcements Hub</h2>
                                <p className="text-xs text-gray-400 font-medium">Stay updated with the latest news and announcements from your community</p>
                            </div>
                            <div className="relative w-full sm:w-72">
                                <input 
                                    type="text" 
                                    placeholder="Search news and announcements..." 
                                    className="w-full text-xs bg-white border border-gray-200 rounded-lg pl-8 pr-4 py-2 focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                                />
                                <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" />
                            </div>
                        </div>

                        {/* Hero Banner Component */}
                        <FeaturedNewsHero />

                        {/* Section Header & Filter Pills */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
                            <h3 className="text-base font-bold text-gray-900">Latest Updates</h3>
                            <div className="flex items-center gap-1.5 text-xs font-semibold">
                                {filters.map((fil) => (
                                    <button
                                        key={fil}
                                        onClick={() => setActiveFilter(fil)}
                                        className={`px-3 py-1 rounded-full border transition-all ${
                                            activeFilter === fil 
                                                ? 'bg-gray-900 text-white border-gray-900' 
                                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                        }`}
                                    >
                                        {fil}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Grid layout for cards and calendar sidebar */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {updates.map((item, idx) => (
                                    <NewsCard key={idx} {...item} />
                                ))}
                            </div>
                            <div>
                                <UpcomingEventsSidebar />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
import React from 'react';
import { BoltIcon, EyeIcon, BellAlertIcon } from '@heroicons/react/24/outline';

export default function FeatureSection() {
    const features = [
        {
            icon: BoltIcon,
            title: 'Unmatched Efficiency',
            description: 'Skip the long queues. Process documents and reports from the comfort of your home in minutes.',
        },
        {
            icon: EyeIcon,
            title: 'Absolute Transparency',
            description: 'Track the status of your requests and view barangay budget allocations and projects in real-time.',
        },
        {
            icon: BellAlertIcon,
            title: 'Real-time Updates',
            description: 'Get instant SMS and email notifications for emergency alerts, community meetings, and news.',
        },
    ];

    return (
        <section className="py-20 bg-[#041933] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Features matching image_f05843.png */}
                <div className="space-y-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Why Use the Smart Portal?
                    </h2>
                    <div className="space-y-6">
                        {features.map((feat, idx) => {
                            const IconComponent = feat.icon;
                            return (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <IconComponent className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-base tracking-wide text-white">
                                            {feat.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed font-normal">
                                            {feat.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Image matching image_f05843.png */}
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10 shadow-2xl">
                    <div className="rounded-xl overflow-hidden h-72 sm:h-96 bg-gray-900">
                        <img 
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" 
                            alt="Smart Portal Dashboard Preview" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
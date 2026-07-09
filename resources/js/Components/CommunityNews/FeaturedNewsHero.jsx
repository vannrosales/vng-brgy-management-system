import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function FeaturedNewsHero() {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-sm bg-gray-900 h-[360px] flex flex-col justify-end p-8 text-white">
            {/* Background Image / Gradient Overlay */}
            <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=1200&auto=format&fit=crop')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 space-y-3 max-w-2xl">
                <span className="bg-emerald-700/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Infrastructure
                </span>
                <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug">
                    New Community Eco-Park Officially Opens to the Public
                </h1>
                <p className="text-xs text-gray-200 line-clamp-2 leading-relaxed">
                    The V&G Barangay Council completes the transformation of the central lot into a sustainable green space for all residents, featuring solar lighting and native flora.
                </p>
                <div>
                    <button className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold text-xs px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-xs">
                        Read Full Story <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
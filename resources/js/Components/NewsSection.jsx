import React from 'react';

export default function NewsSection() {
    const news = [
        { 
            tag: 'Environment', 
            tagColor: 'bg-emerald-100 text-emerald-800', 
            title: 'Successful 2024 Green Initiative', 
            desc: "Over 500 new saplings were planted across the barangay during last Sunday's community drive...",
            date: 'October 24, 2024',
            image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=600&auto=format&fit=crop'
        },
        { 
            tag: 'Health', 
            tagColor: 'bg-amber-100 text-amber-800', 
            title: 'Free Medical Mission Scheduled', 
            desc: 'V&G residents are invited for a free general check-up and medicine distribution this coming weekend...',
            date: 'October 22, 2024',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop'
        },
        { 
            tag: 'Infrastructure', 
            tagColor: 'bg-blue-100 text-blue-800', 
            title: 'New Multi-Purpose Hall Update', 
            desc: 'The phase 2 construction of the V&G Multi-Purpose Hall is now 85% complete and on track for next month...',
            date: 'October 18, 2024',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop'
        },
    ];

    return (
        <section id="news" className="py-20 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold text-[#041933] mb-1.5 tracking-tight">Latest Community News</h2>
                    <p className="text-gray-500 text-sm font-normal">The heartbeat of V&G Smart Barangay.</p>
                </div>
                <span className="text-xs font-bold text-[#041933] cursor-pointer hover:underline inline-flex items-center gap-1">
                    View All News &gt;
                </span>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {news.map((item, idx) => (
                    <div key={idx} className="bg-white border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
                            <div className="h-48 bg-gray-100 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 space-y-2.5">
                                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md inline-block ${item.tagColor}`}>
                                    {item.tag}
                                </span>
                                <h3 className="font-bold text-base text-[#041933] leading-snug">{item.title}</h3>
                                <p className="text-xs text-gray-500 font-normal leading-relaxed line-clamp-3">{item.desc}</p>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-[11px] text-gray-400 font-medium">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
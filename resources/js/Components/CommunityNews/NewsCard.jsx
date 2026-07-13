import React from 'react';

export default function NewsCard({ image, category, categoryColor, date, title, excerpt }) {
    return (
        <div className="bg-white border border-gray-200/80 overflow-hidden shadow-2xs hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
                <div className="h-44 bg-gray-100 overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                        <span className={`font-bold px-2 py-0.5 rounded-md ${categoryColor}`}>{category}</span>
                        <span className="text-gray-400 font-normal">{date}</span>
                    </div>
                    <h3 className="font-bold text-sm text-gray-900 leading-snug">{title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{excerpt}</p>
                </div>
            </div>
            <div className="p-4 pt-0">
                <button className="text-xs font-bold text-[#041933] hover:underline">
                    Read More →
                </button>
            </div>
        </div>
    );
}
export default function CommunityNewsFeed() {
    const newsList = [
        { 
            tag: 'ENVIRONMENT', 
            title: 'Monthly Neighborhood Clean-Up Drive this Saturday', 
            date: 'October 24, 2023', 
            desc: 'Join us for our monthly initiative to keep V&G clean. Tools and...',
            image: '/images/news-environment.jpg' 
        },
        { 
            tag: 'HEALTH', 
            title: 'Free Vaccination Drive: Schedule & Guidelines', 
            date: 'October 22, 2023', 
            desc: 'The health center will be hosting a free flu vaccination drive for senio...',
            image: '/images/news-health.jpg' 
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Community News</h2>
                <span className="text-sm font-semibold text-blue-900 cursor-pointer hover:underline">View All</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {newsList.map((news, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div className="h-40 bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url('${news.image}')` }} />
                        <div className="p-5">
                            <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 inline-block mb-3">{news.tag}</span>
                            <h3 className="font-bold text-base text-gray-900 mb-1">{news.title}</h3>
                            <p className="text-xs text-gray-400 mb-2">{news.date}</p>
                            <p className="text-xs text-gray-600">{news.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
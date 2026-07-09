export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                {/* Background representation matching image_ed807e.jpg using a realistic public governance/community banner */}
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop')` }} />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/95 backdrop-blur-sm p-8 sm:p-12 rounded-xl max-w-2xl shadow-xl border border-gray-100">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                        Empowering Our Community Through Digital Governance
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                        Access local government services, stay informed about community updates, and report issues instantly with the official V&G Smart Barangay Portal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-blue-950 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-900 transition-all text-center shadow-md">
                            Register Now
                        </button>
                        <button className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-all text-center">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900 tracking-tight">V&G Smart Barangay</span>
                </div>
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
                    <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
                    <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
                    <a href="#news" className="hover:text-blue-600 transition-colors">Community News</a>
                    <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link href="/login" className="bg-blue-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition-all shadow-sm">
                        Resident Login
                    </Link>
                </div>
            </div>
        </header>
    );
}
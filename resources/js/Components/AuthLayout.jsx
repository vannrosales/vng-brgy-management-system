import React from 'react';

export default function AuthLayout({ children, title, subtitle }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left side: Background Image Sidebar */}
            <div className="hidden md:flex md:w-1/2 bg-slate-900 relative p-12 flex-col justify-end">
                <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
                <div className="relative z-10 text-white">
                    <h2 className="text-4xl font-bold mb-4">V&G Smart Barangay</h2>
                    <p className="text-blue-100 max-w-md text-lg leading-relaxed mb-8">
                        Empowering our local community through digital innovation and transparent governance. 
                        Access essential services, updates, and more.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-200">
                        <span>🛡️ OFFICIAL GOVERNMENT PORTAL</span>
                    </div>
                </div>
            </div>

            {/* Right side: Form Container */}
            <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12 overflow-y-auto">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
                    <p className="text-slate-600 mb-8">{subtitle}</p>
                    
                    {children}

                    <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1">🔒 SECURE 256-BIT SSL</span>
                        <span className="flex items-center gap-1">🛡️ DATA PROTECTION ACT</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
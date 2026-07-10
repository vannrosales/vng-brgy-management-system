import React from 'react';
import { GlobeAltIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#041933] text-white pt-16 pb-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
                {/* Column 1: Brand Info & Social/Contact Icon Buttons matching image_f0ae19.png */}
                <div className="space-y-4">
                    <h3 className="text-lg font-extrabold tracking-tight text-white">V&G Smart Barangay</h3>
                    <p className="text-xs text-blue-200/70 leading-relaxed font-normal">
                        A smarter, more connected community for all residents of V&G.
                    </p>
                    <div className="flex items-center gap-2.5 pt-1">
                        <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/15 transition-colors cursor-pointer">
                            <GlobeAltIcon className="w-4 h-4" />
                        </div>
                        <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/15 transition-colors cursor-pointer">
                            <EnvelopeIcon className="w-4 h-4" />
                        </div>
                        <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/15 transition-colors cursor-pointer">
                            <PhoneIcon className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Column 2: Quick Links matching image_f0ae19.png */}
                <div className="space-y-4">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-white">Quick Links</h4>
                    <ul className="space-y-2.5 text-xs text-blue-200/70 font-medium">
                        <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-white transition-colors">Digital Services</a></li>
                        <li><a href="#resident-portal" className="hover:text-white transition-colors">Resident Portal</a></li>
                        <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Us matching image_f0ae19.png */}
                <div className="space-y-4">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-white">Contact Us</h4>
                    <div className="space-y-2.5 text-xs text-blue-200/70 font-medium">
                        <p className="flex items-start gap-2 leading-relaxed">
                            <MapPinIcon className="w-4 h-4 shrink-0 text-white/80 mt-0.5" />
                            Barangay Hall, V&G Subdivision, Tacloban City
                        </p>
                        <p className="flex items-center gap-2">
                            <PhoneIcon className="w-4 h-4 shrink-0 text-white/80" />
                            (053) 123-4567
                        </p>
                        <p className="flex items-center gap-2">
                            <EnvelopeIcon className="w-4 h-4 shrink-0 text-white/80" />
                            Info@vgsmartbarangay.gov.ph
                        </p>
                    </div>
                </div>

                {/* Column 4: Office Hours & Emergency Hotline matching image_f0ae19.png */}
                <div className="space-y-4">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-white">Office Hours</h4>
                    <div className="space-y-1.5 text-xs text-blue-200/70 font-medium">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 12:00 PM</p>
                        <p>Sunday: Emergency Service Only</p>
                        <p className="text-emerald-400 font-bold pt-1">Emergency Hotline: 911-VG</p>
                    </div>
                </div>
            </div>

            {/* Bottom Row with copyright and Emergency Hotline Button matching image_f0ae19.png */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-blue-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-blue-200/60">
                <p>&copy; 2026 V&G Smart Barangay System. All Rights Reserved. Digital Services for a Better Community.</p>
                <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors text-white font-bold px-4 py-2.5 shadow-md text-xs shrink-0">
                    <PhoneIcon className="w-4 h-4 text-white" /> Emergency Hotline
                </button>
            </div>
        </footer>
    );
}
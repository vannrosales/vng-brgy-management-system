import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import StatsBar from '@/Components/StatsBar';
import ServicesGrid from '@/Components/ServicesGrid';
import FeatureSection from '@/Components/FeatureSection';
import NewsSection from '@/Components/NewsSection';
import Footer from '@/Components/Footer';

export default function Welcome() {
    return (
        <>
            <Head title="V&G Smart Barangay Portal" />
            <div className="min-h-screen bg-white text-gray-800 font-sans">
                <Navbar />
                <main>
                    <Hero />
                    <StatsBar />
                    <ServicesGrid />
                    <FeatureSection />
                    <NewsSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
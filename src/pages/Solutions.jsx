import React from 'react'
import { ArrowRight, TreePine, Waves, Factory, Sprout, Sun, Wind } from 'lucide-react';
import { SolutionCard } from '../components/SolutionCard';
import { solutions, stats } from '../data/SolutionsData';

export default function Solutions() {

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-[#E8F1F2] green-600 text-green-600 white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-5xl font-bold mb-8 leading-tight">
                            Join Us in Saving Our Future: Embrace Sustainable Solutions Today
                        </h1>
                        <p className="text-xl text-green-600 mb-12 leading-relaxed max-w-3xl">
                            Be part of a global community committed to protecting our planet. Together, we can tackle the climate crisis, restore ecosystems, and build a just, sustainable future. Join us and make a difference today!
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="text-white bg-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer">
                                Explore Solutions
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Science Section */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">The Science is Clear—We Can Solve the Climate and Biodiversity Crisis</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                            Grounded in cutting-edge science, we provide a clear roadmap to combat climate change and protect biodiversity. Our solutions are science-backed, readily available, and built around three key pillars of action.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-green-50 p-8 rounded-xl hover:scale-105 transition-transform duration-300 hover:border border-green-500">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Sun className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Energy Transition</h3>
                                <p className="text-gray-600">Shift to 100% renewable energy for a cleaner, more sustainable future.</p>
                            </div>
                            <div className="bg-green-50 p-8 rounded-xl hover:scale-105 transition-transform duration-300 hover:border border-green-500">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <TreePine className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Nature Conservation</h3>
                                <p className="text-gray-600">Protect, restore, and connect 50% of Earth's lands and oceans through a Global Safety Net.</p>
                            </div>
                            <div className="bg-green-50 p-8 rounded-xl hover:scale-105 transition-transform duration-300 hover:border border-green-500">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Sprout className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Regenerative Agriculture</h3>
                                <p className="text-gray-600">Transform food systems to feed 10 billion people sustainably while restoring soil health.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-green-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-green-50">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Solutions Grid */}
            <main className="bg-white py-24" id="solutions">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover innovative approaches that are transforming our world and creating a sustainable future for generations to come.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <SolutionCard key={index} {...solution} />
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <button className="inline-flex items-center bg-solution-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-solution-green-700 transition-colors">
                            View All Solutions
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </main>

            {/* Join Section */}
            <div className="bg-green-600 text-white py-24" id="join">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
                        <p className="text-xl mb-8">
                            Be part of the solution. Join our global network of changemakers working towards a sustainable future.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4 justify-center">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white px-6 py-4 rounded-lg text-gray-900 min-w-[300px]"
                            />
                            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-solution-green-50 transition-colors">
                                Subscribe
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
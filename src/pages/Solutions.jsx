import React from 'react'
import { ArrowRight, TreePine, Waves, Factory, Sprout, Sun, Wind } from 'lucide-react';
import { SolutionCard } from '../components/SolutionCard';
import { solutions, stats } from '../data/SolutionsData';

export default function Solutions() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#E8F1F2] to-green-50 text-green-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-28">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight tracking-tight bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text">
                            Join Us in Saving Our Future: Embrace Sustainable Solutions Today
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl">
                            Be part of a global community committed to protecting our planet. Together, we can tackle the climate crisis, restore ecosystems, and build a just, sustainable future.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="group w-full sm:w-auto text-white bg-green-600 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                Explore Solutions
                                <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Science Section */}
            <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 tracking-tight bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text">
                            The Science is Clear—We Can Solve the Climate and Biodiversity Crisis
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                            Grounded in cutting-edge science, we provide a clear roadmap to combat climate change and protect biodiversity.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                            {/* Card 1 */}
                            <div className="group bg-gradient-to-br from-green-50 to-white p-5 sm:p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-green-100 hover:border-green-300">
                                <div className="bg-gradient-to-br from-green-100 to-green-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Sun className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-600" />
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-green-700">Energy Transition</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Shift to 100% renewable energy for a cleaner, more sustainable future.</p>
                            </div>
                            {/* Card 2 */}
                            <div className="group bg-gradient-to-br from-green-50 to-white p-5 sm:p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-green-100 hover:border-green-300">
                                <div className="bg-gradient-to-br from-green-100 to-green-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <TreePine className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-600" />
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-green-700">Nature Conservation</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Protect and restore Earth's lands and oceans through a Global Safety Net.</p>
                            </div>
                            {/* Card 3 */}
                            <div className="group bg-gradient-to-br from-green-50 to-white p-5 sm:p-6 md:p-8 rounded-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-green-100 hover:border-green-300">
                                <div className="bg-gradient-to-br from-green-100 to-green-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Sprout className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-600" />
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-green-700">Regenerative Agriculture</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Transform food systems while restoring soil health.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-300">
                                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">{stat.number}</div>
                                <div className="text-sm sm:text-base text-green-50 leading-relaxed">{stat.label}</div>
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
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white py-12 sm:py-16 md:py-20 lg:py-24" id="join">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Join the Movement</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                            Be part of the solution. Join our global network of changemakers working towards a sustainable future.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg text-white w-full sm:min-w-[300px] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-green-600 placeholder-white/60"
                            />
                            <button 
                                className="group w-full sm:w-auto bg-white text-green-600 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                            >
                                Subscribe
                                <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
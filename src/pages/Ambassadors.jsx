
import { useState } from "react";
import { Leaf, Send, Users , Globe, ArrowRight} from "lucide-react";

const AmbassadorsPage=()=> {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <main className="min-h-screen bg-[#E8F1F2]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-green-100 rounded-full opacity-50 blur-2xl"></div>
              <h1 className="relative text-4xl md:text-6xl font-bold text-green-900 leading-tight">
                The Future of Earth Saviours Ambassador
              </h1>
            </div>

            <div className="space-y-6">
              {/* Quote Card */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="p-6 bg-white rounded-lg shadow-lg border border-green-100 relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-50 rounded-full opacity-50"></div>
                  <p className="text-3xl md:text-xl text-gray-700 italic relative z-10">
                    "The true meaning of life is to plant trees under whose shade you do not expect to sit."
                    <span className="block mt-2 text-sm text-gray-500">— Nelson Henderson</span>
                  </p>
                </div>
              </div>

              {/* Mission Statement Card */}
              <div className="hover:scale-105  bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-white shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-4.0.3')] opacity-10 mix-blend-overlay"></div>
                
                <Globe className="w-8 h-8 mb-4 text-green-200" />
                
                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl font-semibold text-green-50">Our Growing Impact</h3>
                  <p className="text-green-50 leading-relaxed">
                    As Earthxcall continues to grow as an organization, we want to empower our Tree
                    Ambassadors to continue impacting their communities in the most effective way possible.
                  </p>
                  <p className="text-green-50 leading-relaxed">
                    To make this a reality, we are improving the program to further its global impact.
                  </p>
                  <div className="pt-4 flex items-center text-green-200 group-hover:text-white transition-colors duration-300">
                    <span className="font-medium">Join our mission</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-green-100 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-green-50 rounded-full opacity-50"></div>
            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-green-50 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Join Our Mission</h2>
              <p className="text-gray-600 mb-6">
                If you're interested in becoming a future Earth Saviours Ambassador, fill out the form with your
                contact information to ensure you're among the first to know when we are active again.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  Join as Ambassador
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Section */}
      <section className="bg-[#f4f7f7] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
            Our Ambassadors Program
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Plant Trees</h3>
              <p className="text-gray-600">
                Lead local tree-planting initiatives and inspire your community to contribute to a greener future.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Build Community</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals and create a network of environmental advocates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Spread Awareness</h3>
              <p className="text-gray-600">
                Share your journey and educate others about the importance of environmental conservation.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center hover:scale-105 transition-transform duration-300">
            {/* Just a Sample image */}
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Tree planting"
              className="rounded-xl shadow-lg mx-auto max-w-full md:max-w-3xl h-[300px] object-cover"
            />
          </div>
        </div>
      </section>
    </main>
    );
}


export default AmbassadorsPage
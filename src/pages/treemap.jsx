import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom tree icon
const treeIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/490/490091.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const TreeMap = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [viewMode, setViewMode] = useState('COMPANY'); // 'SELF' or 'COMPANY'
  const [searchQuery, setSearchQuery] = useState('');
  
  // Default center on India
  const center = [20.5937, 78.9629];
  
  // Sample data for tree plantations
  const plantations = [
    {
      id: 1,
      type: 'COMPANY',
      name: 'GreenRoots Pvt. Ltd.',
      logo: 'https://via.placeholder.com/150/004d00/FFFFFF?text=GreenRoots',
      date: '15/08/2010',
      plants: 250,
      species: ['Banyan', 'Neem', 'Mango'],
      city: 'Pune',
      position: [18.5204, 73.8567]
    },
    {
      id: 2,
      type: 'SELF',
      name: 'Greenxcarbon',
      plantName: 'Coconut',
      plantAge: '2 years',
      number: 1,
      ssn: '2299708',
      city: 'Bangalore',
      position: [12.9716, 77.5946]
    },
    {
      id: 3,
      type: 'COMPANY',
      name: 'EcoForest Solutions',
      logo: 'https://via.placeholder.com/150/004d00/FFFFFF?text=EcoForest',
      date: '22/04/2015',
      plants: 500,
      species: ['Teak', 'Bamboo', 'Sandalwood'],
      city: 'Mumbai',
      position: [19.0760, 72.8777]
    },
    {
      id: 4,
      type: 'COMPANY',
      name: 'TreeLife Initiative',
      logo: 'https://via.placeholder.com/150/004d00/FFFFFF?text=TreeLife',
      date: '05/06/2018',
      plants: 350,
      species: ['Peepal', 'Ashoka', 'Gulmohar'],
      city: 'Nashik',
      position: [19.9975, 73.7898]
    },
    {
      id: 5,
      type: 'SELF',
      name: 'Rajesh Kumar',
      plantName: 'Neem',
      plantAge: '1 year',
      number: 2,
      ssn: '3456789',
      city: 'Chennai',
      position: [13.0827, 80.2707]
    }
  ];
  
  // Filter plantations based on view mode
  const filteredPlantations = plantations.filter(plantation => {
    // Filter by type (SELF or COMPANY)
    const typeMatch = viewMode === 'ALL' || plantation.type === viewMode;
    
    // Filter by search query
    const searchMatch = searchQuery === '' || 
      plantation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plantation.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    return typeMatch && searchMatch;
  });

  return (
    <div className="relative h-screen w-full pt-20 bg-transparent">
      {/* Added a dark overlay div if not needed remove it */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Search Bar - Only visible on certain screen sizes */}
      <div className="absolute top-45 left-4 z-10 md:w-1/3 w-3/4"> 
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-6 py-3 rounded-full bg-transparent text-black placeholder-gray-600 focus:outline-none border-2 border-black/40"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* View Mode Toggle */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex rounded-full overflow-hidden">
        <button
          className={`px-12 py-4 font-bold ${viewMode === 'SELF' ? 'bg-gray-700 text-white' : 'bg-gray-500 text-gray-200'}`}
          onClick={() => setViewMode('SELF')}
        >
          SELF
        </button>
        <button
          className={`px-12 py-4 font-bold ${viewMode === 'COMPANY' ? 'bg-gray-700 text-white' : 'bg-gray-500 text-gray-200'}`}
          onClick={() => setViewMode('COMPANY')}
        >
          COMPANY
        </button>
      </div>
      
      {/* OpenStreetMap with Leaflet */}
      <MapContainer 
        center={center} 
        zoom={5} 
        style={{ height: 'calc(100vh - 80px)', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {filteredPlantations.map(plantation => (
          <Marker
            key={plantation.id}
            position={plantation.position}
            icon={treeIcon}
            eventHandlers={{
              click: () => {
                setSelectedMarker(plantation);
              },
            }}
          >
            <Popup>
              <div className="bg-white rounded-lg p-4 max-w-md">
                {plantation.type === 'COMPANY' ? (
                  <>
                    <div className="flex justify-center mb-4">
                      <img 
                        src={plantation.logo} 
                        alt={plantation.name} 
                        className="w-32 h-32 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/150/004d00/FFFFFF?text=Company";
                        }}
                      />
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-green-700 font-semibold flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Tree Plantation
                      </span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">Company Name:</span>
                        <span className="ml-1">{plantation.name}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">Date of Plantation:</span>
                        <span className="ml-1">{plantation.date}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">Number of Plants:</span>
                        <span className="ml-1">{plantation.plants}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">Species of Plant:</span>
                        <span className="ml-1">{plantation.species.join(', ')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">City:</span>
                        <span className="ml-1">{plantation.city}</span>
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center mb-4">
                      <img 
                        src={`https://via.placeholder.com/150/004d00/FFFFFF?text=${plantation.plantName}`} 
                        alt={plantation.plantName} 
                        className="w-32 h-32 object-cover"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-green-700 font-semibold flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Tree Plantation - User Info
                      </span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">Plant Name:</span>
                        <span className="ml-1">{plantation.plantName}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">Plant Age:</span>
                        <span className="ml-1">{plantation.plantAge}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">Full Name:</span>
                        <span className="ml-1">{plantation.name}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">Number of Plants:</span>
                        <span className="ml-1">{plantation.number}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">City:</span>
                        <span className="ml-1">{plantation.city}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span className="font-bold">Planted with purpose, gifted with pride</span>
                        <span className="ml-1">🌱</span>
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default TreeMap;
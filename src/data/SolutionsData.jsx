import { Factory, Sprout, Sun, TreePine, Waves, Wind } from "lucide-react";

export const solutions = [
    // Energy Transition Solutions
    {
      title: "Solar Photovoltaic Power",
      description: "Leading the renewable energy revolution with advanced solar PV technology that converts sunlight directly into electricity. Now the cheapest electricity source in many regions, solar PV added 179 TWh of new capacity in 2021, marking a 22% growth from 2020.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000",
      category: "Energy Transition",
      icon: <Sun className="h-6 w-6" />
    },
    {
      title: "Onshore & Offshore Wind",
      description: "Harnessing wind power through advanced turbine technology both on land and sea. Offshore wind is growing 13% annually and is projected to increase 15x by 2040, becoming a trillion-dollar industry while providing clean, renewable energy.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=1000",
      category: "Energy Transition",
      icon: <Wind className="h-6 w-6" />
    },
    // Nature Conservation Solutions
    {
      title: "Protected Lands & Biodiversity",
      description: "Safeguarding critical ecosystems through government-recognized protected areas and Other Effective Conservation Measures (OECMs). These areas are vital for biodiversity preservation and long-term environmental conservation.",
      image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1000",
      category: "Nature Conservation",
      icon: <TreePine className="h-6 w-6" />
    },
    {
      title: "Marine Protection",
      description: "Establishing and managing Marine Protected Areas (MPAs) to conserve ocean biodiversity and ecosystems. Over 5,000 MPAs currently cover 0.8% of the ocean, helping safeguard marine life and maintain crucial marine carbon sinks.",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=1000",
      category: "Marine Conservation",
      icon: <Waves className="h-6 w-6" />
    },
    // Regenerative Agriculture Solutions
    {
      title: "Regenerative Farming",
      description: "Transforming food production through soil health restoration and sustainable practices. Our approach enhances soil fertility and carbon sequestration while supporting the transition to net-zero food systems globally.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000",
      category: "Agriculture",
      icon: <Sprout className="h-6 w-6" />
    },
    {
      title: "Sustainable Agriculture Technology",
      description: "Implementing AI-driven crop optimization and sustainable farming practices to maximize yields while minimizing environmental impact. Our solutions include precision farming, crop diversity, and advanced irrigation systems.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000",
      category: "Agriculture",
      icon: <Factory className="h-6 w-6" />
    }
  ];
  
  export const stats = [
    { number: "100+", label: "Active Solutions" },
    { number: "50M+", label: "Lives Impacted" },
    { number: "75+", label: "Countries" },
    { number: "1000+", label: "Partners" }
  ];
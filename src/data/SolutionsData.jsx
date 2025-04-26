import { Droplet, Handshake, Leaf, Sprout, Users, } from "lucide-react";

export const solutions = [
    // Energy Transition Solutions
    {
      title: "Reforestation & Plantation Drives",
      description: "We focus on reviving degraded lands through large-scale tree plantation initiatives. By working with local communities and using smart technology, we aim to restore green cover and create lasting ecological balance.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000",
      category: "Regenerative Agriculture",
      icon: <Sprout className="h-6 w-6" />
    },
    {
      title: "Smart & Sustainable Farming Solutions",
      description: "Our smart agriculture programs help farmers adopt eco-friendly practices that improve yield and conserve resources. With AI tools and IoT-based systems, we bring innovation directly to the fields.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=1000",
      category: "Regenerative Agriculture",
      icon: <Sprout className="h-6 w-6" />
    },
    // Nature Conservation Solutions
    {
      title: "Women Empowerment & Skill Development",
      description: "We empower rural women through training in modern farming, entrepreneurship, and financial literacy. These programs help women become self-reliant and contribute meaningfully to their communities.",
      image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1000",
      category: "Women’s Empowerment",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Water Conservation & Management",
      description: "We implement sustainable water solutions like rainwater harvesting, drip irrigation, and watershed revival. These efforts ensure water security for agriculture and improve long-term resource management.",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=1000",
      category: "Water Conservation",
      icon: <Droplet className="h-6 w-6" />
    },
    // Regenerative Agriculture Solutions
    {
      title: "Carbon Credit & Sustainability Initiatives",
      description: "Our reforestation and eco-farming projects are designed to reduce carbon footprints and generate certified carbon credits. We help turn local green efforts into global environmental impact.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000",
      category: "Environment Sustainability",
      icon: <Leaf className="h-6 w-6" />
    },
    {
      title: "Corporate Social Responsibility (CSR) Services",
      description: "We partner with companies to design and execute impactful CSR projects aligned with ESG goals. From reforestation to women empowerment, our programs deliver measurable social and environmental value.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000",
      category: "Corporate Social Responsibility",
      icon: <Handshake className="h-6 w-6" />
    }
  ];
  
  export const stats = [
    { number: "100+", label: "Active Solutions" },
    { number: "50M+", label: "Lives Impacted" },
    { number: "75+", label: "Countries" },
    { number: "1000+", label: "Partners" }
  ];
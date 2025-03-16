export const menuItems = [
  { 
    name: "About", 
    link: "/about",
    subMenu: [
      { name: "Our Mission", link: "/about#mission" },
      { name: "Our Team", link: "/about#team" },
      { name: "Our Impact", link: "/about#impact" },
    ]
  },
  {
    name: "Get Involved",
    link: "/get-involved",
    subMenu: [
      { 
        name: "Our Funds", 
        link: "/our-fund",
        subItems: [
          { name: "Farmer Support Fund", link: "/our-fund/farmer-support-fund" },
          { name: "Women's Empowerment Fund", link: "/our-fund/women-empowerment-fund" },
          { name: "Reforestation Plantation", link: "/our-fund/reforestation-plantation" },
          { name: "Urban Forestry", link: "/our-fund/urban-forestry" }
        ]
      },
      { 
        name: "Philanthropy", 
        link: "/philanthropic"
      },
      { 
        name: "Corporate Sustainability", 
        link: "/corporate-sustainability" 
      },
    ]
  },
  { 
    name: "News & Stories", 
    link: "/news",
    subMenu: [
      { name: "Earth Stories", link: "/news/stories" },
      { name: "NewsRoom", link: "/news/newsroom" },
    ]
  },
  { 
    name: "Gifting", 
    link: "/gifting",
    subMenu: [
      { name: "Gift Trees", link: "/gifting" },
      { name: "Our Shop", link: "/productpage" }
    ]
  },
  { 
    name: "Why We", 
    link: "/why-we"  
  }
];
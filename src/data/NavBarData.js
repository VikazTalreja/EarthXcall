export const menuItems = [
  { 
    name: "About", 
    
    subMenu: [
      { name: "Our Mission", link: "/about/mission" },
      { name: "Our Team", link: "/about/team" },
      // { name: "Our Impact", link: "/about/impact" },
      { name: "Solutions", link: "/about/solutions" },
    ]
  },
  {
    name: "Get Involved",
    subMenu: [
      { 
        name: "Our Funds", 
        subItems: [
          { name: "Farmer Support Fund", link:"/get-involved/our-fund/farmer-support-fund" },
          { name: "Women's Empowerment Fund", link:"/get-involved/our-fund/women-empowerment-fund" },
          { name: "Reforestation Plantation", link:"/get-involved/our-fund/reforestation-plantation" },
          { name: "Urban Forestry", link: "/get-involved/our-fund/urban-forestry" }
        ]
      },
      // { 
      //   name: "Philanthropy", 
      //   link: "/philanthropic"
      // },
      { 
        name: "Corporate Sustainability", 
        link: "/csr" 
      },
      {
        name:"Ambassador",
        link:"/ambassador"
      }
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
    link: "",
    subMenu: [
      { name: "Gift Trees", link: "/gifting/gift-trees" },
      // { name: "Our Shop", link: "/productpage" }
    ]
  },
  { 
    name: "Why We", 
    link: "/why-we"  
  }
];
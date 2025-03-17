import Movix from "../assets/movix.png"
import productStorefrom from "../assets/product_store.png"

const projects = [
  {
    id: "Movix",
    description: "Movie platform focused on providing a user-friendly interface for streaming services.",
    tech: ["React", "TypeScript", "Tailwind CSS" , "Redux"],
    img: Movix,
    links: [
      { type: "GitHub", url: "https://github.com/user/project1" },
      { type: "Live Demo", url: "https://aamna111.github.io./movix/" }
    ]
  },
  {
    id: "Product Store",
    description: "A user-friendly product management system where you can easily add, edit, and remove items from your store with just a few clicks. Designed with real people in mind to make inventory tracking feel less like a chore.",
    tech: ["React", "Node js", "Express","Mongo DB", "Zustand"] ,
    img: productStorefrom,
    links: [
      { type: "GitHub", url: "https://github.com/aamna111/product-store" },
      { type: "Live Demo", url: "https://product-store-vvi7.onrender.com/" }
    ]
  },
  {

  }
];

export default projects;

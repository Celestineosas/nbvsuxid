import { featured1, featured2, featured3, project1, project2, project3 } from "../assets/images";

export const navLinks = [
    { label: "Home", link: "" },
    { label: "Collections", link: "collections" },
    { label: "Brands", link: "brands" },
    
  ];

export const featured = [
    { img: featured1, text: "modern chair", price: 249.00, delay : 0.3 },
    { img: featured2, text: "Elegant lamp", price: 120.00, delay : 0.6 },
    { img: featured3, text: "Black chair", price: 199.00, delay : 0.9 },
  ];



 export const projects  = [
    { id: 1, image: project1, title: 'Landscape', text: 'Our team is dedicated to transforrming your living spaces into beautiful havens that reflects your presonal taste' },
    { id: 2, image: project2 , title: 'Commercial Interiors', text: 'We focus on crediting inviting and productive environment that enhance the experience of both clients and employees.' },
    { id: 3, image: project3, title: 'Landscape Architecture', text: 'Our team is dedicated to transforrming your living spaces into beautiful havens that reflects your presonal taste.' },
  ];
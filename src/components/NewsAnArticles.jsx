// src/components/NewsAndArticles.jsx
import React from 'react';

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

const articles = [
  {
    title: "Design Trends in 2025",
    question: "What's next in digital creativity?",
    description: "Explore the latest trends shaping the future of digital design.",
    image: img1,
  },
  {
    title: "Boosting UX with Microinteractions",
    question: "Do small details matter?",
    description: "How small animations improve user engagement significantly.",
    image: img2,
  },
  {
    title: "Mastering Tailwind CSS",
    question: "How to build faster UIs?",
    description: "A practical guide to building responsive UIs with Tailwind.",
    image: img3,
  },
  {
    title: "React Performance Tips",
    question: "Is your app slow?",
    description: "Optimize your React app with these best practices.",
    image: img4,
  },
  {
    title: "The Power of Dark Mode",
    question: "Why do users prefer it?",
    description: "Why users love dark mode and how to implement it right.",
    image: img5,
  },
  {
    title: "Writing Clean Code",
    question: "Can clean code save time?",
    description: "Improve your code quality with these habits.",
    image: img6,
  },
];

const NewsAndArticles = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 py-16">
      <div className="text-center mb-10">
        <h6 className="text-lime-400 font-semibold uppercase tracking-wide">Blogs</h6>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">News & Articles</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-lime-400 rounded-xl overflow-hidden flex flex-col sm:flex-row"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full sm:w-48 h-48 object-cover flex-shrink-0"
            />
            <div className="p-4 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-1 text-white">{article.title}</h3>
              <h4 className="text-lime-400 text-sm italic mb-2">{article.question}</h4>
              <p className="text-gray-300 text-sm">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsAndArticles;

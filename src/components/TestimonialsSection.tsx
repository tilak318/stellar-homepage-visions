
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Wow, this is absolutely incredible - huge props to the @relume_io team for bringing these amazing AI superpowers to more Webflow visual developers!",
      author: "@callmevlad",
      role: "Co-founder & CEO @webflow",
      rating: 5
    },
    {
      text: "Finally an AI tool that I will ACTUALLY include as part of my workflow. I love how seamless it is from start to finish.",
      author: "@SoyBalta",
      role: "Designer & Webflow developer",
      rating: 5
    },
    {
      text: "This is pure magic. ✨ Sitemaps in seconds ➜ Wireframes in minutes ➜ Full copy written with AI ➜ Layered wireframes to Figma",
      author: "@relume_io",
      role: "saving the day for web and product designers!",
      rating: 5
    },
    {
      text: "Very excited for @relume_io's new AI-powered generative website builder. I love the messaging and positioning: 'to empower you, not replace you'.",
      author: "@gabelopez",
      role: "Designer",
      rating: 5
    },
    {
      text: "Yooooooooo, this is 🔥 @relume_io has been one of my favorite teams I've seen evolve over the years. They're carving out a tremendous groove that designers and developers can vibe in when being able to generate web concepts.",
      author: "@rileyj_s",
      role: "Designer & Webflow developer",
      rating: 5
    },
    {
      text: "The new @relume_io AI Sitemap and Wireframe tools are game changers! This can absolutely speed up our development and will change how we build and design @webflow sites going forward.",
      author: "@KarimArdalan",
      role: "Designer & Webflow developer",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm text-gray-600 mb-4">700k+ Designers & developers trust Relume</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Helping Lumers streamline their<br />
            workflow and deliver faster
          </h2>
          <div className="flex justify-center space-x-4 mt-8">
            <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-sm font-medium">🔗 Join our community</span>
            </button>
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Read more reviews
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.author.charAt(1).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

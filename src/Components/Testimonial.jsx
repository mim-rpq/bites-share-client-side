import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Food Receiver",
    message:
      "BiteShare helped me when I needed it the most. The kindness and efficiency are unmatched.",
    image: "https://i.ibb.co.com/XMN8cmG/user-girl.png",
  },
  {
    id: 2,
    name: "Imran Hossain",
    role: "Donor",
    message:
      "Knowing my extra food reaches people in need makes me feel fulfilled. BiteShare is amazing!",
    image: "https://i.ibb.co.com/fGVL2MLG/user-2.png",
  },
  {
    id: 3,
    name: "Farhana Sultana",
    role: "Food Receiver",
    message:
      "The process was so simple and respectful. Thank you for making help accessible to all.",
    image: "https://i.ibb.co.com/2RtxHYK/user-5-girl.png",
  },

];

const Testimonial= () => {
  return (
    <section className="relative py-20 bg-gradient-to-br w-11/12 mx-auto overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-20">
          Voices of Our Community
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white  backdrop-blur-lg rounded-2xl shadow-xl p-8  border-white/30 hover:scale-105 transform transition-all duration-500 ease-in-out"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                <p className="text-gray-700 italic leading-relaxed">
                  “{testimonial.message}”
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#facc15"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="none"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.25l6.472 3.94-1.753-7.19 5.53-4.74-7.274-.586L12 2.25l-2.975 6.424-7.274.586 5.53 4.74-1.753 7.19L12 17.25z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#facc15"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="none"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.25l6.472 3.94-1.753-7.19 5.53-4.74-7.274-.586L12 2.25l-2.975 6.424-7.274.586 5.53 4.74-1.753 7.19L12 17.25z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#facc15"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="none"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.25l6.472 3.94-1.753-7.19 5.53-4.74-7.274-.586L12 2.25l-2.975 6.424-7.274.586 5.53 4.74-1.753 7.19L12 17.25z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#facc15"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="none"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.25l6.472 3.94-1.753-7.19 5.53-4.74-7.274-.586L12 2.25l-2.975 6.424-7.274.586 5.53 4.74-1.753 7.19L12 17.25z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#facc15"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="none"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.25l6.472 3.94-1.753-7.19 5.53-4.74-7.274-.586L12 2.25l-2.975 6.424-7.274.586 5.53 4.74-1.753 7.19L12 17.25z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

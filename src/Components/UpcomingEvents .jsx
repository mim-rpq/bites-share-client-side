import React from "react";

const events = [
  {
    id: 1,
    title: "Winter Food Drive",
    date: "December 20, 2025",
    description:
      "Join us to distribute warm meals to the homeless during the cold winter season.",
    image: "https://i.ibb.co.com/7JfQYm7F/community-act-care-kindness-cinematic-style.jpg",
    buttonText: "Join Now",
  },
  {
    id: 2,
    title: "Community Kitchen Day",
    date: "January 5, 2026",
    description:
      "Cook and share meals with the community in a friendly and welcoming space.",
    image: "https://i.ibb.co.com/8LSnRXDs/medium-shot-friends-preparing-food.jpg",
    buttonText: "Learn More",
  },
  {
    id: 3,
    title: "School Lunch Donation",
    date: "February 10, 2026",
    description:
      "Help provide nutritious meals to underprivileged children in local schools.",
    image: "https://i.ibb.co.com/SDsmMdzJ/close-up-people-holding-apples-bag.jpg",
    buttonText: "Donate",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-gradient-to-br bg-white w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-12">
          Upcoming Events & Campaigns
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-500"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="bg-primary hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300">
                  {event.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

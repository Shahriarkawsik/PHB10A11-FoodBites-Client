import React from "react";

const CurrentEvents = () => {
  const events = [
    {
      title: "Feed the Needy Drive",
      description: "Help us provide meals to underprivileged communities.",
      location: "Community Hall, Downtown",
      date: "2024-12-30",
      time: "10:00 AM - 3:00 PM",
      image:
        "https://kidsactivitiesblog.com/wp-content/uploads/2016/07/bigstock-Volunteers-Giving-Food-To-Poor-298595263.jpg",
    },
    {
      title: "Holiday Food Collection",
      description: "Join us to collect and distribute holiday food packages.",
      location: "Main Park, City Center",
      date: "2024-12-31",
      time: "11:00 AM - 4:00 PM",
      image:
        "https://av.rwth-aachen.de/wp-content/uploads/2022/12/2022-12-10-1024x574.png",
    },
    {
      title: "Winter Warmth Drive",
      description: "Distribute warm meals and clothing to the homeless.",
      location: "Shelter Center, Uptown",
      date: "2024-12-29",
      time: "9:00 AM - 1:00 PM",
      image: "winter-drive-image.jpg",
    },
    {
      title: "New Year’s Eve Food Festival",
      description: "Celebrate the year-end by sharing food with the community.",
      location: "City Square, Downtown",
      date: "2024-12-31",
      time: "5:00 PM - 10:00 PM",
      image: "food-festival-image.jpg",
    },
    {
      title: "Community Breakfast Gathering",
      description:
        "Serve breakfast to families in need and foster community bonds.",
      location: "Community Kitchen, Eastside",
      date: "2024-12-28",
      time: "8:00 AM - 11:00 AM",
      image: "breakfast-gathering-image.jpg",
    },
    {
      title: "Food Bank Volunteering Event",
      description:
        "Help sort and pack food for distribution to local shelters.",
      location: "Central Food Bank, Midtown",
      date: "2024-12-27",
      time: "1:00 PM - 5:00 PM",
      image: "volunteer-event-image.jpg",
    },
    {
      title: "Family Food Giveaway",
      description:
        "Provide groceries to families struggling to make ends meet.",
      location: "Community Church, Westside",
      date: "2024-12-29",
      time: "2:00 PM - 6:00 PM",
      image: "family-giveaway-image.jpg",
    },
    {
      title: "Soup Kitchen Service",
      description:
        "Cook and serve warm meals to the elderly in the neighborhood.",
      location: "Elderly Center, Northside",
      date: "2024-12-28",
      time: "12:00 PM - 3:00 PM",
      image: "soup-kitchen-service.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-16 font-Poppins">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-color1 hover:text-color4 hover: mb-12">
          Current Food Donation Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="space-y-3 p-4">
                <h3 className="text-2xl font-semibold text-color2">
                  {event.title}
                </h3>
                <p className="text-color3">{event.description}</p>
                <p className="text-sm text-color3">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="text-sm text-color3">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-sm text-color3">
                  <strong>Time:</strong> {event.time}
                </p>
                <button className="w-full bg-color4 text-white py-2 px-4 rounded hover:bg-yellow-500 transition">
                  Join Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentEvents;

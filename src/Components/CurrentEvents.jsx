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
      image:
        "https://s3.amazonaws.com/tiph-wp-production/wp-content/uploads/2018/06/12200218/publicserviceshealthday_2018.jpg",
    },
    {
      title: "New Year’s Eve Food Festival",
      description: "Celebrate the year-end by sharing food with the community.",
      location: "City Square, Downtown",
      date: "2024-12-31",
      time: "5:00 PM - 10:00 PM",
      image:
        "https://madreshoy.com/wp-content/uploads/2019/12/cena-navidad.jpg",
    },
    {
      title: "Community Breakfast Gathering",
      description:
        "Serve breakfast to families in need and foster community bonds.",
      location: "Community Kitchen, Eastside",
      date: "2024-12-28",
      time: "8:00 AM - 11:00 AM",
      image:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2020/06/dinner-party.jpg",
    },
    {
      title: "Food Bank Volunteering Event",
      description:
        "Help sort and pack food for distribution to local shelters.",
      location: "Central Food Bank, Midtown",
      date: "2024-12-27",
      time: "1:00 PM - 5:00 PM",
      image:
        "https://www.thenation.com/wp-content/uploads/2020/12/food-drive-tx-2020-ss-img.jpg",
    },
    {
      title: "Family Food Giveaway",
      description:
        "Provide groceries to families struggling to make ends meet.",
      location: "Community Church, Westside",
      date: "2024-12-29",
      time: "2:00 PM - 6:00 PM",
      image:
        "https://assets.entrepreneur.com/content/3x2/2000/20151123135742-thanksgiving-dinner-family-holiday.jpeg",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-orange-100  to-yellow-50 py-16 font-Poppins">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-color1 hover:text-color4 mb-12">
          Current Food Donation Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-all"
            >
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
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

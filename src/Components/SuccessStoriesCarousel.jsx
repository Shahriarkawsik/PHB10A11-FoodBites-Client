import React, { useState } from "react";

const successStories = [
  {
    title: "A Meal That Changed Lives",
    description:
      "500 meals were distributed to flood-affected families, ensuring warm food during tough times.",
    image:
      "https://ifstudies.org/ifs-admin/resources/blog/familymeal-w1700.jpg",
    details: "Read the full story of how this drive impacted lives.",
  },
  {
    title: "Community Comes Together",
    description:
      "300 underprivileged families received groceries thanks to a united community effort.",
    image:
      "https://www.hale.wa.edu.au/wp-content/uploads/2020/10/HouseAthletics.jpg",
    details: "Discover how we made this possible together.",
  },
  {
    title: "A New Year, A New Hope",
    description:
      "200 food baskets delivered to the elderly, spreading hope and joy.",
    image:
      "https://i.pinimg.com/originals/47/49/b0/4749b09bcf7b32144046b5cfeedf731e.jpg",
    details: "Learn how we started the year by giving back.",
  },
];

const SuccessStoriesCarousel = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory(
      (prev) => (prev - 1 + successStories.length) % successStories.length
    );
  };

  const story = successStories[currentStory];

  return (
    <section className="bg-gradient-to-r from-yellow-50 to-orange-100 py-16 font-Poppins space-y-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-color4 mb-8">
          Inspiring Success Stories
        </h2>
        <div className="relative">
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full bg-center object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
              <h3 className="text-3xl font-bold mb-4">{story.title}</h3>
              <p className="text-lg mb-4">{story.description}</p>
              <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded">
                {story.details}
              </button>
            </div>
          </div>
          {/* Navigation Controls */}
          <button
            onClick={prevStory}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600"
          >
            &#10094;
          </button>
          <button
            onClick={nextStory}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600"
          >
            &#10095;
          </button>
        </div>
        <div className="mt-6">
          <p className="text-gray-600">
            Story {currentStory + 1} of {successStories.length}
          </p>
        </div>
      </div>
      <div className="w-11/12 lg:w-4/5 mx-auto space-y-5">
        <h2 className="text-2xl sm:text-4xl font-bold text-color4 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="collapse collapse-plus shadow-xl border-b-4 bg-white border-color4">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <p className="collapse-title text-color2 sm:text-xl font-medium">
            Who can receive food at a food pantry or meal program?
          </p>
          <div className="collapse-content text-color3">
            <p>
              Anyone who needs extra help affording food can visit a food pantry
              or meal program. Some pantries or programs may have additional
              requirements, like living in a certain area.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus shadow-xl border-b-4 bg-white border-color4">
          <input type="radio" name="my-accordion-3" />
          <p className="collapse-title text-color2 sm:text-xl font-medium">
            What is the difference between a food bank and food pantry?
          </p>
          <div className="collapse-content text-color3">
            <p>
              A food bank is a warehouse that collects and stores food from food
              donations and food drives.
              <br />A food pantry is where people can get free food. A food
              pantry gets its food from a food bank and gives it directly to
              people.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus shadow-xl border-b-4 bg-white border-color4">
          <input type="radio" name="my-accordion-3" />
          <p className="collapse-title text-color2 sm:text-xl font-medium">
            What is it like to visit a food distribution for the first time?
          </p>
          <div className="collapse-content text-color3">
            <p>
              Visiting for the first time might feel scary, but friendly
              volunteers are there to help.
              <br />
              When you arrive, they may ask questions or have you fill out a
              form about your family's needs. These questions help them give you
              the right amount of food and connect you with other programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;

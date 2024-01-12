import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="flex justify-center flex-wrap mb-4" style={{ gap: "1rem" }}>
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;

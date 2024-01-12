import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Liked removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }

      toast.success("Like added");
    }
  };

  return (
    <div
      className="bg-bgDark overflow-hidden"
      style={{ width: "300px", borderRadius: "0.5rem" }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={course.image.url}
          alt=""
          style={{
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            backgroundColor: "white",
            borderRadius: "50%",
            right: "0.5rem",
            bottom: "0.75rem",
            display: "grid",
            placeItems: "center",
          }}
        >
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div style={{ padding: "1rem" }}>
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white" style={{ marginTop: "0.5rem" }}>
          {course.description.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default Card;

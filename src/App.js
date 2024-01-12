import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(undefined);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const { data } = await res.json();
        setCourses(data);
      } catch (error) {
        toast.error("something went wrong...");
      }
    };
    fetchData();
  }, []);

  if (!courses) {
    return <h1>Courses Not Found!</h1>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-bgDark bg-opacity-80">
      <Navbar />
      <div>
        <Filters filterData={filterData} category={category} setCategory={setCategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          <Cards courses={courses} category={category}/>
        </div>
      </div>
    </div>
  );
}

export default App;

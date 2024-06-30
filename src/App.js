import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  const fecthData = async () => {
    console.log("here ");
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log("inside fetch data function "+data);
      setCourses(data.data);
    } catch (error) {
      toast.error("Something Went Wrong !!!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fecthData();
    console.log("hello from use effect ");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center"
      >{loading ? <Spinner /> : <Cards courses={courses} />}
      </div>
    </div>
  );
}

export default App;

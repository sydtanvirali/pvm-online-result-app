import React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ResultContext } from "../context/ResultContext";
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const resultContext = useContext(ResultContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_ENDPOINT_URL}?sheets=true`
        );
        const res = await response.json();
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const regNo = document.getElementById("regNo").value;
    const standard = document.getElementById("standard").value;

    // fetch result
    const fetchResult = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_ENDPOINT_URL
          }?regNo=${regNo}&sheet=${standard}`
        );
        const res = await response.json();
        if (res.status === 200) {
          resultContext.setResult(res.data);
          setLoading(false);
          navigate("/result");
        } else {
          setLoading(false);
          console.log(res.message);
          toast.error(res.message);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  };

  return (
    <div className="w-full h-full">
      <form className="max-w-sm mx-auto mt-20 px-5" onSubmit={handleSearch}>
        <div className="mb-5">
          <label
            htmlFor="regNo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Registration No.
          </label>
          <input
            type="number"
            id="regNo"
            placeholder="Enter Registeration No..."
            className="input input-bordered w-full max-w-sm"
            required
          />
        </div>

        <div className="mb-10">
          <label
            htmlFor="standard"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Class/Standard
          </label>
          <select
            id="standard"
            className="select select-bordered w-full max-w-sm"
          >
            <option value={""} disabled selected>
              Select Class
            </option>
            {data
              ? data.map((item) => <option key={item}>{item}</option>)
              : null}
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary text-white w-full disabled:bg-primary-content"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-dots loading-md bg-white"></span>
          ) : (
            "Search Result"
          )}
        </button>
      </form>
    </div>
  );
};

export default Home;

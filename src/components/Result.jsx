import React, { useContext, useEffect } from "react";
import { ResultContext } from "../context/ResultContext";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Result = () => {
  const navigate = useNavigate();
  const resultContext = useContext(ResultContext);
  const result = resultContext.result;

  useEffect(() => {
    if (!result) navigate("/");
  }, [result, navigate]);
  if (!result) return null;

  const entries = Object.entries(result).slice(4);

  return (
    <div>
      <div className="overflow-x-auto mx-5 my-10">
        <table className="table w-fit mx-auto border-2 border-black">
          <thead className="bg-slate-50">
            <tr className="border-b-2 border-black">
              <th colSpan={2}>
                <div className="flex flex-col md:flex-row items-center md:gap-4">
                  <img src={Logo} className="w-16 md:w-24" alt="logo" />
                  <div>
                    <h1 className="text-lg md:text-xl text-black">
                      Pratap Vidya Mandir High School
                    </h1>
                    <h1>Tal. Chopda, Dist. Jalgaon (425107)</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-2 md:mt-0">
                  <div className="flex justify-between text-black">
                    <div className="flex gap-2">
                      <h1>Name:</h1>
                      <h1>{result["Student Name"]}</h1>
                    </div>
                    <div className="flex gap-2">
                      <h1>Roll No:</h1>
                      <h1>{result["Roll No."]}</h1>
                    </div>
                  </div>
                  <div className="flex justify-between text-black">
                    <div className="flex gap-2">
                      <h1>Registration No:</h1>
                      <h1>{result["Registration No."]}</h1>
                    </div>
                    <div className="flex gap-2">
                      <h1>Class:</h1>
                      <h1>{result["Class"]}</h1>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
            <tr className="text-center">
              <th>Subjects</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(([key, value], index) =>
              key === "Result" || key === "Percentage" ? (
                <td
                  key={index}
                  className="text-center font-bold bg-slate-50 border-2 border-black"
                >
                  {key}:{" "}
                  {key === "Percentage" ? parseFloat(value).toFixed(2) : value}
                </td>
              ) : (
                <tr key={index} className="text-center">
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;

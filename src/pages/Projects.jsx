import { useContext } from "react";
import { Data } from "../App";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Projects() {
  const { task, dropArea } = useContext(Data);
   const data = {
    labels: dropArea,

    datasets: [
      {
        label: "To-do",
        data: [
          task.filter((item) => item.status === "To-do").length,
          0,
          0,
        ],
        backgroundColor: "#ffb3ba",
      },
      {
        label: "In-progress",
        data: [
          0,
          task.filter((item) => item.status === "In-progress").length,
          0,
        ],
        backgroundColor: "#bae1ff",
      },
      {
        label: "Done",
        data: [
          0,
          0,
          task.filter((item) => item.status === "Done").length,
        ],
        backgroundColor: "#baffc9",
      },
    ],
  };
 const option={
  responsive:true,
  maintainAspectRatio:false,
  plugins:{
 legend:{
  display:true
  }
},
   datasets: {
    bar: {
      categoryPercentage: 0.8,
      barPercentage: 0.8
    }
 }
}
  return (
    <>
      <div className="project-card">
        {dropArea.map((area, index) => (
          <div className="count-card" key={index}>
            <h2>{area}</h2>
            <h1 style={{ color: "#5f70c1" }}>
              {task.filter((item) => item.status === area).length}
            </h1>
          </div>
        ))}
      </div>

      <div style={{ width: "900px", marginBottom:"40px",marginTop:"auto",marginInline:"auto", height:"350px"}}>
        <Bar data={data} options={option} />
      </div>
    </>
  );
}

export default Projects;
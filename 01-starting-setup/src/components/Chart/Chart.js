import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const dataPointsValue = props.dataPoints.map((datapoint) => datapoint.value);
  const maxExpense = Math.max(...dataPointsValue);

//   for (expense in props.dataPoints) {
//     if (maxExpense < expense.value) {
//       maxExpense = expense.value;
//     }
//   }

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

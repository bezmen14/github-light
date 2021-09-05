import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function LineChart() {
  let foo = [];

  for (let i = 1; i <= 53; i += 1) {
    foo.push(i);
  }

  const contributions = useSelector(state => state.contributions);

  return (
    <Line
      data={{
        labels: foo,
        datasets: [{
          label: 'User contributions',
          data: contributions,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 3
        }]
      }}
      height={400}
      width={600}
      options={{
        maintainAspectRatio: false
      }}
    />
  )
}

export default LineChart;

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

class SkillChart  extends React.Component{
  render(){
    const data = {
      labels: ['Python', 'JavaScript', 'Java'],
      datasets: [
        {
          label: 'Expertise',
          data: [90, 85, 30],
          backgroundColor: [
            'rgba(154, 116, 35, 1',
            'rgb(253,185,49)',
            'rgb(65, 65, 65)'
          ],
          borderWidth: 0,
          id: ['python', 'javascript', 'java'],
        },
      ],
    };

    const options = {
      scales: {
        x:{
          type: 'category'
        },
        y: {
          beginAtZero: true,
          max: 400,
        },
      },
    };

    return (
      <div className='skillchart-container'>
          <Doughnut data={data}/>
      </div>
    );
  }
};

export default SkillChart;

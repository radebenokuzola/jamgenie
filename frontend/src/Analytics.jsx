import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Analytics = () => {
  const engagementData = {
    labels: ['Likes', 'Shares', 'Comments'],
    datasets: [{
      label: 'Engagement Metrics',
      data: [120, 60, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  return (
    <div className="analytics">
      <h2>Analytics Dashboard</h2>
      <Bar data={engagementData} />
    </div>
  );
};

export default Analytics;
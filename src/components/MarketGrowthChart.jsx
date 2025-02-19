import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip);

const marketData = {
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'],
  allIndia: [500, 550, 604, 665, 732, 706, 777, 864, 962, 1076, 1202, 1350, 1526, 1733, 1977, 2266, 2608, 3017],
  tier1: [300, 324, 350, 378, 408, 388, 415, 445, 472, 501, 526, 552, 580, 609, 639, 671, 705, 740],
  tier2: [150, 168, 188, 211, 236, 229, 256, 292, 336, 387, 445, 511, 588, 676, 778, 894, 1028, 1183],
  tier3: [50, 58, 66, 76, 87, 89, 105, 126, 154, 188, 231, 287, 358, 448, 560, 700, 875, 1094]
};

const MarketGrowthChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: marketData.years,
        datasets: [
          {
            label: 'All-India',
            data: marketData.allIndia,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            tension: 0.4,
          },
          {
            label: 'Tier-1 Cities',
            data: marketData.tier1,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.1)',
            tension: 0.4,
          },
          {
            label: 'Tier-2 Cities',
            data: marketData.tier2,
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.1)',
            tension: 0.4,
          },
          {
            label: 'Tier-3 Cities',
            data: marketData.tier3,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Year',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Market Size (₹ Billion)',
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        animation: {
          duration: 1000,
          easing: 'easeInOutQuart',
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-96">
      <canvas ref={chartRef} />
    </div>
  );
};

export default MarketGrowthChart;

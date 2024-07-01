import { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for Chart.js to work

const FinancialAnalytics = () => {
  const [view, setView] = useState('yearly');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [data, setData] = useState({ income: 0, expenses: 0 });

  useEffect(() => {
    fetchData();
  }, [view, selectedMonth, selectedYear]);

  const fetchData = async () => {
    let url = `http://localhost:5000/api/financial-analytics?view=${view}&year=${selectedYear}`;
    if (view === 'monthly' && selectedMonth) {
      console.log(selectedMonth);
      url = `http://localhost:5000/api/financial-analytics?Month=${selectedMonth}&view=${view}&year=${selectedYear}`;
    }

    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const chartData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Amount',
        data: [data.income, data.expenses],
        backgroundColor: ['#4CAF50', '#F44336'],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Financial Analytics</h1>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="monthly"
            checked={view === 'monthly'}
            onChange={() => setView('monthly')}
            className="mr-2"
          />
          Monthly
        </label>
        <label>
          <input
            type="radio"
            value="yearly"
            checked={view === 'yearly'}
            onChange={() => setView('yearly')}
            className="mr-2"
          />
          Yearly
        </label>
      </div>
      {view === 'monthly' && (
        <div className="mb-4">
          <label className="block">
            Select Month:
            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </label>
        </div>
      )}
      <div className="mb-4">
        <label className="block">
          Select Year:
          <input
            type="number"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </label>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Income vs Expenses</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default FinancialAnalytics;

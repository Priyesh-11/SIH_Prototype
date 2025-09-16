import React, { useEffect, useRef } from 'react';
import ApexChart from 'react-apexcharts';

const AnalyticsPage = () => {
  const series = [{ name: 'On-time %', data: [88, 90, 92, 89, 93, 95, 92] }];
  const options = {
    chart: { toolbar: { show: false }, animations: { easing: 'easeinout' } },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    colors: ['#ff6b6b'],
    stroke: { curve: 'smooth', width: 3 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 0.4, opacityFrom: 0.6, opacityTo: 0.2 } },
    dataLabels: { enabled: false }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginTop: 0 }}>Analytics</h2>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: 'var(--boxShadow)', padding: 12 }}>
        <ApexChart options={options} series={series} type="area" height={260} />
      </div>
    </div>
  );
};

export default AnalyticsPage;



import React, { useMemo, useState } from 'react';

const initialTrains = [
  { id: '1287', name: 'Intercity', route: 'A → D', eta: '12:07 (+6m)', status: 'Delayed' },
  { id: '2203', name: 'Express', route: 'B → F', eta: 'On time 11:52', status: 'On-time' },
  { id: '0912', name: 'Local', route: 'C → E', eta: '12:15 (-2m)', status: 'Ahead' },
  { id: '5540', name: 'Freight', route: 'Yard → C', eta: 'Hold', status: 'Holding' },
];

const statusColors = {
  'Delayed': '#ffb3b3',
  'On-time': '#b9f3c7',
  'Ahead': '#b7d7ff',
  'Holding': '#c9d1d9'
};

const TrainsPage = () => {
  const [query, setQuery] = useState('');
  const [trains, setTrains] = useState(initialTrains);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return trains.filter(t =>
      t.id.includes(q) ||
      t.name.toLowerCase().includes(q) ||
      t.route.toLowerCase().includes(q) ||
      t.status.toLowerCase().includes(q)
    );
  }, [query, trains]);

  const updateStatus = (id, next) => {
    setTrains(prev => prev.map(t => t.id === id ? { ...t, status: next } : t));
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2 style={{ margin: 0 }}>Trains</h2>
        <input
          placeholder="Search by id, name, route, status"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ padding: 8, borderRadius: 8, border: '1px solid #ddd', width: 280 }}
        />
      </div>

      <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 12, boxShadow: 'var(--boxShadow)' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ padding: '12px 16px' }}>ID</th>
              <th style={{ padding: '12px 16px' }}>Name</th>
              <th style={{ padding: '12px 16px' }}>Route</th>
              <th style={{ padding: '12px 16px' }}>ETA</th>
              <th style={{ padding: '12px 16px' }}>Status</th>
              <th style={{ padding: '12px 16px' }}></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(t => (
              <tr key={t.id}>
                <td style={{ padding: '10px 16px' }}>{t.id}</td>
                <td style={{ padding: '10px 16px' }}>{t.name}</td>
                <td style={{ padding: '10px 16px' }}>{t.route}</td>
                <td style={{ padding: '10px 16px' }}>{t.eta}</td>
                <td style={{ padding: '10px 16px' }}>
                  <span style={{ background: statusColors[t.status] || '#eee', padding: '4px 10px', borderRadius: 8 }}>
                    {t.status}
                  </span>
                </td>
                <td style={{ padding: '10px 16px' }}>
                  <select value={t.status} onChange={e => updateStatus(t.id, e.target.value)} style={{ padding: 6, borderRadius: 8 }}>
                    <option>On-time</option>
                    <option>Delayed</option>
                    <option>Ahead</option>
                    <option>Holding</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainsPage;



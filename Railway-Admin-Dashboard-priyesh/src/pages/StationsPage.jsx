import React, { useMemo, useState } from 'react';

const stations = [
  { code: 'A', name: 'Alpha Junction', platforms: 4, status: 'Normal' },
  { code: 'B', name: 'Beta Central', platforms: 6, status: 'Busy' },
  { code: 'C', name: 'Gamma East', platforms: 3, status: 'Normal' },
  { code: 'D', name: 'Delta West', platforms: 2, status: 'Maintenance' },
  { code: 'E', name: 'Epsilon Yard', platforms: 8, status: 'Normal' },
];

const StationsPage = () => {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return stations.filter(s => s.code.toLowerCase().includes(q) || s.name.toLowerCase().includes(q) || s.status.toLowerCase().includes(q));
  }, [query]);

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginTop: 0 }}>Stations</h2>
      <input
        placeholder="Search stations by code/name/status"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: 8, borderRadius: 8, border: '1px solid #ddd', width: 320, marginBottom: 12 }}
      />

      <div style={{ display: 'grid', gap: 12 }}>
        {filtered.map(s => (
          <div key={s.code} style={{ background: '#fff', borderRadius: 12, boxShadow: 'var(--boxShadow)', padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600 }}>{s.name} ({s.code})</div>
                <div style={{ color: '#555' }}>Platforms: {s.platforms}</div>
              </div>
              <span style={{ background: '#eef', padding: '4px 10px', borderRadius: 8 }}>{s.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationsPage;



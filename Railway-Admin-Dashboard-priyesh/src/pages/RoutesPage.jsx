import React, { useState } from 'react';

const dummyRoutes = [
  { id: 'R1', name: 'A → D', stops: ['A', 'B', 'C', 'D'], trains: ['1287', '0912'] },
  { id: 'R2', name: 'B → F', stops: ['B', 'E', 'F'], trains: ['2203'] },
  { id: 'R3', name: 'Yard → C', stops: ['Yard', 'B', 'C'], trains: ['5540'] },
];

const RoutesPage = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginTop: 0 }}>Routes</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {dummyRoutes.map(route => (
          <div key={route.id} style={{ background: '#fff', borderRadius: 12, boxShadow: 'var(--boxShadow)' }}>
            <button onClick={() => setExpanded(expanded === route.id ? null : route.id)}
              style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none', padding: 16, fontSize: 16, cursor: 'pointer' }}>
              <strong>{route.id}</strong> — {route.name}
            </button>
            {expanded === route.id && (
              <div style={{ padding: '0 16px 16px 16px' }}>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 6 }}>Stops</div>
                    <div>{route.stops.join(' → ')}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 6 }}>Assigned Trains</div>
                    <div>{route.trains.join(', ')}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutesPage;



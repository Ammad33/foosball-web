import React from 'react';

function App() {
  return (
    <div style={{ height: 100 + '%' }} className='ui grid'>
      <div className='two wide column'>left sidebar</div>
      <div className='twelve wide column'>main</div>
      <div className='two wide column'>right sidebar</div>
    </div>
  );
}

export default App;

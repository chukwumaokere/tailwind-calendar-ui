import React from 'react';
import Calendar from './components/calendar';
import { events } from './data';

function App() {
  
  return (
    <div className='bg-slate-900 h-full'>
      <Calendar title="Pinót's Calendar" subtitle='A day in my life' events={events} />
    </div>
  )
}

export default App

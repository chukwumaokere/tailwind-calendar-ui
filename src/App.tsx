import { useCallback } from 'react';
import Calendar from './components/calendar';
import { events } from './data';

function App() {
  
  const onDragSuccess = useCallback((id: string | number, startDate: Date, endDate: Date) => {
    const eventToUpdate = events.find((event) => event.id === id);
    if (eventToUpdate) {
      eventToUpdate.startDate = startDate;
      eventToUpdate.endDate = endDate;
    }
  }, []);

  return (
    <div className='bg-slate-900 h-full min-h-[inherit]'>
      <Calendar title="Pinót's Calendar" subtitle='A day in my life' events={events} maxHeight={'max-h-[36rem]'} onDragSuccess={onDragSuccess} showCalendarDateLabel logEvents />
    </div>
  )
}

export default App

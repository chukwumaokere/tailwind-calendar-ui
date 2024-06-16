import { useCallback, useState } from 'react';
import Calendar from './components/calendar';
import { events } from './data';

function App() {
  const [draggable, setDraggable] = useState(true);
  const [resizable, setResizable] = useState(true);
  const [logEvents, setLogEvents] = useState(false);
  const [calendarDateLabel, setCalendarDateLabel] = useState(true);

  const onDragSuccess = useCallback((id: string | number, startDate: Date, endDate: Date) => {
    const eventToUpdate = events.find((event) => event.id === id);
    if (eventToUpdate) {
      eventToUpdate.startDate = startDate;
      eventToUpdate.endDate = endDate;
    }
  }, []);

  return (
    <div className='bg-slate-900 h-full min-h-[inherit]'>
      <div className='flex flex-col'>
        <h2 className='text-lg text-white font-bold'>Options</h2>
        <div>
          <input type="checkbox" id="draggable" checked={draggable} onChange={() => setDraggable(!draggable)} />
          <label className='text-white' htmlFor="draggable">Draggable</label>
        </div>
        <div>
          <input type="checkbox" id="resizable" checked={resizable} onChange={() => setResizable(!resizable)} />
          <label className='text-white'  htmlFor="resizable">Resizable</label>
        </div>
        <div>
          <input type="checkbox" id="logEvents" checked={logEvents} onChange={() => setLogEvents(!logEvents)} />
          <label className='text-white' htmlFor="logEvents">Log Events (Open Console)</label>
        </div>
        <div>
          <input type="checkbox" id="calendarDateLabel" checked={calendarDateLabel} onChange={() => setCalendarDateLabel(!calendarDateLabel)} />
          <label className='text-white' htmlFor="calendarDateLabel">Calendar Date Label</label>
        </div>
      </div>
      <Calendar title="Pinót's Calendar" subtitle='A day in my life' events={events} maxHeight={'max-h-[36rem]'} onDragSuccess={onDragSuccess} draggable={draggable} resizable={resizable} showCalendarDateLabel={calendarDateLabel} logEvents={logEvents} />
    </div>
  )
}

export default App

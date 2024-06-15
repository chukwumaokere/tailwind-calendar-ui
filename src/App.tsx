import Calendar from './components/calendar';
import { events } from './data';

function App() {
  
  return (
    <div className='bg-slate-900 h-full min-h-[inherit]'>
      <Calendar title="Pinót's Calendar" subtitle='A day in my life' events={events} maxHeight={'max-h-[36rem]'} showCalendarDateLabel />
    </div>
  )
}

export default App

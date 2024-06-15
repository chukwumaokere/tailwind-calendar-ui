import React from 'react';

export interface Event { 
    title: string;
    startDate: Date;
    endDate: Date;
    location: string;
    backgroundColor: string;
    border: string;
    textColor: string;
}

// Find a way to derive these values from the data
const ROW_OFFSET = 2;
const COLUMN_OFFSET = 2;
const HOUR_OFFSET = 3;

function getTileRowNumber(index: number, denominator: number) {
    return Math.floor(index / denominator) + ROW_OFFSET;
}

function getTileColumnNumber(index: number, denominator: number) {
    return (index % denominator) + COLUMN_OFFSET;
}

const DEFAULT_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DEFAULT_HOURS = ['5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12AM', '1AM', '2AM', '3AM', '4AM'];

export interface CalendarProps { 
    title?: string, 
    subtitle?: string, 
    days?: string[], 
    hours?: string[], 
    events: Event[]
}
export default function Calendar({title, subtitle, days = DEFAULT_DAYS, hours = DEFAULT_HOURS, events}: CalendarProps) {
    
    return (
        <>
            {title ? <h1 className='text-2xl text-white'>{title}</h1> : null}
            {subtitle ? <h1 className='text-xl text-white'>{subtitle}</h1> : null}
            <div className={`overflow-auto grid grid-cols-[70px,repeat(${days.length},150px)] grid-rows-[auto,repeat(${hours.length},50px)] `}>
                {/*Empty Corner Tile*/}
                <div className="row-start-[1] col-start-[1] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2"></div>
                
                {/*Calendar Setup*/}
                {days.map((day, index) => (
                    <div key={index} className={`row-start-[1] col-start-[${index + COLUMN_OFFSET}] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2 text-center`}>{day}</div>
                ))}
                {hours.map((hour, index) => (
                <div className={`row-start-[${index + ROW_OFFSET}] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium`}>{hour}</div> 
                ))}
                {Array.from({length: days.length * hours.length}).map((_, index) => {
                    return (
                        <div key={index} className={`row-start-[${getTileRowNumber(index, days.length)}] col-start-[${getTileColumnNumber(index, days.length)}] border-slate-100 dark:border-slate-200/5 border-b border-r`}></div>
                    )
                })}
                {/* /Calendar Setup*/}

                {/* Events Processing */}
                {events.map((event, index) => {
                    const startHour = event.startDate.getHours();
                    const startRow = startHour - HOUR_OFFSET;
                    const startCol = event.startDate.getDay() + COLUMN_OFFSET;
                    const rowSpan =  event.endDate.getHours() - startHour;
                    
                    return (
                        <div key={index} className={`row-start-[${startRow}] row-[span_${rowSpan}/_span_${rowSpan}] col-start-[${startCol}] ${event.backgroundColor} ${event.border} ${event.textColor} rounded-lg `}>
                            <div className='text-xxs/[.75rem] extra-tight px-2 font-medium'>{startHour % 12}{startHour > 12 ? 'PM' : 'AM'}</div>
                            <div className='text-sm px-2 font-medium'>{event.title}</div>
                            <div className='text-xxs/[.75rem] extra-tight px-2 font-medium'>{event.location}</div>
                        </div>
                    )
                })}
                {/* /Events Processing */}
            </div>
        </>
    )
}
import { Event } from "./components/calendar";


export const events: Event[] = [
    {
        title: 'Workout',
        startDate: new Date('2024-06-16 09:00:00'),
        endDate: new Date('2024-06-16 12:00:00'),
        location: 'Gym @ Home',
        backgroundColor: 'bg-blue-400/20',
        border: 'border-solid border border-white/10',
        textColor: 'text-white'
    },
    {
        title: 'Workout',
        startDate: new Date('2024-06-17 05:00:00'),
        endDate: new Date('2024-06-17 09:00:00'),
        location: '24 E. Washington',
        backgroundColor: 'bg-purple-400/20',
        border: 'border-solid border border-white/10',
        textColor: 'text-white'
    },
    {
        title: 'Workout',
        startDate: new Date('2024-06-17 16:00:00'),
        endDate: new Date('2024-06-17 20:00:00'),
        location: '24 E. Washington',
        backgroundColor: 'bg-amber-400/20',
        border: 'border-solid border border-white/10',
        textColor: 'text-white'
    },
    {
        title: 'Grocery Shopping',
        startDate: new Date('2024-06-17 14:00:00'),
        endDate: new Date('2024-06-17 18:00:00'),
        location: 'Marianos on Clark',
        backgroundColor: 'bg-emerald-400/20',
        border: 'border-solid border border-white/10',
        textColor: 'text-white'
    },
    {
        title: 'Grocery Shopping',
        startDate: new Date('2024-06-19 11:00:00'),
        endDate: new Date('2024-06-19 12:00:00'),
        location: 'Marianos on Clark',
        backgroundColor: 'bg-orange-400/20',
        border: 'border-solid border border-white/10',
        textColor: 'text-white'
    },
    {
        title: 'Buy Ferrari',
        startDate: new Date('2024-06-20 09:00:00'),
        endDate: new Date('2024-06-20 11:00:00'),
        location: 'Ferrari Dealership',
        backgroundColor: 'bg-red-400/20',
        border: 'border-solid border border-white/10',
        textColor: 'text-white'
    },
    {
        title: 'Sleep',
        startDate: new Date('2024-06-22 05:00:00'),
        endDate: new Date('2024-06-22 23:00:00'),
        location: 'Day off',
        backgroundColor: 'bg-stone-400/20',
        border: 'border-solid border border-white/10',
        textColor: 'text-white'
    },
];
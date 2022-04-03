import './styles/main.scss';

const date: Date = new Date();

const currentDate = (date: Date): number => date.getDate();

const currentDay = (date: Date): string =>
  date.toLocaleString('default', { weekday: 'long' });

const nextMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 1);

const previousMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() - 1);

console.log('currentDate:', currentDate(date));
console.log('currentDay:', currentDay(date));

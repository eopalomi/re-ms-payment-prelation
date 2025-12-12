type DateFormats =
  | 'yyyy-mm-dd'
  | 'YYYY-MM-DD_hhmmss'
  | 'hh:mm'
  | 'hh:mm:ss AM|PM';

export const formatedDate = (date: Date, dateFormats: DateFormats): string => {
  if (!dateFormats) {
    throw new Error('Function formatedDate requires dateFormats arg');
  }

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

  switch (dateFormats) {
    case 'YYYY-MM-DD_hhmmss':
      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}.${milliseconds}`;
    case 'yyyy-mm-dd':
      return `${year}-${month}-${day}`;
    case 'hh:mm':
      return `${hour}:${minutes}`;
    case 'hh:mm:ss AM|PM':
      const period = date.getHours() >= 12 ? 'PM' : 'AM';
      const hour12 = (date.getHours() % 12 || 12).toString().padStart(2, '0');
      return `${hour12}:${minutes}:${seconds} ${period}`;
    default:
      return `${year}-${month}-${day}`;
  }
};

const getSecondsCountdown = (targetDate:Date) => {
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();
    return Math.floor(difference / 1000);
}

// Formatting function to display time in 'DD:hh:mm:ss' format
const formatTime = (time: number): string => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${days.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}   ${minutes.toString().padStart(2, '0')}   ${seconds.toString().padStart(2, '0')}`;
};

export {
    getSecondsCountdown, 
    formatTime
}
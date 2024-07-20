export const greetingMessage = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    const greetings = (hour: number): string => {
      switch (true) {
        case hour >= 5 && hour < 12:
          return "Good morning";
        case hour >= 12 && hour < 14:
          return "Good Afternoon";
        case hour >= 14 && hour < 18:
          return "Selamat Evening";
        default:
          return "Good Night";
      }
    };
    // console.log(greetings(currentHour))
    return greetings(currentHour)
    
  };
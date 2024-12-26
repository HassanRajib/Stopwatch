import { useState } from "react";

const Watch = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
  const [status, setStatus] = useState();

  let upHr = time.hr;
  let upMin = time.min;
  let upSec = time.sec;
  let upMilli = time.milli;

  const start = () => {
    funMy();
    setStatus(setInterval(funMy, 10));
  };

  const stop = () => {
    clearInterval(status);
  };

  const reset = () => {
    clearInterval(status);
    setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
  };

  const funMy = () => {
    if (upMilli === 100) {
      upMilli = 0;
      upSec++;
    }
    if (upSec === 60) {
      upSec = 0;
      upMin++;
    }
    if (upMin === 60) {
      upMin = 0;
      upHr++;
    }
    upMilli++;
    return setTime({ hr: upHr, min: upMin, sec: upSec, milli: upMilli });
  };

  return (
        <div className="flex justify-center items-center h-screen">
            <div className='shadow-lg px-8 py-5 border w-90 '>
                <h1 className='text-3xl font-bold mb-4'>{time.hr}:{time.min}:{time.sec}:{time.milli}</h1>
                <div className='buttons flex space-x-4'>
                    <button className='start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg' onClick={start}>Start</button>
                    <button className='stop bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg' onClick={stop}>Stop</button>
                    <button className='reset bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg' onClick={reset}>Reset</button>
                </div>
            </div>
            </div>
  );
};

export default Watch;

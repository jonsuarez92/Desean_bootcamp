import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from "react";
//pages
import Home from '../Home/Home'
import HomeShowPage from '../Home/HomeShowPage';
// components
import MediaIcons from '../../components/MediaIcons/MediaIcons';
import Footer from '../../components/Footer/Footer';
import Clock from "../../components/Clock/Clock";

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("February 18,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <main className="App">
      <>

        <div className="backGroundI">
          <div >
            <Clock
              timerDays={timerDays}
              timerHours={timerHours}
              timerMinutes={timerMinutes}
              timerSeconds={timerSeconds}
            />
            <MediaIcons />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bootCamp-class" element={<HomeShowPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </>

    </main>

  );
}

export default App;

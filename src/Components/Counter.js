import React, { useEffect, useRef, useState } from 'react';
import './Counter.css';

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Adjust this value according to your needs
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < targetNumber) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount >= targetNumber) {
            clearInterval(interval);
            return targetNumber;
          }
          return newCount;
        });
      }, 150); // Adjust the interval speed according to your needs

      return () => clearInterval(interval);
    }
  }, [isVisible, count, targetNumber]);

  return (
    <div ref={counterRef} style={{ fontSize: '4rem', color: 'gray', fontWeight: '500'}}>
      {count}
    </div>
  );
};


export default Counter;
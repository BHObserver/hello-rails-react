import React, { useState, useEffect } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetchRandomGreeting();
  }, []);

  const fetchRandomGreeting = async () => {
    const response = await fetch('/random_greeting');
    const data = await response.json();
    setGreeting(data.content);
  };

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;

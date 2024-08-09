import React, { useState, useEffect } from 'react';

function Motivation() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const quotes = [
      "¡Hoy es un gran día para lograr tus metas!",
      "Cada día es una nueva oportunidad.",
      "¡Sigue adelante, estás haciendo un gran trabajo!",
      "El éxito está en el esfuerzo constante.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="motivation">
      <p>{quote}</p>
    </div>
  );
}

export default Motivation;
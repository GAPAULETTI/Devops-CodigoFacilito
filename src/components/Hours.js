import React from 'react';

const Hours = () => {
  // Obtenemos el día de la semana actual
  const today = new Date().getDay();

  // Definimos los horarios según el día
  let hours;
  if (today >= 1 && today <= 5) {
    // Lunes a Viernes
    hours = '10:00 AM - 4:00 PM';
  } else {
    // Sábado y Domingo
    hours = '9:00 AM - 8:00 PM';
  }

  return (
    <div>
      <h2>Today's Opening Hours</h2>
      <p>{hours}</p>
    </div>
  );
};

export default Hours;

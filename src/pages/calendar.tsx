import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const calendarRef = useRef()

  const datesToAddClassTo = ["2023-02-19", "in3Days", "in5Days"];
    console.log(value)
function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  console.log(date, view)
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    console.log(date, view)
    if (datesToAddClassTo.find(dDate => dDate === date)) {
        console.log("test")
      return 'bg-green-900';
    }
  }
}

  console.log(calendarRef.showNavigation)
  return (
    <div inputRef={calendarRef}>
      <Calendar onChange={onChange} value={value} className="rounded-xl" tileClassName={() => {tileClassName("2023-02-19", "month")}}/>
    </div>
  );
}

export default CalendarPage;
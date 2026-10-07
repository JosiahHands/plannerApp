import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          name:
        </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>
            date: 
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={getTodayString()}
          />
          <label>
            time: 
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <ContactPicker
            contacts={contacts}
            contact={contact}
            setContact={(e) => setContact(e.target.value)}
          />
          <button type="submit">
            Add Appointment
          </button>
      </form>
    </>
  );
};

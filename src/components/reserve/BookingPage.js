import Heading from "./Heading";
import ReservationForm from "./BookingForm";
import {useReducer} from "react";
import {fetchAPI} from "../../api/bookingsAPI";

export default function BookingPage() {
  async function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
      <>
        <Heading/>
        <ReservationForm availableTimes={availableTimes} updateTimes={dispatch}/>
      </>
  );
}

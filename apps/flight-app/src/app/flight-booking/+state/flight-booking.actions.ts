import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';

export const flightsLoad = createAction(
  '[FlightBooking] Flight load',
  props<{ from: string, to: string, urgent: boolean }>()
);

export const flightsLoaded = createAction(
  '[FlightBooking] Flight loaded',
  props<{ flights: Flight[] }>()
);

export const flightUpdate = createAction(
  '[FlightBooking] Flight update',
  props<{ flight: Flight }>()
);

/*
export const loadFlightBookingsFailure = createAction(
  '[FlightBooking] Load FlightBookings Failure',
  props<{ error: any }>()
);
 */

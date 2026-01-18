/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import JoinTripModal from './JoinTripModal';
import TripStatusBadge from './TripStatusBadge';

export default function TripCard({ trip }: any) {
  const [open, setOpen] = useState(false);

  const isJoinDisabled =
    trip.tripStatus !== 'UPCOMING' || trip.remainingSeats <= 0;

  return (
    <>
      <div className="border rounded-xl p-4 flex flex-col">
        <img
          src={trip.image}
          alt={trip.destination}
          className="h-40 object-cover rounded"
        />

        <div className="mt-3 flex justify-between items-center">
          <h3 className="font-semibold">{trip.destination}</h3>
          <TripStatusBadge status={trip.tripStatus} />
        </div>

        <p className="text-sm text-muted mt-2">
          {trip.description.slice(0, 80)}...
        </p>

        <p className="mt-2 text-sm">
          Seats Left: <b>{trip.remainingSeats}</b>
        </p>

        <button
          disabled={isJoinDisabled}
          onClick={() => setOpen(true)}
          className="mt-auto bg-primary text-white py-2 rounded disabled:opacity-40"
        >
          Join Trip
        </button>
      </div>

      <JoinTripModal
        open={open}
        onClose={() => setOpen(false)}
        travelPlanId={trip.id}
        remainingSeats={trip.remainingSeats}
      />
    </>
  );
}

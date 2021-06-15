import React from 'react'
import {EventFormModal, FullEventModal, RemoveEventModal, UpdateEventFormModal} from './modals'

export const EventModals: React.FC = () => (
  <>
    <EventFormModal />
    <FullEventModal />
    <RemoveEventModal />
    <UpdateEventFormModal />
  </>
)

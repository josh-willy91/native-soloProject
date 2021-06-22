// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import events from './events';

function Events() {
  const [events, setEvents] = useState();

  return (
    <>
      {showModal && (
        <Modal>
          <Events />
        </Modal>
      )}
    </>
  );
}

export default Events;

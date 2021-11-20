import AppointmentCalendar from 'components/AppointmentCalendar';
import Appointments from 'components/Appointments';
import Footer from 'components/Footer';
import Menubar from 'components/Menubar';
import React, { useState } from 'react';

export default function Appointment () {

    const [value, onChange] = useState(new Date());

    return (
        <>
            <Menubar isHome={false} />
                <AppointmentCalendar date={[value, onChange]} />
                <Appointments date={value} />
            <Footer />
        </>
    );
}
import React from 'react';
import MonthsTape from "./components/months-tape"
import ScheduleMonth from "./components/schedule-month"


function SchedulePage() {
    return (
        <>
            <MonthsTape />
            <ScheduleMonth />
        </>
    );
}

export default SchedulePage;
import { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { SideBar } from "../component/sidebar/sideBar";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PageNavigate } from '../component/navigate/pageNavigate';
const CalendarPage = () => {
    const [locale, setLocale] = useState('ru');
    const [value, setValue] = useState(dayjs(new Date));
    return (
        <>
            <div className="container">
                <PageNavigate
                    pagetitle="Календарь"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        openTo="year"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <SideBar></SideBar>
        </>
    )
}
export { CalendarPage }
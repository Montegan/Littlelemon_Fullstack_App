import {screen,render} from '@testing-library/react';
import Bookingform from './Bookingform';

test("renders the label for the Date field in the form",()=>{
    const availableTimeData = {
        Times: ["9:00 AM", "10:00 AM", "11:00 AM"],
      };

    render(<Bookingform availableTime={availableTimeData} />);
    const handleLabel= screen.getByText("Date");
    expect(handleLabel).toBeInTheDocument();
})


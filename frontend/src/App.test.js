import { render, screen } from '@testing-library/react';
import App from './App';

test("should initialize the available time with initial values", ()=>{
      render(<App/>)
      const InitialTime= screen.getByText("TimeList");
      expect(InitialTime).toBeInTheDocument();
})

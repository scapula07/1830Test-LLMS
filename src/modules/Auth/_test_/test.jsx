import { render, screen} from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import LoginView from "../views/login"


describe('LoginView', () => {
it('should have text', () => {
render (<LoginView  />);
expect (screen.getByText(/Login/i)).toBeInTheDocument ();
})

})

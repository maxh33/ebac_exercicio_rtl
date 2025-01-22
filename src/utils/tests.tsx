import { render } from '@testing-library/react';
import { store } from '../store/store';
import { Provider } from 'react-redux';

type RenderWithProvider = {
    (ui: React.ReactElement): ReturnType<typeof render>;
}

export const renderWithProvider: RenderWithProvider = (ui) => {
    return render(<Provider store={store}>{ui}</Provider>);
}; 



import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Card from '../Components/Dashboard/Card';
import store from '../Redux/configureStore';

describe('the card items', () => {
  it('should show the card data', () => {
    const { asFragment } = render(<Provider store={store}><Card change={4.4} companyName="Google" price={5000} changesPercentage={3.76} symbol="G" /></Provider>, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});

import * as remx from 'remx';

export interface StockData {
  symbol: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
}
const initialState = {
  companiesList: new Array<StockData>(),
};

const state = remx.state(initialState);

const getters = remx.getters({
  getCompaniesList() {
    return state.companiesList;
  },
});

const setters = remx.setters({
  addCompany(company: StockData) {
    state.companiesList.push(company);
    console.log(getters.getCompaniesList());
  },
});

export const store = {
  ...setters,
  ...getters,
};

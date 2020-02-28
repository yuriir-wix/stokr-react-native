import {store, StockData} from './companiesStore';
import {mocks} from '../mocks';

const filterValidStocks = (stocks: StockData[]): StockData[] => {
  return stocks.filter(item => item && item.change !== undefined);
};

export const addCompany = (company: StockData) => {
  store.addCompany(company);
};

export function fetchCompanies(symbols: string[]) {
  symbols.push('');
  //const response = await fetch('http://api.icndb.com/jokes/random');
  //const result = await response.json();
  const result = mocks;
  const companies = filterValidStocks(result);
  companies.forEach(company => store.addCompany(company));
}

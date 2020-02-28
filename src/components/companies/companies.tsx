import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Company} from './company';
import {store, StockData} from '../../stores/companiesStore';
import * as actions from '../../stores/companiesActions';
import {connect} from 'remx';

export interface CompaniesProps {
  companiesList: Array<StockData>;
}

const Companies: React.FC<CompaniesProps> = ({companiesList}) => {
  useEffect(() => {
    actions.fetchCompanies([]);
  }, []);

  console.log('companies:', companiesList);

  return (
    <>
      {companiesList.map(company => (
        <Company
          key={company.symbol}
          companyName={company.companyName}
          favourite={false}
        />
      ))}
    </>
  );
};

const mapStateToProps = () => ({
  companiesList: store.getCompaniesList(),
});

export default connect(mapStateToProps)(Companies);

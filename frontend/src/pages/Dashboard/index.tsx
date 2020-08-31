import React from 'react';
import Page from '../../components/shared/Page';
import Title from '../../components/shared/Title';
import BusinessTypeSelector from '../../components/BusinessTypeSelector';

const Dashboard: React.FC = () => {
  return (
    <Page>
      <Title text="Dashboard" />
      <BusinessTypeSelector />
    </Page>
  );
}

export default Dashboard;

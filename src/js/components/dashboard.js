import React from 'react';
import Mui from 'material-ui';
import MyOrderList from './my-order-list';
import InOrderingList from './in-ordering-list';
import RecommendStores from './recommend-stores';

export default class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <MyOrderList />
        <InOrderingList />
        <RecommendStores />
      </div>
    );
  }

}

import React from 'react';
import Tabs from './tab';
import Time from './time';
import Weather from './weather';

// class Root extends React.Component {
//   render() {
//
//   }
// }

const tabData = [
  {title: "Fake title", body: "fake body"},
  {title: "Fake title 2", body: "fake content 2"},
  {title: "Fake title 3", body: "fake content 3"}
];

const Root = () => (
  <Tabs tabData={tabData}/>,
  <Time />
);
export default Root;

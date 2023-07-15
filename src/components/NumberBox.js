import React from 'react';
import { NumberBox } from '@appbaseio/reactivesearch';

const NumberBoxComponent = () => {
  return (
    <NumberBox
      componentId="GuestSensor"
      dataField="accommodates"
      title="Guests"
      defaultSelected={2}
      data={{
        start: 1,
        end: 16
      }}
    />
  );
};

export default NumberBox;

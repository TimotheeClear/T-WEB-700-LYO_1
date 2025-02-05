import React from 'react';

interface TimeSeriesProps {
  data: any;
}

export const TimeSeries = (props: TimeSeriesProps) => {
  console.log(props);
  return <div>TimeSeries</div>;
};

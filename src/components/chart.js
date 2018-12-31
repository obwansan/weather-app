import React from 'react';
import { Sparklines, SparklinesLine } from 'react-Sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
}

import React from 'react';
/**
 * Component that displays when you make an async request to server
 * 
 * 
 * @returns (
 *  <Spinner />
 * )
 */
const Spinner = () => {
  return (
    <div className="ui middle aligned center aligned grid">
      <div className="ui active inverted dimmer">
        <div className="ui massive text loader">Loading</div>
      </div>
    </div>
  );
};

export default Spinner;

import React from 'react';

const Loading = () => 
  <h3 className="loading">Loading ...</h3>

const withLoading = (Component) => ({ isLoading, ...rest }) =>
isLoading
  ? <Loading />
  : <Component {...rest} />

export default withLoading
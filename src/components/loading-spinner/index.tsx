import React from 'react';
import { AppLoadingContainer, AppLoadingIndicator } from './styles';

const LoadingSpinner = () => {
  return (
    <AppLoadingContainer>
      <AppLoadingIndicator />
    </AppLoadingContainer>
  );
};

export default LoadingSpinner;

import React, { useState } from 'react';
import PasswordProtection from '../PasswordProtection/PasswordProtection';
import DataDashboard from '../../pages/DataDashboard/DataDashboard';

const ProtectedRoute = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  if (!isAuthorized) {
    return <PasswordProtection onAuthorized={() => setIsAuthorized(true)} />;
  }

  return <DataDashboard />;
};

export default ProtectedRoute;
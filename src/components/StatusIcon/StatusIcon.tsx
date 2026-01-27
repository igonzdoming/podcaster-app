import { memo, useEffect } from 'react';
import { useAppContext } from '../../context';
import './StatusIcon.css';

const StatusIcon = () => {
  const { statusIcon, setStatusIcon } = useAppContext();

  useEffect(() => {
    if (!statusIcon) return;

    const timer = setTimeout(() => {
      setStatusIcon(null);
    }, statusIcon.duration ?? 3000);

    return () => clearTimeout(timer);
  }, [statusIcon, setStatusIcon]);

  if (!statusIcon) {
    return null;
  }

  return (
    <div
      className={`status-icon-circle status-icon--${statusIcon.type}`}
      role="status"
      aria-live="polite"
      aria-label={`Estado: ${statusIcon.type}`}
    />
  );
};

export default memo(StatusIcon);

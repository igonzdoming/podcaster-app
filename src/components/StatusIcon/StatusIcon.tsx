import { useEffect } from 'react';
import './StatusIcon.css';
import { useAppContext } from '../../context';

const StatusIcon = () => {
  const { statusIcon, setStatusIcon } = useAppContext();

  useEffect(() => {
    if (!statusIcon) return;

    const timer = setTimeout(() => {
      setStatusIcon(null);
    }, statusIcon.duration ?? 3000);

    return () => clearTimeout(timer);
  }, [statusIcon, setStatusIcon]);

  if (!statusIcon) return null;

  return <div className={`status-icon-circle status-icon--info`}></div>;
};

export default StatusIcon;

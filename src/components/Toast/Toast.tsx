import { useEffect } from 'react';
import './Toast.css';
import { useAppContext } from '../../context';

const Toast = () => {
  const { message, setMessage } = useAppContext();

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage(null);
    }, message.duration ?? 3000);

    return () => clearTimeout(timer);
  }, [message, setMessage]);

  if (!message) return null;

  return (
    <div className={`toast toast--${message.type ?? 'info'}`}>
      {message.message}
    </div>
  );
};

export default Toast;

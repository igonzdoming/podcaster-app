export type ToastType = 'success' | 'error' | 'info';

export type ToastProps = {
  message: string;
  type?: ToastType;
  duration?: number;
};

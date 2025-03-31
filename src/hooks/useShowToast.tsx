import { toaster } from '@/components/ui/toaster';

export const useShowToast = () => {
  const showToast = (title, description, status) => {
    toaster.create({
      title,
      description,
      type: status,
      closable: true,
    });
  };

  return showToast;
};

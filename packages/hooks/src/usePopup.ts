import { useState } from 'react';

export default function usePopup(): {
  opened: boolean;
  openPopup: () => void;
  closePopup: () => void;
} {
  const [opened, setOpened] = useState(false);

  const openPopup = (): void => {
    setOpened(true);
  };

  const closePopup = (): void => {
    setOpened(false);
  };

  return {
    opened,
    openPopup,
    closePopup,
  };
}

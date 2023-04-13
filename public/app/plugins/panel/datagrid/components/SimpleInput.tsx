import React, { useRef, useEffect } from 'react';

interface Props {
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const SimpleInput = ({ onBlur, placeholder }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.focus();
  });

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      e.target.blur();
    }
  };

  return <input type="text" placeholder={placeholder} onBlur={onBlur} ref={ref} onKeyDown={onKeyDown} />;
};

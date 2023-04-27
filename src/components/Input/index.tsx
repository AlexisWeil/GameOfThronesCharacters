import React, { ChangeEvent, useEffect, useRef } from 'react';
import { InputLabel, InputWrapper } from './styles';

interface Props {
  type: string,
  label?: string,
  value?: string,
  autofocus?: boolean,
  onChange?: (v: string) => void,
  onEnterPressed?: () => void
}

const Input: React.FC<Props> = ({
  type,
  label,
  value,
  autofocus,
  onChange,
  onEnterPressed
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus)
      ref?.current?.focus();
  }, [autofocus]);

  return (
    <InputWrapper>
      {label &&
        <InputLabel>{label}</InputLabel>
      }
      <input
        type={type}
        ref={ref}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && onEnterPressed)
            onEnterPressed()
        }}
      />
    </InputWrapper>
  );
};

export default Input;

import { FC } from 'react';

import './checkbox.css';

type Props = {
    isCompleted: boolean;
    onChange: () => void;
    id: string;
};

export const Checkbox: FC<Props> = ({ isCompleted, onChange, id }) => {
  return (
    <div aria-label='checkbox' className="checkbox" onChange={onChange}>
      <input
        id={id}
        defaultChecked={isCompleted}
        
        type="checkbox"
      />
      <label htmlFor={id}></label>
    </div>
  );
};

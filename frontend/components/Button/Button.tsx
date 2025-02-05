import styles from './Button.module.css';
import React from 'react';
import ClassNames from '../../utils/ClassNames/ClassNames';

interface ButtonProps {
  action?: () => void;
  id: string;
  value: string;
  pending: boolean;
  error: boolean;
  icon?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { id, pending, value, error, icon, action } = props;
  return (
    <div>
      <div>
        <button
          id={id}
          value={pending ? '' : 'test'}
          className={ClassNames(
            'rounded-lg px-4 py-2',
            error
              ? 'bg-green-700 text-red-100 hover:bg-green-800 duration-300'
              : 'bg-green-700 text-green-100 hover:bg-green-800 duration-300'
          )}
        >
          {icon}
          {pending ? (
            <>...</>
          ) : (
            <div className="validation-button-text" onClick={action}>
              {value}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

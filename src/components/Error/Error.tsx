import React from 'react';

import styles from './Error.module.scss';

interface Props {
  errors: Error[];
}

export const Error = ({ errors }: Props) => {
  const isLongWaitingTime = errors.find(
    ({ message }) => message === 'long-waiting-time'
  );

  const errorMessages = errors.map(({ message }) => message);

  return (
    <>
      {isLongWaitingTime && (
        <div className={styles.waitingContainer}>
          <p>"It takes longer as usual. Please wait.</p>
        </div>
      )}

      <div className={styles.timeoutContainer}>
        <p>Something went wrong, please try again.</p>
        <div>
          Details:
          <div className={styles.details}>
            {errorMessages.map((message, index) => {
              return (
                <p key={index}>
                  <i>{message}</i>
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <button className={styles.reloadButton} onClick={reloadPage}>
        Click to reload!
      </button>
    </>
  );
};

const reloadPage = () => {
  window.location.reload();
};

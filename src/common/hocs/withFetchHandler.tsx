import { ApolloError } from '@apollo/client'
import React, { FC } from 'react'

export type TFetchProps = {
  loading: boolean;
  error: ApolloError | undefined;
};

export type TProps<P> = Omit<P, keyof TFetchProps>;

export const withFetchHandler = <P extends Record<string, unknown>>(
  Component: FC<TProps<P>>
) => (props: P & TFetchProps) => {
  const { loading, error, ...restProps } = props;
  return (
    <div>
      {props.loading && <p>Loading...</p>}
      {props.error && <p>Error :(</p>}
      <Component {...restProps} />
    </div>
  );
};

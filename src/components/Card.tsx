// @flow

import { FC } from 'react';

import { FeedsPageProps } from '../ts/types.ts';

export const Card: FC<FeedsPageProps> = (props: FeedsPageProps) => {
  const { title, url, author } = props;

  return (
    <div className="flex flex-col p-2 bg-white shadow-2xl rounded-md w-96">
      <div className="shrink-0 w-full h-64">
        <img src={url} className="h-full w-full" />
      </div>
      <div className="text-black font-semibold overflow-ellipsis"> {title}</div>
      <div className="text-slate-500 overflow-ellipsis"> {author}</div>
    </div>
  );
};

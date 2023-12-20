import { FC, ReactNode } from 'react';

interface ListLayoutProps {
  children: ReactNode;
}

const ListLayout: FC<ListLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ListLayout;

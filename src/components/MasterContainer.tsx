import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MasterContainer = ({ children }: Props) => {
  return (
    <div className='master-container'>
      {children}
    </div>
  );
};

export default MasterContainer;
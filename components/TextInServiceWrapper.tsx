import React, { ReactNode } from 'react'

interface TextInServiceWrapperProps {
    children: ReactNode;
  }
const TextInServiceWrapper: React.FC<TextInServiceWrapperProps> = ({ children }) => {
    return <div className="mx-3 my-40 4xl:mx-56">{children}</div>;
}

export default TextInServiceWrapper
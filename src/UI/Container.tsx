import { ReactNode } from "react";

interface Props {
  pageTitle: string;
  children: ReactNode;
}

const Container = ({ pageTitle, children }: Props) => {
  return (
    <div className="space-y-6">
      <h2 className="text-5xl">{pageTitle}</h2>
      {children}
    </div>
  );
};

export default Container;

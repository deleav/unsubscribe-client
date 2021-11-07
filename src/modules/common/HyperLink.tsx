import { PropsWithChildren } from "react";

type Props = {
  href: string;
};

export default function HyperLink({
  children,
  href,
}: PropsWithChildren<Props>) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

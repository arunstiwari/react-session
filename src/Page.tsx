import type {ReactNode} from "react";

type PageProps = {
    title: string;
    children: ReactNode;
}

const Page =
    ({title, children}: PageProps) => {
  return (
      <>
          <h2>{title}</h2>
          {children}
      </>
  )
}

export default Page;
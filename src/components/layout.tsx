import { UserButton } from "@clerk/nextjs";
import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full overflow-y-scroll border-x border-slate-400 md:max-w-2xl">
        <div className="flex justify-end">
          <UserButton afterSignOutUrl="/" />
        </div>
        {props.children}
      </div>
    </main>
  );
};

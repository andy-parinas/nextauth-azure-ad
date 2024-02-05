import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import Layout from "@/components/Layout/layout";

import "./styles.css";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

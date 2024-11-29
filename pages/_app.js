import '../styles/globals.css'
import Layout from "../component/layout/Layout";
import {SessionProvider} from "next-auth/react";


function MyApp({Component, pageProps}) {
    return <SessionProvider session={pageProps.session}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </SessionProvider>
}

export default MyApp

import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import Layout from "../components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <Layout>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: { opacity: 0 },
            pageAnimate: { opacity: 1 },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </Provider>
  );
}

export default MyApp;

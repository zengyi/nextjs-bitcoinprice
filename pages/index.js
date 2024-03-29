import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = props => (
  <Layout>
    <div>
      <h1>Welcome to Bitcoin Price!</h1>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

export const getServerSideProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    props: { bpi: data.bpi }
  };
};

export default Index;

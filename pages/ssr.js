import Ssr from "@/src/sreens/SSRSCreen";

export default Ssr;

function delay(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

export async function getServerSideProps() {
  await delay(2);
  return {
    props: {
      msg: "Fui renderizada para esta requisição!",
    },
  };
}

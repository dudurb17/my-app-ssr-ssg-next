import Ssg from "@/src/sreens/SSG";

export default Ssg;

function delay(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

export async function getServerSideProps() {
  await delay(2);
  return {
    props: {
      msg: "Fui gerada durante o build!",
    },
  };
}

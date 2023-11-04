import Container from "@/components/common/container";

/*
|-----------------------------------------
| setting up HappyClient for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/

const Item = () => (
  <div className="flex w-full gap-4 items-center justify-center">
    <h2 className="text-5xl font-bold">30+</h2>
    <p className="text-3xl">
      Happy <br />
      Client
    </p>
  </div>
);

const HappyClient = () => {
  return (
    <main className="py-12 border-t border-b w-full bg-slate-900 bg-opacity-50 text-white">
      <Container>
        <div className="w-full justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </Container>
    </main>
  );
};
export default HappyClient;

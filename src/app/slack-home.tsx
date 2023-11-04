/*
|-----------------------------------------
| setting up SlackHome for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/
import { Layers3, PencilRuler, SendHorizontal } from "lucide-react";
import Container from "@/components/common/container";

const SlackHome = () => {
  return (
    <div className=" bg-green-50 py-12 w-full">
      <Container>
        <main className="flex w-full justify-between">
          <div className="flex gap-4 items-center">
            <Layers3 className="h-12 w-12" />
            <h2 className="text-xl font-semibold">
              Stock Free <br /> Amazing Resources
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <PencilRuler className="h-12 w-12" />
            <h2 className="text-xl font-semibold">
              Stock Free <br /> Amazing Resources
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <PencilRuler className="h-12 w-12" />
            <h2 className="text-xl font-semibold">
              Stock Free <br /> Amazing Resources
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <SendHorizontal className="h-12 w-12" />
            <h2 className="text-xl font-semibold">
              Stock Free <br /> Amazing Resources
            </h2>
          </div>
        </main>
      </Container>
    </div>
  );
};
export default SlackHome;

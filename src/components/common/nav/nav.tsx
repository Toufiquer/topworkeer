/*
|-----------------------------------------
| setting up Nav for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TopWorkeer, November, 2023
|-----------------------------------------
*/

"use-client";

import Container from "@/components/common/container";
import TabletNav from "./tablet.nav";
import MobileNav from "./mobile-nav";

const Nav = () => {
  return (
    <Container>
      <TabletNav />
      <MobileNav />
    </Container>
  );
};
export default Nav;

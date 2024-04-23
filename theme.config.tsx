import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import logoUrl from "./public/logo.png";
import faviconUrl from "./public/logo.png";
import { useRouter } from "next/router";

const logo = (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "8px",
    }}
  >
    {/* <Image src={logoUrl} width={42} height={42} alt="Opia World" /> */}
    <div>OPIA WORLD</div>
  </div>
);

/*const head = (
  <>
    <link rel="icon" href={faviconUrl.src} type="image/png" />
  </>
); */

const config: DocsThemeConfig = {
  logo,
  //head,
  docsRepositoryBase:
    "https://github.com/opia-world/opia-world.github.io/tree/master",
  useNextSeoProps() {
    const { asPath } = useRouter();
    const title = "Opia World Docs";
    return {
      titleTemplate: asPath === "/" ? title : `%s - ${title}`,
    };
  },
  footer: {
    text: "Opia World Documentation",
  },
};

export default config;

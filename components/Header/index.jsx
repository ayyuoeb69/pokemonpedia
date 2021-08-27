import {
  Navbar,
  NavbarBottom,
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
} from "../../styles/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
export default function Header() {
  const menu = [
    {
      title: "Explore",
      image: "explore-icon.png",
      url: "/",
    },
    {
      title: "My Pokemon",
      image: "pokeball-icon.png",
      url: "/my-pokemon",
    },
  ];
  const router = useRouter();
  const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
  return (
    <>
      {isMobile ? (
        <NavbarBottom>
          <NavbarContainer>
            <NavbarMenu>
              {menu?.map((data, idx) => {
                return (
                  <NavbarItem key={idx}>
                    <Link href={data?.url}>
                      <NavbarLinks active={data?.url === router?.route}>
                        <Image
                          src={"/img/icon/" + data?.image}
                          alt={data?.title}
                          width={30}
                          height={30}
                        />{" "}
                        {data?.title}
                      </NavbarLinks>
                    </Link>
                  </NavbarItem>
                );
              })}
            </NavbarMenu>
          </NavbarContainer>
        </NavbarBottom>
      ) : (
        <Navbar>
          <NavbarContainer>
            <NavbarLogo>
              <Link href="/">
                <a>
                  <Image
                    src="/img/logo.png"
                    alt="logo-web"
                    width={150}
                    height={70}
                  />
                </a>
              </Link>
            </NavbarLogo>
            <NavbarMenu>
              {menu?.map((data, idx) => {
                return (
                  <NavbarItem key={idx}>
                    <Link href={data?.url}>
                      <NavbarLinks active={data?.url === router?.route}>
                        <Image
                          src={"/img/icon/" + data?.image}
                          alt={data?.title}
                          width={30}
                          height={30}
                        />{" "}
                        {data?.title}
                      </NavbarLinks>
                    </Link>
                  </NavbarItem>
                );
              })}
            </NavbarMenu>
          </NavbarContainer>
        </Navbar>
      )}
    </>
  );
}

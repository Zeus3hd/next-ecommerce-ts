import {
  Container,
  TopBar,
  Logo,
  DesktopMenu,
  UserButtons,
  MenuButton,
  MobileMenu,
  BottomBar,
  BrowseCategoriesButton,
  SearchField,
  CategoriesDropDown,
  SearchButton,
  SearchForm,
  BrowseCategoriesSpan,
  DropdownOptions,
  DropdownWrapper,
} from "./index.style";
import MenuIcon from "../../svg/MenuIcon.svg";
import CategoriesIcon from "../../svg/CategoriesIcon.svg";
import SearchIcon from "../../svg/SearchIcon.svg";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchParams, setSearchParams] = useState({
    keyword: "all",
    gender: "all",
    category: "all",
    season: "all",
    size: "all",
    brand: "all",
    price: "all",
  });
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/shop",
      query: searchParams,
    });
  };
  return (
    <Container>
      <TopBar>
        <Link href="/" passHref>
          <Logo>Shopper.</Logo>
        </Link>
        <DesktopMenu />
        <UserButtons />
        <MenuButton onClick={() => setToggleMenu((prevState) => !prevState)}>
          <MenuIcon />
        </MenuButton>
      </TopBar>
      <MobileMenu toggleMenu={toggleMenu} />
      <BottomBar>
        <Link href="/categories" passHref>
          <BrowseCategoriesButton>
            <CategoriesIcon />
            <BrowseCategoriesSpan>Browse Categories</BrowseCategoriesSpan>
          </BrowseCategoriesButton>
        </Link>
        <SearchForm>
          <SearchField
            placeholder="Search for items or brands"
            onChange={(e) =>
              setSearchParams((prevState) => ({
                ...prevState,
                keyword: e.target.value.length === 0 ? "all" : e.target.value,
              }))
            }
          />
          <DropdownWrapper>
            <CategoriesDropDown
              onChange={(e) =>
                setSearchParams((prevState) => ({
                  ...prevState,
                  category: e.target.value,
                }))
              }
            >
              <DropdownOptions value="all">All Categories</DropdownOptions>
              <DropdownOptions value="shirts">shirts</DropdownOptions>
              <DropdownOptions value="dresses">dresses</DropdownOptions>
              <DropdownOptions value="trousers">trousers</DropdownOptions>
              <DropdownOptions value="shoes">shoes</DropdownOptions>
              <DropdownOptions value="accessories">accessories</DropdownOptions>
            </CategoriesDropDown>
          </DropdownWrapper>
          <SearchButton onClick={handleSearch}>
            <SearchIcon />
          </SearchButton>
        </SearchForm>
      </BottomBar>
    </Container>
  );
};

export default Navbar;

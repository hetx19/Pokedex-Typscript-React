import React, { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import pokeballIcon from "../assets/pokeball-icon.png";
import { resetRandomPokemons } from "../app/slices/PokemonSlice";

export default function Navbar() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Compare",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "My List",
      route: "/list",
    },
    {
      name: "About",
      route: "/about",
    },
  ];

  const location = useLocation();
  const dispatch = useAppDispatch();

  function ul(index: number) {
    var underlines = document.querySelectorAll<HTMLElement>(".underline");
    for (var i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
    }
  }

  useEffect(() => {
    const index = navigationRoutes.findIndex(({ route }) =>
      location.pathname.includes(route)
    );
    ul(index);
  }, [location.pathname, navigationRoutes]);

  return (
    <nav>
      <div className="block">
        <img src={pokeballIcon} alt="" />
      </div>
      <div className="data">
        <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link
                to={route}
                key={index}
                onClick={(e) => dispatch(resetRandomPokemons())}
              >
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

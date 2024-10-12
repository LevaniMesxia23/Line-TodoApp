import { useEffect, useContext } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import Result from "../../public/evaluation.png";
import { UserButton } from "@clerk/clerk-react";
import LanguageChanger from "./LanguageChanger.jsx";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const {
    searchClick,
    setSearchClick,
    setSearchTodo,
    burgerClicked,
    setBurgerClicked,
  } = useContext(MyContext);

  const handleBurger = () => {
    setBurgerClicked(!burgerClicked);
    console.log(burgerClicked);
  };

  const handleLinkClick = () => {
    if (burgerClicked) {
      setBurgerClicked(false);
      console.log(burgerClicked);
    }
  };

  const handleSearchClick = () => {
    setSearchClick(!searchClick);
  };

  useEffect(() => {
    if (burgerClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [burgerClicked]);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md relative z-20">
      <div className=" flex gap-4 items-center">
        <Hamburger
          toggled={burgerClicked}
          toggle={handleBurger}
          size={24}
          color="black"
        />
        <LanguageChanger />
      </div>
      <div className="flex-1 text-center">
        {!searchClick && (
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
            </svg>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4 pl-[40px] pr-[20px] clear-margins">
        {searchClick && (
          <div className="relative pr-8">
            <svg
              className="absolute left-[3rem] top-[10px]"
              onClick={handleSearchClick}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.03228 0.934937C12.1881 0.934937 15.561 4.13657 15.561 8.08145C15.561 12.0263 12.1881 15.228 8.03228 15.228C3.87645 15.228 0.503601 12.0263 0.503601 8.08145C0.503601 4.13657 3.87645 0.934937 8.03228 0.934937ZM8.03228 13.6398C11.2675 13.6398 13.8879 11.1525 13.8879 8.08145C13.8879 5.01043 11.2675 2.52305 8.03228 2.52305C4.79704 2.52305 2.17664 5.01043 2.17664 8.08145C2.17664 11.1525 4.79704 13.6398 8.03228 13.6398ZM15.1304 13.6963L17.4964 15.9422L16.3134 17.0652L13.9474 14.8193L15.1304 13.6963Z"
                fill="#252931"
              />
            </svg>
            <input
              className="bg-[#E7E8EA] pl-[48px] text-[1.4rem] font-[400] ml-8 rounded-[0.8rem] h-[40px] w-full sm:w-[250px] md:w-[300px] lg:w-[460px]"
              type="text"
              name="search"
              placeholder="Search"
              onChange={(e) => setSearchTodo(e.target.value)}
            />
          </div>
        )}
        {!searchClick && (
          <svg
            onClick={handleSearchClick}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M8.03228 0.934937C12.1881 0.934937 15.561 4.13657 15.561 8.08145C15.561 12.0263 12.1881 15.228 8.03228 15.228C3.87645 15.228 0.503601 12.0263 0.503601 8.08145C0.503601 4.13657 3.87645 0.934937 8.03228 0.934937ZM8.03228 13.6398C11.2675 13.6398 13.8879 11.1525 13.8879 8.08145C13.8879 5.01043 11.2675 2.52305 8.03228 2.52305C4.79704 2.52305 2.17664 5.01043 2.17664 8.08145C2.17664 11.1525 4.79704 13.6398 8.03228 13.6398ZM15.1304 13.6963L17.4964 15.9422L16.3134 17.0652L13.9474 14.8193L15.1304 13.6963Z"
              fill="#252931"
            />
          </svg>
        )}

        {!searchClick && (
          <div className="h-[1rem] bg-[#82868F] w-[0.0625rem]"></div>
        )}
        <UserButton afterSignOutUrl="/signin" />
      </div>

      {burgerClicked && (
        <div
          className={`fixed right-0 top-[80px] h-full w-1/3 z-40 transition-transform duration-300 ${
            burgerClicked ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={handleLinkClick}
        ></div>
      )}

      <nav
        className={`absolute left-0 top-[80px] h-[100vh] w-2/3 bg-white shadow-lg transform transition-transform duration-300 z-10 ${
          burgerClicked ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start p-4 space-y-4">
          <Link to={"/"} className=" w-full" onClick={handleLinkClick}>
            <li className="flex gap-3 hover:bg-[#C7CAD0] py-[0.625rem] pl-4 w-full rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M10.4844 3.4375V1.375C10.4844 1.23825 10.5387 1.1071 10.6354 1.0104C10.7321 0.9137 10.8632 0.859375 11 0.859375C11.1368 0.859375 11.2679 0.9137 11.3646 1.0104C11.4613 1.1071 11.5156 1.23825 11.5156 1.375V3.4375C11.5156 3.57425 11.4613 3.7054 11.3646 3.8021C11.2679 3.8988 11.1368 3.95312 11 3.95312C10.8632 3.95312 10.7321 3.8988 10.6354 3.8021C10.5387 3.7054 10.4844 3.57425 10.4844 3.4375ZM16.3281 11C16.3281 12.0538 16.0156 13.0839 15.4302 13.9601C14.8447 14.8364 14.0126 15.5193 13.039 15.9225C12.0654 16.3258 10.9941 16.4313 9.96054 16.2257C8.92698 16.0202 7.9776 15.5127 7.23245 14.7676C6.48729 14.0224 5.97984 13.073 5.77425 12.0395C5.56867 11.0059 5.67418 9.9346 6.07745 8.96101C6.48073 7.98743 7.16365 7.15529 8.03985 6.56983C8.91606 5.98436 9.9462 5.67188 11 5.67188C12.4126 5.67347 13.7669 6.23533 14.7658 7.23421C15.7647 8.23308 16.3265 9.58738 16.3281 11ZM15.2969 11C15.2969 10.1502 15.0449 9.3194 14.5727 8.61278C14.1006 7.90617 13.4295 7.35543 12.6443 7.03021C11.8592 6.70498 10.9952 6.61989 10.1617 6.78569C9.32821 6.95148 8.56258 7.36072 7.96165 7.96165C7.36072 8.56258 6.95148 9.32821 6.78569 10.1617C6.61989 10.9952 6.70498 11.8592 7.03021 12.6443C7.35543 13.4295 7.90617 14.1006 8.61278 14.5727C9.3194 15.0449 10.1502 15.2969 11 15.2969C12.1392 15.2955 13.2313 14.8424 14.0368 14.0368C14.8424 13.2313 15.2955 12.1392 15.2969 11ZM5.13562 5.86437C5.18283 5.91503 5.23976 5.95567 5.30301 5.98385C5.36625 6.01203 5.43453 6.02719 5.50377 6.02841C5.573 6.02963 5.64177 6.01689 5.70597 5.99096C5.77018 5.96503 5.8285 5.92643 5.87746 5.87746C5.92643 5.8285 5.96503 5.77018 5.99096 5.70597C6.01689 5.64177 6.02963 5.573 6.02841 5.50377C6.02719 5.43453 6.01203 5.36625 5.98385 5.30301C5.95567 5.23976 5.91503 5.18283 5.86437 5.13562L4.48938 3.76062C4.39163 3.66954 4.26235 3.61996 4.12877 3.62232C3.99518 3.62467 3.86773 3.67879 3.77326 3.77326C3.67879 3.86773 3.62467 3.99518 3.62232 4.12877C3.61996 4.26235 3.66954 4.39163 3.76062 4.48938L5.13562 5.86437ZM5.13562 16.1356L3.76062 17.5106C3.70997 17.5578 3.66933 17.6148 3.64115 17.678C3.61297 17.7413 3.59782 17.8095 3.59659 17.8788C3.59537 17.948 3.60811 18.0168 3.63404 18.081C3.65997 18.1452 3.69857 18.2035 3.74754 18.2525C3.7965 18.3014 3.85482 18.34 3.91903 18.366C3.98323 18.3919 4.052 18.4046 4.12123 18.4034C4.19047 18.4022 4.25875 18.387 4.322 18.3588C4.38524 18.3307 4.44217 18.29 4.48938 18.2394L5.86437 16.8644C5.91503 16.8172 5.95567 16.7602 5.98385 16.697C6.01203 16.6337 6.02719 16.5655 6.02841 16.4962C6.02963 16.427 6.01689 16.3582 5.99096 16.294C5.96503 16.2298 5.92643 16.1715 5.87746 16.1225C5.8285 16.0736 5.77018 16.035 5.70597 16.009C5.64177 15.9831 5.573 15.9704 5.50377 15.9716C5.43453 15.9728 5.36625 15.988 5.30301 16.0162C5.23976 16.0443 5.18283 16.085 5.13562 16.1356ZM16.5 6.01562C16.6367 6.0155 16.7678 5.9611 16.8644 5.86437L18.2394 4.48938C18.3305 4.39163 18.38 4.26235 18.3777 4.12877C18.3753 3.99518 18.3212 3.86773 18.2267 3.77326C18.1323 3.67879 18.0048 3.62467 17.8712 3.62232C17.7377 3.61996 17.6084 3.66954 17.5106 3.76062L16.1356 5.13562C16.0636 5.20773 16.0146 5.29957 15.9947 5.39953C15.9749 5.49949 15.9851 5.6031 16.0241 5.69726C16.063 5.79142 16.1291 5.87192 16.2138 5.92858C16.2985 5.98525 16.3981 6.01554 16.5 6.01562ZM16.8644 16.1356C16.7666 16.0445 16.6373 15.995 16.5038 15.9973C16.3702 15.9997 16.2427 16.0538 16.1483 16.1483C16.0538 16.2427 15.9997 16.3702 15.9973 16.5038C15.995 16.6373 16.0445 16.7666 16.1356 16.8644L17.5106 18.2394C17.6084 18.3305 17.7377 18.38 17.8712 18.3777C18.0048 18.3753 18.1323 18.3212 18.2267 18.2267C18.3212 18.1323 18.3753 18.0048 18.3777 17.8712C18.38 17.7377 18.3305 17.6084 18.2394 17.5106L16.8644 16.1356ZM3.95312 11C3.95312 10.8632 3.8988 10.7321 3.8021 10.6354C3.7054 10.5387 3.57425 10.4844 3.4375 10.4844H1.375C1.23825 10.4844 1.1071 10.5387 1.0104 10.6354C0.9137 10.7321 0.859375 10.8632 0.859375 11C0.859375 11.1368 0.9137 11.2679 1.0104 11.3646C1.1071 11.4613 1.23825 11.5156 1.375 11.5156H3.4375C3.57425 11.5156 3.7054 11.4613 3.8021 11.3646C3.8988 11.2679 3.95312 11.1368 3.95312 11ZM11 18.0469C10.8632 18.0469 10.7321 18.1012 10.6354 18.1979C10.5387 18.2946 10.4844 18.4257 10.4844 18.5625V20.625C10.4844 20.7618 10.5387 20.8929 10.6354 20.9896C10.7321 21.0863 10.8632 21.1406 11 21.1406C11.1368 21.1406 11.2679 21.0863 11.3646 20.9896C11.4613 20.8929 11.5156 20.7618 11.5156 20.625V18.5625C11.5156 18.4257 11.4613 18.2946 11.3646 18.1979C11.2679 18.1012 11.1368 18.0469 11 18.0469ZM20.625 10.4844H18.5625C18.4257 10.4844 18.2946 10.5387 18.1979 10.6354C18.1012 10.7321 18.0469 10.8632 18.0469 11C18.0469 11.1368 18.1012 11.2679 18.1979 11.3646C18.2946 11.4613 18.4257 11.5156 18.5625 11.5156H20.625C20.7618 11.5156 20.8929 11.4613 20.9896 11.3646C21.0863 11.2679 21.1406 11.1368 21.1406 11C21.1406 10.8632 21.0863 10.7321 20.9896 10.6354C20.8929 10.5387 20.7618 10.4844 20.625 10.4844Z"
                  fill="#252931"
                  stroke="#252931"
                  strokeWidth="0.4"
                />
              </svg>

              <span className="z-50">{t("My Day")}</span>
            </li>
          </Link>

          <Link to={"/important"} className=" w-full" onClick={handleLinkClick}>
            <li className=" flex gap-3 hover:bg-[#C7CAD0] py-[0.625rem] pl-4 w-full rounded ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M20.2262 8.46399C20.1627 8.26368 20.0406 8.08705 19.8755 7.95696C19.7105 7.82688 19.5102 7.74934 19.3006 7.73438L14.0181 7.30469L11.9831 2.37789C11.9029 2.18304 11.7667 2.01639 11.5916 1.89912C11.4166 1.78185 11.2106 1.71924 10.9999 1.71924C10.7892 1.71924 10.5833 1.78185 10.4083 1.89912C10.2332 2.01639 10.097 2.18304 10.0168 2.37789L7.98182 7.30469L2.69924 7.73438C2.48931 7.7522 2.28932 7.83161 2.12434 7.96264C1.95936 8.09368 1.83674 8.2705 1.77186 8.47094C1.70697 8.67139 1.7027 8.88653 1.7596 9.08938C1.81649 9.29224 1.93201 9.47378 2.09166 9.61125L6.11784 13.084L4.88721 18.2738C4.83567 18.4789 4.84662 18.6948 4.91865 18.8937C4.99068 19.0926 5.1205 19.2654 5.29146 19.39C5.46242 19.5146 5.66671 19.5853 5.87811 19.593C6.08952 19.6006 6.29838 19.5449 6.47791 19.433L10.9999 16.6521L15.522 19.433C15.6996 19.5453 15.907 19.6011 16.117 19.5933C16.327 19.5855 16.5297 19.5143 16.6985 19.3892C16.872 19.2664 17.0044 19.094 17.0783 18.8947C17.1522 18.6953 17.1642 18.4783 17.1127 18.272L15.8821 13.0797L19.9082 9.60695C20.0696 9.47019 20.1862 9.28812 20.2429 9.08433C20.2995 8.88055 20.2937 8.66443 20.2262 8.46399ZM19.4588 9.08789L15.2753 12.6973C15.2277 12.7384 15.1922 12.7917 15.1728 12.8516C15.1534 12.9115 15.1509 12.9755 15.1653 13.0367L16.4432 18.4327C16.462 18.5065 16.4579 18.5842 16.4315 18.6555C16.4051 18.7269 16.3576 18.7886 16.2954 18.8323C16.2362 18.8765 16.165 18.9017 16.0911 18.9044C16.0173 18.9072 15.9444 18.8874 15.8821 18.8478L11.1804 15.956C11.1262 15.9226 11.0637 15.9048 10.9999 15.9048C10.9362 15.9048 10.8737 15.9226 10.8195 15.956L6.11784 18.8478C6.05549 18.8874 5.98257 18.9072 5.90875 18.9044C5.83493 18.9017 5.76369 18.8765 5.70448 18.8323C5.64226 18.7886 5.59481 18.7269 5.56842 18.6555C5.54202 18.5842 5.53792 18.5065 5.55666 18.4327L6.83456 13.0367C6.84904 12.9755 6.84645 12.9115 6.82705 12.8516C6.80765 12.7917 6.7722 12.7384 6.72456 12.6973L2.54112 9.08789C2.48332 9.03917 2.44158 8.97414 2.42134 8.90131C2.4011 8.82848 2.40331 8.75124 2.42768 8.67969C2.45009 8.60883 2.4933 8.54634 2.55169 8.50037C2.61009 8.45439 2.68096 8.42704 2.7551 8.42188L8.24995 7.97414C8.31315 7.96912 8.37373 7.94671 8.425 7.9094C8.47626 7.87209 8.5162 7.82133 8.54041 7.76274L10.6562 2.64086C10.6839 2.57143 10.7318 2.51191 10.7937 2.46997C10.8556 2.42804 10.9286 2.40563 11.0034 2.40563C11.0781 2.40563 11.1512 2.42804 11.2131 2.46997C11.275 2.51191 11.3229 2.57143 11.3506 2.64086L13.4664 7.76274C13.49 7.82037 13.5289 7.87048 13.5789 7.90771C13.6288 7.94495 13.688 7.96791 13.7499 7.97414L19.2414 8.41672C19.3155 8.42188 19.3864 8.44923 19.4448 8.49521C19.5032 8.54119 19.5464 8.60367 19.5688 8.67453C19.5947 8.74644 19.598 8.82454 19.5784 8.8984C19.5587 8.97227 19.517 9.03837 19.4588 9.08789Z"
                  fill="#252931"
                  stroke="#252931"
                  strokeWidth="0.4"
                />
              </svg>

              <span className="z-50">{t("Important")}</span>
            </li>
          </Link>

          <Link
            to={"/resultspage"}
            className=" w-full"
            onClick={handleLinkClick}
          >
            <li className="flex gap-3 hover:bg-[#C7CAD0] py-[0.625rem] pl-4 w-full rounded">
              <img className="w-[22px] h-[22px]" src={Result} alt="" />

              <span className="z-50">{t("Results")}</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

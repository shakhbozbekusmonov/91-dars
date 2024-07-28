import Pitsa from "./Pitsa";
import { Button } from "./ui/button";
import CustomLink from "./CustomLink";

const SiteMenu = () => {
  return (
    <>
      <div className="container flex items-center justify-between pt-10 border-t mt-20">
        <CustomLink linkTo="#Barchasi" text="Barchasi" />
        <CustomLink linkTo="#Pitsa" text="Pitsa" />
        <CustomLink linkTo="#Burger" text="Burger" />
        <CustomLink linkTo="#Kombo" text="Kombo" />
        <CustomLink linkTo="#Salat" text="Salat" />
        <CustomLink linkTo="#Shirinliklar" text="Shirinliklar" />
        <CustomLink linkTo="#Ichimliklar" text="Ichimliklar" />
        <Button
          variant="secondary"
          className="gap-4 px-10 py-4 hover:bg-primary"
          onClick={() => console.log("Clicked")}
        >
          <img
            width={"16.67px"}
            height={"16.67px"}
            src="/images/menuSetting.svg"
            alt="filterImg"
          />
          Filtr
        </Button>
      </div>
      <Pitsa />
    </>
  );
};

export default SiteMenu;

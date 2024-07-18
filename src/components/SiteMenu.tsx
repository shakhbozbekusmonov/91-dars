import SitePitsa from "./SitePitsa";
import { Button } from "./ui/button";

const SiteMenu = () => {
  return (
    <>
      <div className="container flex items-center justify-between pt-10 border-t mt-20">
        <CustomButton text="Barchasi" />
        <CustomButton text="Pitsa" />
        <CustomButton text="Burger" />
        <CustomButton text="Kombo" />
        <CustomButton text="Salat" />
        <CustomButton text="Shirinliklar" />
        <CustomButton text="Ichimliklar" />
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
      <SitePitsa />
    </>
  );
};

interface Props {
  text: string;
}

const CustomButton = (props: Props) => {
  return (
    <a
      href="/"
      className="px-6 py-4 rounded-lg hover:text-white hover:bg-primary"
    >
      {props.text}
    </a>
  );
};

export default SiteMenu;

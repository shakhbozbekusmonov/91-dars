import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const pitsaDetailes = [
  {
    img: "./images/Gavaya.svg",
    title: "Gavaya 🧀",
    cost: "45,000",
    isTop: true,
  },
  {
    img: "./images/Mexica.svg",
    title: "Mexica",
    cost: "53,000",
    isTop: true,
  },
  {
    img: "./images/HotAtchiko.svg",
    title: "Hot achiko 🍀",
    cost: "64,000",
    isTop: false,
  },
  {
    img: "./images/Sosiskacho.svg",
    title: "Mexica",
    cost: "45,000",
    isTop: false,
  },
  {
    img: "./images/HotAtchiko.svg",
    title: "Apocalipo",
    cost: "64,000",
    isTop: false,
  },
  {
    img: "./images/Sosiskacho.svg",
    title: "Sosiskacho 🍀",
    cost: "45,000",
    isTop: false,
  },
  {
    img: "./images/Mexica.svg",
    title: "Mexica",
    cost: "53,000",
    isTop: false,
  },
];

const Pitsa = () => {
  return (
    <div className="container mt-[105px] mb-24">
      <h2 className="text-5xl mb-14">Pitsa</h2>
      <div className="grid grid-cols-2 gap-10">
        {pitsaDetailes.map((pitsa, index) => (
          <Card key={index} className="w-full flex rounded-sm">
            <CardHeader>
              <CardTitle className="relative w-[180px]">
                <img
                  className="w-[180px] h-[180px]"
                  width={"180px"}
                  height={"180px"}
                  src={pitsa.img}
                  alt=""
                />
                {pitsa.isTop && (
                  <div className="absolute top-0 left-0 rounded-full p-2 bg-pitsaSub backdrop-blur-md shadow-pitsaFire">
                    <p className="text-2xl">🔥</p>
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="py-6 ml-10 w-[270px]">
              <h3 className="text-3xl mb-2 font-semibold">{pitsa.title}</h3>
              <p className="w-[227px] text-md opacity-50 mb-6">
                Горячая закуска с митболами из говядины, томатами, моцареллой и
                соусом чипотле
              </p>
              <p className="font-bold text-3xl">{pitsa.cost} UZS</p>
            </CardContent>
            <CardFooter className="relative">
              <button className="absolute bottom-6 left-0 w-14 h-14 bg-primary rounded-full flex pt-[6px] justify-center text-white text-3xl">
                +
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pitsa;

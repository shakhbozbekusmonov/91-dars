import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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

const SitePitsa = () => {
  return (
    <div className="container mt-[105px] mb-24">
      <h2 className="text-5xl mb-14">Pitsa</h2>
      <div className="flex flex-wrap gap-10 md:justify-center xl:justify-stretch">
        {pitsaDetailes.map((pitsa, index) => (
          <Card key={index} className="w-[540px] flex rounded-sm">
            <CardHeader>
              <CardTitle className="relative">
                <img width={"180px"} height={"180px"} src={pitsa.img} alt="" />
                {pitsa.isTop && (
                  <div className="absolute top-0 left-0 rounded-full p-2 bg-pitsaSub backdrop-blur-md shadow-pitsaFire">
                    <p className="text-2xl">🔥</p>
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 relative">
              <h3 className="text-2xl mb-2 font-semibold">{pitsa.title}</h3>
              <p className="w-[212px] text-sm opacity-50 mb-6">
                Горячая закуска с митболами из говядины, томатами, моцареллой и
                соусом чипотле
              </p>
              <p className="font-bold text-2xl">{pitsa.cost} UZS</p>
              <button className="absolute bottom-10 right-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                +
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SitePitsa;

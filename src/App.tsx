import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import Drinks from "@/components/Drinks";

const App = () => {
  return (
    <div>
      <SiteHeader />
      <Button>Knopka</Button>
      <Button className="rounded-full" size="icon">
        +
      </Button>

      <Drinks />
    </div>
  );
};

export default App;

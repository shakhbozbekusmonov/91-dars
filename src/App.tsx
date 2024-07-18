import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import SiteMenu from "./components/SiteMenu";

const App = () => {
  return (
    <div>
      <SiteHeader />
      <Button>Knopka</Button>
      <Button className="rounded-full" size="icon">
        +
      </Button>
      <SiteMenu />
    </div>
  );
};

export default App;

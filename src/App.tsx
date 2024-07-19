import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <div>
      <SiteHeader />
      <Button>Knopka</Button>
      <Button className="rounded-full" size="icon">
        +
      </Button>
    </div>
  );
};

export default App;

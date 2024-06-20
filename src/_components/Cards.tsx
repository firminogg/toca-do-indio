import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Cards() {
  return (
    <div className="flex gap-3">
      <Card>
        <CardHeader>
          <CardTitle>Unidade 1</CardTitle>
          <CardDescription className="text-bold">
            Orestes Lopes de Camargo
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-3">
          <Button className="bg-amber-500 text-black hover:bg-amber-400">
            Cardápio
          </Button>
          <Button variant="link">Contato</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Unidade 2</CardTitle>
          <CardDescription className="text-bold">
            Parque dos Falmboyans
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-3">
          <Button className="bg-amber-500 text-black hover:bg-amber-400">
            Cardápio
          </Button>
          <Button variant="link">Contato</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Unidade 3</CardTitle>
          <CardDescription className="text-bold">Vila Virgínia</CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-3">
          <Button className="bg-amber-500 text-black hover:bg-amber-400">
            Cardápio
          </Button>
          <Button variant="link">Contato</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

import Cards from "@/_components/Cards";
import { Table, TableBody } from "@/components/ui/table";

export default function Home() {
  return (
    <>
      <div>
        <section>
          <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-3xl font-bold">Toca do Índio</h1>
            <p className="text-gray-500">
              Descubra os sabores dos nossos lanches e porções!
            </p>
            <div className="mt-5 mb-3">
              <h2 className="text-2xl font-light">
                Tudo que você precisa a um clique, aproveite.
              </h2>
            </div>
            <div>
              <Table>
                <TableBody>
                  <Cards />
                </TableBody>
              </Table>
            </div>
            <div className="m-5">
              <Table>
                <TableBody>
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-amber-500">
                      De Terça à Domingo
                    </h1>
                    <p className="text-gray-500 font-bold text-center items-center text-lg">
                      Das 19h às 23h
                    </p>
                  </div>
                </TableBody>
              </Table>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

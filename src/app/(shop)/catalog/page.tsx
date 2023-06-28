import { FilterList, ProductsList } from "@/components";

export default function Page() {
  return (
    <section className="flex flex-col gap-y-5 px-8 lg:mt-[200px]">
      <FilterList />
      <ProductsList />
    </section>
  );
}

import PageHeader from "./layout/PageHeader";
import CategoryList from "./components/CategoryList";
export default function App() {
  return (
    <>
      <div className="max-h-screen">
        <PageHeader />
        <div className="grow  grid grid-cols-[auto_1fr] mt-5">
          <div className="hidden md:flex">Part1</div>
          <div className="whitespace-nowrap w-max-content flex items-center gap-4 overflow-hidden px-4">
            <CategoryList />
          </div>
        </div>
      </div>
    </>
  );
}

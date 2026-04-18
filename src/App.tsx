import BodyHeader from "./layout/BodyHeader";
import PageHeader from "./layout/PageHeader";
export default function App() {
  return (
    <>
      <div className="max-h-screen">
        <PageHeader />
        <BodyHeader/>
      </div>
    </>
  );
}

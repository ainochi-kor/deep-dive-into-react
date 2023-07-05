import { NextPage } from "next";

const DashboardIndexPage: NextPage = () => {
  return (
    <div>
      <h1>Hello World</h1>

      <button disabled={true}>hi</button>

      <p data-testid="pragarph-blue" className="blue">
        This is our paragraph
      </p>
    </div>
  );
};

export default DashboardIndexPage;

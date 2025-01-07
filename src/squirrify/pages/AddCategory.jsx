import { BackHeader, UserCategories } from "../components";

export const AddCategory = () => {
  return (
    <div className="container">
      <BackHeader title={""} />

      <div className="section">
        <UserCategories />
      </div>
    </div>
  );
};

import { Button } from "./Button.styled";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <Button type="button" onClick={onClick}>
        Load More
      </Button>
    </div>
  );
};

import { LoadingMain, Spinner, SpinnerItem } from './StyledLoading';

export const Loading = () => {
  return (
    <LoadingMain>
      <Spinner>
        <SpinnerItem />
        <SpinnerItem />
        <SpinnerItem />
        <SpinnerItem />
      </Spinner>
    </LoadingMain>
  );
};

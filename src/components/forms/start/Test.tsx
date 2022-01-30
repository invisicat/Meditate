import { FormProps } from '@/lib/Forms';

const Test = (props: FormProps) => {
  return (
    <>
      <h1>Hi!</h1>
      <button onClick={props.continue}>Go back</button>
    </>
  );
};

export default Test;

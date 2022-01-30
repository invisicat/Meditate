import { FormProps } from '@/lib/Forms';

const Test = (props: FormProps) => {
  return (
    <>
      <h1>Hi!</h1>
      <button onClick={props.back}>Go back</button>
    </>
  );
};

export default Test;

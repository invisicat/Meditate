import { FormProps } from '@/lib/Forms';
import FormTemplate from '../FormTemplate';

const Test = (props: FormProps) => {
  return (
    <FormTemplate>
      <h1>Hi!</h1>
      <button onClick={props.back}>Go back</button>
    </FormTemplate>
  );
};

export default Test;

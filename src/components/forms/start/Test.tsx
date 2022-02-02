import useMeditationStore from '@/lib/atoms/formAtom';
import { FormProps } from '@/lib/Forms';

import UnstyledLink from '@/components/links/UnstyledLink';

import FormTemplate from '../FormTemplate';

const Test = (props: FormProps) => {
  const data = useMeditationStore();
  return (
    <FormTemplate>
      <h1>Hi!</h1>
      <h1>Ambiences Selected</h1>
      <ul>
        {data.ambience.map((ambience, idx) => (
          <li key={idx}>{ambience.name}</li>
        ))}
      </ul>
      <div className="flex flex-col m-3 p-4 justify-between">
        <UnstyledLink href="/meditate">Start</UnstyledLink>
        <button onClick={props.back}>Go back</button>
      </div>
    </FormTemplate>
  );
};

export default Test;

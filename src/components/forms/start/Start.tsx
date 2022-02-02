import Button from '@/components/button/Button';
import { FormProps } from '@/lib/Forms';
import getCurrentTime from '@/lib/getCurrentTime';
import FormTemplate from '../FormTemplate';

const Start = (props: FormProps) => {
  return (
    <FormTemplate>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl leading-normal font-semibold mt-2 ">
          {getCurrentTime()}
        </h1>
        <p className="max-w-md">
          Thats great that you are here! 🤗 Before you start, lets make your
          meditation session perfect.
        </p>
      </div>
      <div className="flex flex-col text-gray-800 my-3 py-2">
        <Button className="my-2" variant="dark" onClick={props.continue}>
          Continue 👉
        </Button>
        <Button className="my-2" variant="dark">
          Let&apos;s go with the defaults! 🎞
        </Button>
        <Button className="my-2" variant="dark">
          Surprise me! 🎊
        </Button>
      </div>
    </FormTemplate>
  );
};

export default Start;

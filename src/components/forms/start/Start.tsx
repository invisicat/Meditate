import Button from '@/components/button/Button';
import { FormProps } from '@/lib/Forms';
import getCurrentTime from '@/lib/getCurrentTime';

const Start = (props: FormProps) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl leading-normal font-semibold mt-2 ">
          {getCurrentTime()}
        </h1>
        <p>Thats great that you are here! 🤗 Are you ready to meditate?</p>
      </div>
      <div className="flex flex-col text-gray-800 my-3 py-2">
        <Button className="my-2" variant="dark" onClick={props.continue}>
          Yes
        </Button>
        <Button className="my-2" variant="dark">
          No
        </Button>
        <Button className="my-2" variant="dark">
          Maybe
        </Button>
      </div>
    </>
  );
};

export default Start;

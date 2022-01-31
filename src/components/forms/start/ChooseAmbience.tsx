import { useEffect, useRef, useState } from 'react';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';

import useMeditationStore from '@/lib/atoms/formAtom';
import { FormProps } from '@/lib/Forms';
import useDarkMode from '@/lib/theme/useDarkMode';

import FormTemplate from '../FormTemplate';

export type Times =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export type Ambience = {
  name: string;
  audio: string;
  timeofday: Times[];
};

function getRandomAmbiences(): Ambience[] {
  const ambiences: Ambience[] = [];
  for (let i = 1; i < 16; i++) {
    ambiences.push({
      name: `Ambience ${i}`,
      audio: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i}.mp3`,
      timeofday: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24,
      ],
    });
  }
  return ambiences;
}

const Selection: Ambience[] = [...getRandomAmbiences()];

const ChooseAmbience = (props: FormProps) => {
  const [ambiences, setAmbiences] = useMeditationStore((state) => [
    state.ambience,
    state.setAmbience,
  ]);

  const addAmbience = (ambience: Ambience) => {
    setAmbiences([...ambiences, ambience]);
  };

  const removeAmbience = (ambience: Ambience) => {
    const newAmbiences = ambiences.filter((a) => a !== ambience);
    setAmbiences(newAmbiences);
  };

  return (
    <FormTemplate className="flex flex-col">
      <h1 className="text-5xl">Choose Ambience</h1>
      <p>Choose an ambience to play with. (Selected {ambiences.length})</p>
      <div className="grid md:grid-cols-6 sm:grid-cols-2 gap-4">
        {Selection.map((ambience, idx) => (
          <AmbientMusicComponent
            key={idx}
            ambience={ambience}
            addAmbience={addAmbience}
            removeAmbience={removeAmbience}
            defaultSelected={ambiences.includes(ambience)}
          />
        ))}
      </div>
      <div className="flex flex-row justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={props.back}
        >
          Back
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
          disabled={ambiences.length < 3}
          onClick={props.continue}
        >
          Next
        </button>
      </div>
    </FormTemplate>
  );
};

type AmbientMusicComponentProps = {
  ambience: Ambience;
  addAmbience: (ambience: Ambience) => void;
  removeAmbience: (ambience: Ambience) => void;
  defaultSelected?: boolean;
} & React.ComponentProps<'div'>;

const AmbientMusicComponent = ({
  ambience,
  addAmbience,
  removeAmbience,
  defaultSelected = false,
  ...rest
}: AmbientMusicComponentProps) => {
  const [theme, setTheme] = useDarkMode();
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const checkRef = useRef<HTMLInputElement>(null);

  const handleSelection = (event: HTMLInputElement) => {
    event.checked ? addAmbience(ambience) : removeAmbience(ambience);
  };

  const handlePlayback = async () => {
    if (playing) {
      setPlaying(false);
      await audio?.pause();
    } else {
      // play it
      setPlaying(true);
      if (audio == null) setAudio(new Audio(ambience.audio));
      audio?.play();
    }
  };

  useEffect(() => {
    if (audio) {
      audio.onabort = () => setPlaying(false);

      audio.onpause = () => setPlaying(false);

      audio.onended = () => setPlaying(false);

      audio.onerror = () => setPlaying(false);
    }
  }, [audio]);

  return (
    <div
      className="flex flex-col m-3 p-2 hover:bg-gray-300 dark:bg-slate-600 dark:hover:bg-gray-800 rounded-lg shadow-md"
      {...rest}
    >
      <input
        className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-400 checked:border-blue-400 focus:outline-none"
        type="checkbox"
        onChange={(e) => handleSelection(e.currentTarget)}
        defaultChecked={defaultSelected}
        ref={checkRef}
      />
      <button
        className="self-center w-12 h-12 m-4 hover:cursor-pointer"
        onClick={handlePlayback}
      >
        {playing ? (
          <AiFillPauseCircle className="w-12 h-12" />
        ) : (
          <AiFillPlayCircle className="w-12 h-12" />
        )}
      </button>
      <p>
        <span className="font-bold">{ambience.name}</span>
      </p>
    </div>
  );
};

export default ChooseAmbience;

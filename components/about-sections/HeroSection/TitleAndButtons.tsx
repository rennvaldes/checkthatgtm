import JoinOurMissionButton from './JoinOurMissionButton';

export default function TitleAndButtons() {
  return (
    <div className='max-w-[724px] flex flex-col items-center gap-4 relative z-10 px-4 lg:px-0 mt-[26px] lg:mt-[72px]'>
      <h1 className='font-[500] text-4xl text-center w-64 lg:w-auto lg:text-[70px] lg:leading-[77px]'>
        Reimagining Service as{' '}
        <span className='text-[42px] leading-[40px] lg:text-[80px] lg:leading-[77px] tracking-normal font-kepler-std italic text-ui-blue'>
          Software
        </span>
      </h1>
      <p className='font-elza text-[16px] lg:text-[20px] leading-[150%] text-center font-[400]'>
        We structure knowledge work as living code: versioned, observed, and continuously improved through AI-driven
        workflows with expert refinement at the core.
      </p>
      <JoinOurMissionButton />
    </div>
  );
}

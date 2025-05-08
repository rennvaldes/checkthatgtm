import ValuesDots from './ValuesDots';

export default function TitleAndDescription() {
  return (
    <div className='lg:w-full lg:max-w-[515px] lg:sticky lg:top-[120px] lg:max-h-[200px] max-w-[1440px] mx-auto'>
      <h2 className='font-clash-display font-[500] text-[28px] lg:text-[52px] leading-[31px] lg:leading-[57px] text-ui-whitest'>
        Our{' '}
        <span className='font-kepler-std italic text-[32px] lg:text-[60px] leading-[31px] lg:leading-[57px] text-ui-green-light'>
          values
        </span>
      </h2>
      <p className='text-[#ECECF6] font-elza font-[400] text-[16px] lg:text-[20px] leading-[150%] mt-2 max-w-[291px] lg:w-full lg:max-w-full'>
        Our belief is simple: AI should exist to empower people to do their best work. And that starts with everyone
        here.
      </p>
      <ValuesDots />
    </div>
  );
}

import Cards from './Cards';
import TitleAndDescription from './TitleAndDescription';

export default function Values() {
  return (
    <section className='px-4 pt-10 pb-20 bg-ui-black w-full lg:pl-20 lg:pr-[115px] lg:pt-[120px] lg:pb-[52px] lg:relative lg:overflow-clip'>
      <div className='lg:max-w-screen-xl lg:mx-auto flex flex-col lg:flex-row lg:justify-between'>
        <TitleAndDescription />
        <Cards />
      </div>
    </section>
  );
}

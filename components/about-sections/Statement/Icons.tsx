import Triangle from '@/components/icons/Triangle';
import X from '@/components/icons/X';

export default function Icons() {
  return (
    <>
      <X className='hidden 2xl:block absolute text-ui-blue left-[calc(100%_+_211px)] -top-[30px]' />
      <X className='hidden 2xl:block absolute text-ui-blue -left-[211px] top-[calc(100%_+_30px)]' />
      <Triangle className='hidden 2xl:block absolute text-ui-green-light rotate-90 left-[calc(100%_+_218px)] top-[calc(100%_+_88px)]' />
    </>
  );
}

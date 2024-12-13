/* eslint-disable @next/next/no-img-element */
import ArrowRight from '@/components/icons/ArrowRight';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getMainDataAndArticles } from '@/lib/api/strapi/blog';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import Link from 'next/link';
import React from 'react';

function Linkedin() {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.39167 7.625V13.375H5.14167V7.625H6.39167ZM10.6408 8.875C9.95018 8.875 9.39083 9.43434 9.39083 10.125V13.375H8.14083V10.125C8.14083 8.74399 9.25982 7.625 10.6408 7.625C12.0218 7.625 13.1408 8.74399 13.1408 10.125V13.375H11.8908V10.125C11.8908 9.43434 11.3315 8.875 10.6408 8.875Z'
        fill='currentColor'
      />
      <path
        d='M6.62668 5.67624C6.62668 6.13647 6.25358 6.50957 5.79334 6.50957C5.33311 6.50957 4.96001 6.13647 4.96001 5.67624C4.96001 5.216 5.33311 4.8429 5.79334 4.8429C6.25358 4.8429 6.62668 5.216 6.62668 5.67624Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.875 0.875H17.125V17.125H0.875V0.875ZM2.125 2.125V15.875H15.875V2.125H2.125Z'
        fill='currentColor'
      />
    </svg>
  );
}

function Instagram() {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.6794 7.32062C9.75189 6.39313 8.24813 6.39313 7.32063 7.32062C6.39314 8.24812 6.39314 9.75189 7.32063 10.6794C8.24813 11.6069 9.75189 11.6069 10.6794 10.6794C11.6069 9.75189 11.6069 8.24812 10.6794 7.32062ZM11.5633 6.43674C10.1476 5.02109 7.8524 5.02109 6.43675 6.43674C5.0211 7.85239 5.0211 10.1476 6.43675 11.5633C7.8524 12.9789 10.1476 12.9789 11.5633 11.5633C12.9789 10.1476 12.9789 7.85239 11.5633 6.43674Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.875 0.875H17.125V17.125H0.875V0.875ZM2.125 2.125V15.875H15.875V2.125H2.125Z'
        fill='currentColor'
      />
      <path
        d='M14 4.83333C14 5.29357 13.6269 5.66667 13.1667 5.66667C12.7064 5.66667 12.3333 5.29357 12.3333 4.83333C12.3333 4.3731 12.7064 4 13.1667 4C13.6269 4 14 4.3731 14 4.83333Z'
        fill='currentColor'
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.154 15.8167C4.004 15.8167 2.854 15.375 1.979 14.5C0.229004 12.75 0.229004 9.9 1.979 8.14167L4.179 5.94167C4.929 5.19167 5.92067 4.78334 6.979 4.78334C8.03734 4.78334 9.029 5.19167 9.779 5.94167L11.0123 7.175L10.129 8.05834L8.89567 6.825C7.87067 5.8 6.08734 5.8 5.06234 6.825L2.86234 9.025C1.59567 10.2917 1.59567 12.35 2.86234 13.6167C4.129 14.8833 6.18734 14.8833 7.454 13.6167L8.79567 12.275L9.679 13.1583L8.33734 14.5C7.46234 15.375 6.31234 15.8167 5.16234 15.8167H5.154ZM10.5957 11.4333C9.53734 11.4333 8.54567 11.025 7.79567 10.275L6.56234 9.04167L7.44567 8.15834L8.679 9.39167C9.704 10.4167 11.4873 10.4167 12.5123 9.39167L15.0373 6.86667C15.654 6.25 15.9873 5.44167 15.9873 4.575C15.9873 3.70834 15.6457 2.89167 15.0373 2.28334C13.8123 1.05834 11.679 1.05834 10.454 2.28334L9.154 3.58334L8.27067 2.7L9.57067 1.4C10.4207 0.550003 11.5457 0.0833359 12.7457 0.0833359C13.9457 0.0833359 15.0707 0.550003 15.9207 1.4C16.7707 2.25 17.2373 3.375 17.2373 4.575C17.2373 5.775 16.7707 6.9 15.9207 7.75L13.3957 10.275C12.6457 11.025 11.654 11.4333 10.5957 11.4333Z'
        fill='currentColor'
      />
    </svg>
  );
}

function Twitter() {
  return (
    <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.2277 5.52714L6.84 0.291664H1.18448L6.89995 9.12467L0.810059 15.7083H2.51282L7.60081 10.2078L11.16 15.7083H16.8155L10.9285 6.61028L16.7732 0.291664H15.0705L10.2277 5.52714ZM11.84 14.4583H14.5178L6.15997 1.54166H3.48216L11.84 14.4583Z'
        fill='currentColor'
      />
    </svg>
  );
}

function BlogPageHeader({ data, isLoading }: { isLoading: boolean; data: any }) {
  const { category, title, publisher_name, publisher_avatar, publisher_legend } = data;
  const categoryName = category?.name || category;

  const { data: rawData, isLoading: isGeneralDataLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-data-hero',
    getFn: () => getMainDataAndArticles(),
  });

  const { blog_x_link, blog_instagram_link, blog_linkedin_link } = React.useMemo(
    () => rawData?.data.attributes ?? {},
    [rawData]
  );

  return (
    <section className='flex w-full max-w-[1280px] flex-col items-start self-center px-[20px] pb-[4px] lg:px-0 lg:pb-0'>
      <Link href='/blog' className='flex items-center justify-center gap-[12px] py-[12px] font-medium hover:underline'>
        <ArrowRight className='scale-x-[-1]' />
        Back to blog
      </Link>

      {isLoading ? (
        <Skeleton className='bg-ui-black/50 mt-[32px] h-[28px] w-[112px] rounded-full lg:mt-[40px]' />
      ) : (
        <div className='mt-[32px] rounded-full bg-[#DEDEF0] px-[12px] py-[8px] text-[12px] font-medium lg:mt-[40px]'>
          {categoryName}
        </div>
      )}
      {isLoading ? (
        <Skeleton className='mt-[16px] h-[62px] w-full lg:mt-[16px] lg:h-[114px] lg:w-[850px]' />
      ) : (
        <h1 className='mt-[16px] text-[28px] font-medium leading-[31px] lg:mt-[16px] lg:w-[850px] lg:text-[52px] lg:leading-[57px]'>
          {title}
        </h1>
      )}

      <div className='mt-[20px] flex w-full flex-col lg:mt-[40px] lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex items-center gap-[12px] lg:items-stretch'>
          {isLoading ? (
            <Skeleton className='h-[32px] w-[32px] rounded-full lg:h-[44px] lg:w-[44px]' />
          ) : (
            <img
              className='h-[32px] w-[32px] rounded-full lg:h-[44px] lg:w-[44px]'
              alt='placeholder-user'
              src={publisher_avatar}
            />
          )}
          {isLoading ? (
            <Skeleton className='h-[18px] w-[103px] lg:h-[42px]' />
          ) : (
            <div className='font-elza flex flex-col justify-center lg:leading-[21px]'>
              <h4 className='lg:font-[600]'>
                <span className='lg:hidden'>by</span> {publisher_name}
              </h4>
              {publisher_legend && <p className='hidden lg:block'>{publisher_legend}</p>}
            </div>
          )}
        </div>
        {isGeneralDataLoading ? (
          <Skeleton className='mb-[8px] mt-[16px] h-[44px] lg:w-[300px]' />
        ) : (
          <div className='mt-[16px] flex items-center justify-start mb-[8px]'>
            <p className='p-[16px] font-medium'>Share</p>
            {/* <a
              href={blog_linkedin_link}
              className='hover:bg-ui-black/10 transition-color rounded-full p-[16px] duration-300'>
              <Linkedin />
            </a>
            <a href={blog_x_link} className='hover:bg-ui-black/10 transition-color rounded-full p-[16px] duration-300'>
              <Twitter />
            </a>
            <a
              href={blog_instagram_link}
              className='hover:bg-ui-black/10 transition-color rounded-full p-[16px] duration-300'>
              <Instagram />
            </a> */}

            <div className='relative flex items-center justify-center gap-1'>
              <button
                onClick={() => navigator.clipboard.writeText(location.href)}
                className='hover:bg-ui-black/10 transition-color peer rounded-full p-[16px] duration-300'>
                <LinkIcon />
              </button>
              <p className='invisible absolute -top-4 text-xs peer-focus:visible'>Copied!</p>
            </div>
          </div>
        )}
      </div>

      <div className='border-ui-black w-full border-b-[1px]' />
    </section>
  );
}

export default BlogPageHeader;

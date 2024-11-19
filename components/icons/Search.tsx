import { IconProps } from '@/static/types';

function Search({ className }: IconProps) {
  return (
    <svg
      className={className}
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.16667 2.125C4.82995 2.125 2.125 4.82995 2.125 8.16667C2.125 11.5034 4.82995 14.2083 8.16667 14.2083C11.5034 14.2083 14.2083 11.5034 14.2083 8.16667C14.2083 4.82995 11.5034 2.125 8.16667 2.125ZM0.875 8.16667C0.875 4.13959 4.13959 0.875 8.16667 0.875C12.1937 0.875 15.4583 4.13959 15.4583 8.16667C15.4583 9.95519 14.8144 11.5933 13.7457 12.8619L17.3839 16.5L16.5 17.3839L12.8619 13.7457C11.5933 14.8144 9.95519 15.4583 8.16667 15.4583C4.13959 15.4583 0.875 12.1937 0.875 8.16667Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default Search;

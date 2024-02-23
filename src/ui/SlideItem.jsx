export function SlideItem(props) {
  const { title, content, contentLine2, url, imgSrc } = props.site;

  return (
    <div class='relative p-5'>
      {/* Img */}
      <div class='w-full h-full'>
        <a
          onClick={() => {
            console.log(url);
            window.open(url, '_blank');
          }}
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
        >
          <img src={imgSrc} />
        </a>
      </div>
      {/* Text Content */}
      {/* bg-[#141517 */}
      <div class='absolute bottom-0 left-0 bg-[#141516] opacity-95 w-full text-white flex flex-row items-center justify-between px-5 py-2'>
        <div class='flex flex-row  space-x-5 items-center'>
          <span class='font-semibold'>{title}</span>

          <div class='w-[1.8px] h-full bg-gradient-to-b from-transparent via-white to-transparent'>
            &nbsp;
          </div>

          <div class='flex flex-col'>
            <span class='text-sm'>{content}</span>
            <span class='text-sm'>{contentLine2}</span>
          </div>
        </div>

        <div>
          <button
            type='button'
            class='ItmBtn bg-[#1E202E] '
            onClick={() => {
              console.log(url);
              window.open(url, '_blank');
            }}
          >
            <div class='flex flex-row items-center justify-center space-x-1 text-[#A7A7CC]'>
              <div>View</div>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5'
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export function SlideItem(props) {
  const { title, content, url, imgSrc } = props.site;

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
      <div class='absolute bottom-0 left-0 bg-[#141516] opacity-60 w-full text-white flex flex-row items-center justify-between px-5 py-4'>
        <div class='flex flex-row  space-x-5'>
          <span class=''>{title}</span>

          <div class='w-[2px] h-full bg-gradient-to-b from-transparent via-white to-transparent'>
            &nbsp;
          </div>

          <span class=''>{content}</span>
        </div>

        <div>
          <button
            type='button'
            class='ItmBtn bg-black'
            onClick={() => {
              console.log(url);
              window.open(url, '_blank');
            }}
          >
            사이트 바로가기
          </button>
        </div>
      </div>
    </div>
  );
}

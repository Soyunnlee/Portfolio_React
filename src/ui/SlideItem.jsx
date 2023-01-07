export function SlideItem(props) {
  const { title, content, url, imgSrc } = props.site;

  return (
    <div class="ItmWrap">
      <div class="">

        {/* Img */}
        <a
          onClick={() => {
            console.log(url);
            window.open(url, "_blank");
          }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        > 
        <img src={imgSrc} />
        </a>

          {/* Text Content */}
        <div class="ItmTextBox">
          <h5 class="ItmTitle">{title}</h5>
          <p class="ItmContent">{content}</p>
          <button
            type="button"
            class="ItmBtn bg-black"
            onClick={() => {
              console.log(url);
              window.open(url, "_blank");
            }}
          >
            사이트 바로가기
          </button>
        </div>

      </div>
    </div>
  );
}

import React from "react";
import "../Css/Typography.css";
import "../Css/Grid.css";
import mimojiImg from "../assets/images/mimoji-unscreen.gif";


function Contact(props) {
  return (
    <div className="SectionWrap" id="5">
      <div className="Container ">
        <div className="TitleWrapCol mb-20">
          <div className="Title ">CONTACT</div>
        </div>

        <div className="flex justify-around">
          {/* 왼쪽컨텐츠 */}
          <div className="w-2/5 max-sm:hidden">
            <div class="font-sans rounded-lg  py-20 w-full flex flex-row justify-center items-center ">
              <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
                <img
                  class="w-40 mx-auto rounded-full -mt-20 border-8 border-white"
                  src={mimojiImg}
                  alt=""
                />
                <div class="text-center mt-2 text-3xl font-medium">
                  Soyun Lee
                </div>
                <div class="text-center mt-2 font-light text-sm">
                  @soxxy95@naver.com
                </div>
                <div class="px-6 text-center mt-2 font-light text-sm">
                  <p>Frontend, Publising, UI/UX Design</p>
                </div>
                <hr class="mt-8" />
                <div class="flex p-4">
                  <div class="w-1/2 text-center">
                    <span class="font-bold"><a href="https://github.com/" target="_blank">github</a></span> 
                  </div>
                  <div class="w-0 border border-gray-300"></div>
                  <div class="w-1/2 text-center">
                    <span class="font-bold"><a href="https://soyun-s.tistory.com/" target="_blank">tistory</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 오른쪽컨텐츠 */}
          <div className="w-2/5 max-sm:w-full">
            {/* 메일전송폼 */}

            <div class="flex  items-center justify-start bg-white">
              <div class="mx-auto w-full max-w-lg  ">
                <h1 class="text-4xl font-medium">Contact us</h1>

                <form action="https://api.web3forms.com/submit" class="mt-10 ">
                  <input
                    type="hidden"
                    name="access_key"
                    value="YOUR_ACCESS_KEY_HERE"
                  />
                  <div class="grid gap-6 sm:grid-cols-2">
                    <div class="relative z-0">
                      <input
                        type="text"
                        name="name"
                        class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        이름
                      </label>
                    </div>
                    <div class="relative z-0">
                      <input
                        type="text"
                        name="email"
                        class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        이메일
                      </label>
                    </div>
                    <div class="relative z-0 col-span-2">
                      <textarea
                        name="message"
                        rows="5"
                        class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                      ></textarea>
                      <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        내용
                      </label>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="mt-5 rounded-md bg-black px-10 py-2 text-white"
                  >
                    메일보내기
                  </button>
                </form>
              </div>
            </div>
            {/* 메일전송폼 끝 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function RoomDetail(props) {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className='justify-center flex flex-col py-12'>
        <div id='main-info' className='justify-between flex gap-5 mt-12  items-start max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10'>
          <div className='items-stretch content-center flex-wrap flex flex-col'>
            <div className='flex items-start justify-between gap-px'>
              <div className='text-black text-center text-base self-center grow whitespace-nowrap my-auto'>THƯỜNG</div>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/f4450fbe32f8202a89b45150b4a54b70be1d9fc0819822b1fd80e544a3c38a28?'
                className='aspect-square object-contain object-center w-10 fill-yellow-400 overflow-hidden self-stretch shrink-0 max-w-full'
              />
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/f4450fbe32f8202a89b45150b4a54b70be1d9fc0819822b1fd80e544a3c38a28?'
                className='aspect-square object-contain object-center w-10 fill-yellow-400 overflow-hidden self-stretch shrink-0 max-w-full'
              />
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/f4450fbe32f8202a89b45150b4a54b70be1d9fc0819822b1fd80e544a3c38a28?'
                className='aspect-square object-contain object-center w-10 fill-yellow-400 overflow-hidden self-stretch shrink-0 max-w-full'
              />
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/f4450fbe32f8202a89b45150b4a54b70be1d9fc0819822b1fd80e544a3c38a28?'
                className='aspect-square object-contain object-center w-10 fill-yellow-400 overflow-hidden self-stretch shrink-0 max-w-full'
              />
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/52f3b75edc268ad53fa52b8e1d2c06a7612d802e768a70557b7ad5a0dcc7b50f?'
                className='aspect-square object-contain object-center w-10 fill-slate-500 overflow-hidden self-stretch shrink-0 max-w-full'
              />
            </div>
            <div className='text-black text-center text-3xl font-bold whitespace-nowrap mt-4'>Premium King Room</div>
          </div>
          <div className='items-end self-stretch flex flex-col'>
            <div className='text-black text-center text-xl ml-4 self-start max-md:ml-2.5'>Giá phòng từ</div>
            <div className='text-slate-400 text-center text-xl ml-4 mt-2.5 self-start max-md:ml-2.5'>4,695,333 VND</div>
            <div className='justify-center items-stretch flex gap-2.5 ml-4 mt-2.5 self-start max-md:ml-2.5'>
              <div className='text-cyan-600 text-center text-3xl font-bold grow whitespace-nowrap'>2,817,200 VND</div>
              <div className='text-black text-center text-xl self-center whitespace-nowrap my-auto'>/ đêm</div>
            </div>
            <div className='text-white text-center text-2xl font-bold whitespace-nowrap justify-center items-stretch bg-cyan-600 self-stretch mt-4 px-10 py-6 rounded-md max-md:px-5'>
              LỰA CHỌN PHÒNG
            </div>
          </div>
        </div>
        <hr className='my-6' />
        <div id='services'>
          <div className='text-black text-center text-3xl font-bold whitespace-nowrap'>Tiện nghi phòng</div>
          <div className='flex justify-between gap-5 mt-12 mx-8 items-start flex-wrap '>
            <div className='w-1/4 flex'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/1a3bc6608e5714f46fa90eb07e5b0d75e9768d5151712a3ea055f0a28e00aba8?'
                className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full'
              />
              <div className='text-black text-center text-2xl font-light self-stretch grow shrink basis-auto'>
                Hồ bơi vô cực sân thượng
                <br />
              </div>
            </div>
            <div className='w-1/4 flex'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/1a3bc6608e5714f46fa90eb07e5b0d75e9768d5151712a3ea055f0a28e00aba8?'
                className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full'
              />
              <div className='text-black text-center text-2xl font-light self-stretch grow shrink basis-auto'>
                Hồ bơi vô cực sân thượng
                <br />
              </div>
            </div>
            <div className='w-1/4 flex'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/1a3bc6608e5714f46fa90eb07e5b0d75e9768d5151712a3ea055f0a28e00aba8?'
                className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full'
              />
              <div className='text-black text-center text-2xl font-light self-stretch grow shrink basis-auto'>
                Hồ bơi vô cực sân thượng
                <br />
              </div>
            </div>
            <div className='w-1/4 flex'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/1a3bc6608e5714f46fa90eb07e5b0d75e9768d5151712a3ea055f0a28e00aba8?'
                className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full'
              />
              <div className='text-black text-center text-2xl font-light self-stretch grow shrink basis-auto'>
                Hồ bơi vô cực sân thượng
                <br />
              </div>
            </div>
            <div className='w-1/4 flex'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/1a3bc6608e5714f46fa90eb07e5b0d75e9768d5151712a3ea055f0a28e00aba8?'
                className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full'
              />
              <div className='text-black text-center text-2xl font-light self-stretch grow shrink basis-auto'>
                Hồ bơi vô cực sân thượng
                <br />
              </div>
            </div>
            <div className='w-1/4 flex'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/1a3bc6608e5714f46fa90eb07e5b0d75e9768d5151712a3ea055f0a28e00aba8?'
                className='aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full'
              />
              <div className='text-black text-center text-2xl font-light self-stretch grow shrink basis-auto'>
                Hồ bơi vô cực sân thượng
                <br />
              </div>
            </div>
          </div>
        </div>

        <hr className='my-7' />

        <div id='introduction' className='items-stretch flex flex-col'>
          <div className='text-black text-center text-2xl font-semibold w-full max-md:max-w-full'>Giới thiệu về khách sạn</div>
          <div className='text-black text-xl font-bold underline w-full mt-10 max-md:max-w-full'>
            <span className=''>Tọa lạc ngay trung tâm thành phố Hồ Chí Minh, </span>
            <a href='https://www.vietnambooking.com/hotel/vietnam/la-vela-saigon-hotel.html' className=' underline' target='_blank'>
              La Vela Saigon Hotel
            </a>
            <span className=''>
              {" "}
              là khách sạn 5 sao hàng đầu được công nhận đẳng cấp thế giới. Khách sạn sở hữu vị trí vô cùng lý tưởng khi cách chợ Tân Định chỉ 800 m và chỉ mất khoảng 10 phút để đi đến các điểm du
              lịch nổi tiếng như: nhà thờ Đức Bà, Nhà hát Thành Phố, Bưu Điện Thành Phố,... Từ sân bay quốc tế Tân Sơn Nhất, quý khách chỉ mất 15 phút lái xe để đến chỗ nghỉ.
            </span>
            <br />
            <br />
            <span className=''>
              Khách sạn La Vela Saigon có tổng cộng 27 tầng gồm 280 phòng nghỉ các loại đáp ứng mọi nhu cầu lưu trú của quý khách. Bên trong các phòng nghỉ, quý khách có thể tìm thấy các vật dụng cần
              thiết như: truyền hình vệ tinh màn hình phẳng, điều hòa, ấm đun nước, chậu rửa vệ sinh (bidet), phòng tắm riêng với máy sấy tóc và tủ để quần áo. Trong phòng còn có khu vực ghế ngồi và
              tầm nhìn ra quang cảnh thành phố lộng lẫy.
            </span>
          </div>

          <hr className='my-7' />

          <div className='items-stretch flex flex-col'>
            <div className='text-black text-center text-2xl font-semibold w-full max-md:max-w-full'>Nhận xét và đánh giá</div>
            <div className='border flex w-full flex-col mt-10 px-20 py-12 rounded-xl border-solid border-slate-400 max-md:max-w-full max-md:px-5'>
              <form action=''>
                <div id='input' className=' m-10 flex justify-between flex-wrap '>
                  <div className='flex flex-col w-1/2 px-4'>
                    <label htmlFor='name' className='text-black text-xl font-semibold'>
                      Họ và tên
                    </label>
                    <input type='text' name='name' id='name' className='border border-solid border-slate-400 rounded-md px-3 py-2 mt-2.5' placeholder='Họ và tên' />
                  </div>
                  <div className='flex flex-col w-1/2 px-4'>
                    <label htmlFor='vote' className='text-black text-xl font-semibold'>
                      Đánh giá
                    </label>
                    <input type='text' name='vote' id='name' className='border border-solid border-slate-400 rounded-md px-3 py-2 mt-2.5' placeholder='5 sao' />
                  </div>
                  <div className='flex flex-col w-full px-4 mt-5'>
                    <label htmlFor='comment' className='text-black text-xl font-semibold'>
                      Nội dung
                    </label>
                    <div className='mt-2'>
                      <textarea
                        id='comment'
                        name='comment'
                        rows={3}
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className='w-full justify-center mt-6 flex gap-x-6 flex-wrap'>
                  <button
                    type='submit'
                    className=' rounded-md bg-indigo-600 min-w-24 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Gửi
                  </button>
                </div>
                <div className='text-lime-600 text-xl px-4 m-10'>
                  Mọi phản hồi của quý khách luôn là nguồn động lực để chúng tôi mang đến nhiều sản phẩm thú vị hơn! Hãy để lại cảm nhận của bạn nhé!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;

import homepage from './assets/homepage.jpeg'
import logo from './assets/logo.jpeg'
import head1 from './assets/head1.jpg'
import head2 from './assets/head2.jpg'
import head3 from './assets/head3.jpg'
import './App.css'

function App() {

  return (
    <div>
      <div>
        <img src={homepage} alt="Homepage" class="w-screen h-screen bg-cover z-0"/>
      </div>
      <div class="absolute top-0 left-0 h-full w-full z-10 bg-black opacity-80">
      </div>
      <header class=" absolute top-0 left-0 flex w-full text-white font-bold justify-between px-32 pt-4 z-50">
        <img src={logo} alt="Logo" class="w-48 h-8 cursor-pointer"/>
        <div class="flex gap-6 items-center justify-center">
          <p class="cursor-pointer">Program</p>
          <p class="cursor-pointer">Corporate</p>
          <p class="cursor-pointer">About</p>
          <button class="py-2 px-4 bg-white text-emerald-500 border-emerald-500 border cursor-pointer" id="btn-daftar">Daftar</button>
          <button class="py-2 px-4 bg-emerald-500 text-white border-emerald-500 border cursor-pointer" id="btn-masuk">Masuk</button>
        </div>
      </header>
      <main class="flex flex-col justify-center items-center gap-4 z-20 absolute top-0 left-0 right-0 bottom-0 text-white font-bold select-none">
        <p>Updated: 31 Maret 2023</p>
        <h1 class="text-7xl">3854 Alumni*</h1>
        <h2 class="text-4xl font-medium">Meraih Karier Impiannya</h2>
        <h2 class="text-4xl font-medium text-emerald-500">Walau <span class="text-blue-600">Beda Jurusan.</span></h2>
        <p class="px-40 text-center font-medium">*Sejak Maret 2021, harisenin.com telah membantu 3854 muda-mudi Indonesia meraih impiannya terlepas dari latar belakang ekonomi dan sosial mereka.</p>
        <button class="p-4 bg-emerald-500 text-white border-emerald-500 border capitalize mt-2" id="btn-main">klik untuk konsultasikan masa depanmu. gratis!</button>
        <div class="flex gap-2">
          <div class="flex">
            <img src={head1} alt="" class="w-12 h-12 rounded-full border-2 border-white"/>
            <img src={head2} alt="" class="w-12 h-12 rounded-full border-2 border-white -ml-4"/>
            <img src={head3} alt="" class="w-12 h-12 rounded-full border-2 border-white -ml-4"/>
          </div>
          <div class="flex flex-col font-normal">
            <div class="text-yellow-400 flex">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 536 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path></svg>
            </div>
            <p>(4.9/5 dari 3854 Alumni)</p>
          </div>
        </div>
        <p id="waktu"></p>
        </main>
    </div>
  )
}

export default App

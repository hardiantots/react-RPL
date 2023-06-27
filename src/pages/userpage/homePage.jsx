import { Link } from "react-router-dom"
import Header from "../../components/userpage/header"
import img from "../../image/homepage.png"
import ButtonShowMorePM from "../../components/userpage/ForPaketMenu/buttonShowMorePM"
import logo from "../../image/logo tring.png"
import logowhite from "../../image/logo tring white.png"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function HomePage(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <>
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex flex-col">
                <div className="flex flex-col items-center md:block">
                    <div className="absolute w-full h-screen object-cover bg-black/50"></div>
                    <div className="absolute w-full h-screen flex flex-col justify-center items-start px-10 lg:px-48">
                        <p className="mb-2 text-sm md:text-lg font-bold leading-tight text-white">Butuh Catering untuk Acara?</p>

                        <form class="relative w-full">
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div>
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-[#F77E21]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#F77E21] focus:border-[#F77E21]" placeholder="Cari Katering" required/>
                                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-[#F77E21] font-medium rounded-lg text-sm px-4 py-2">Cari</button>
                            </div>
                        </form>
                    </div>
                    <img className="w-full h-screen object-cover" src={img} alt="Food Img"/>
                    

                    <div className="w-full min-h-screen flex flex-col justify-center gap-14 px-4 py-14 lg:px-48">
                        <p className="mb-2 text-2xl md:text-4xl font-bold leading-tight text-[#F77E21] text-center ">LIST KATERING</p>
                        <Carousel responsive={responsive} swipeable={true} showDots={true} className="pb-8 z-0">
                            <div class="flex flex-col justify-center items-start rounded-lg bg-white shadow-lg mx-4">
                                <img
                                class="rounded-t-lg w-full h-48 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div class="px-6 pt-6 pb-0">
                                    <div className="flex flex-col justify-between items-start gap-3">
                                        <div>
                                            <h5
                                            class="mb-2 text-md text-left font-bold leading-tight text-neutral-800">
                                            TOKO KATERING
                                            </h5>
                                            <p class="mb-4 text-xs text-black">
                                            Jl. Pajjaiangan | 0812xxxxxxxx
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/profile'>
                                    <button
                                    type="button"
                                    class="ml-6 my-5 inline-block rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    KUNJUNGI TOKO
                                    </button>
                                </Link>
                            </div>
                            <div class="flex flex-col justify-center items-start rounded-lg bg-white shadow-lg mx-4">
                                <img
                                class="rounded-t-lg w-full h-48 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div class="px-6 pt-6 pb-0">
                                    <div className="flex flex-col justify-between items-start gap-3">
                                        <div>
                                            <h5
                                            class="mb-2 text-md text-left font-bold leading-tight text-neutral-800">
                                            TOKO KATERING
                                            </h5>
                                            <p class="mb-4 text-xs text-black">
                                            Jl. Pajjaiangan | 0812xxxxxxxx
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/profile'>
                                    <button
                                    type="button"
                                    class="ml-6 my-5 inline-block rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    KUNJUNGI TOKO
                                    </button>
                                </Link>
                            </div>
                            <div class="flex flex-col justify-center items-start rounded-lg bg-white shadow-lg mx-4">
                                <img
                                class="rounded-t-lg w-full h-48 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div class="px-6 pt-6 pb-0">
                                    <div className="flex flex-col justify-between items-start gap-3">
                                        <div>
                                            <h5
                                            class="mb-2 text-md text-left font-bold leading-tight text-neutral-800">
                                            TOKO KATERING
                                            </h5>
                                            <p class="mb-4 text-xs text-black">
                                            Jl. Pajjaiangan | 0812xxxxxxxx
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/profile'>
                                    <button
                                    type="button"
                                    class="ml-6 my-5 inline-block rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    KUNJUNGI TOKO
                                    </button>
                                </Link>
                            </div>
                            <div class="flex flex-col justify-center items-start rounded-lg bg-white shadow-lg mx-4">
                                <img
                                class="rounded-t-lg w-full h-48 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div class="px-6 pt-6 pb-0">
                                    <div className="flex flex-col justify-between items-start gap-3">
                                        <div>
                                            <h5
                                            class="mb-2 text-md text-left font-bold leading-tight text-neutral-800">
                                            TOKO KATERING
                                            </h5>
                                            <p class="mb-4 text-xs text-black">
                                            Jl. Pajjaiangan | 0812xxxxxxxx
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/profile'>
                                    <button
                                    type="button"
                                    class="ml-6 my-5 inline-block rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    KUNJUNGI TOKO
                                    </button>
                                </Link>
                            </div>
                            <div class="flex flex-col justify-center items-start rounded-lg bg-white shadow-lg mx-4">
                                <img
                                class="rounded-t-lg w-full h-48 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div class="px-6 pt-6 pb-0">
                                    <div className="flex flex-col justify-between items-start gap-3">
                                        <div>
                                            <h5
                                            class="mb-2 text-md text-left font-bold leading-tight text-neutral-800">
                                            TOKO KATERING
                                            </h5>
                                            <p class="mb-4 text-xs text-black">
                                            Jl. Pajjaiangan | 0812xxxxxxxx
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/profile'>
                                    <button
                                    type="button"
                                    class="ml-6 my-5 inline-block rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    KUNJUNGI TOKO
                                    </button>
                                </Link>
                            </div>
                        </Carousel>
                    </div>

                    <div className="w-full min-h-screen flex flex-col bg-[#F77E21] justify-start items-center xl:justify-center px-4 py-14 lg:px-48">
                        <p className="mb-2 text-2xl md:text-4xl font-bold leading-tight text-white self-start">DAFTAR MENU</p>
                        <p className="mb-2 text-2xl md:text-2xl font-medium leading-tight text-white self-start">Daftar menu dari beberapa catering yang ada</p>
                        <div className="mt-10 grid w-10/12 grid-flow-row gap-x-8 gap-y-12 sm:w-11/12 sm:grid-cols-2 md:w-full md:grid-cols-2 xl:grid-cols-3">
                            <div className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                                <img
                                className="rounded-t-lg w-full h-40 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div class="px-6 pt-6 pb-0">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                        <div>
                                            <p
                                            className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                            PAKET SUPER MENU 1
                                            </p>
                                            <p
                                            className="mb-1 text-sm md:text-left font-semibold leading-tight text-neutral-800">
                                            Toko Katering Anu
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-6 lg:ml-0">
                                    <ButtonShowMorePM/>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                                <img
                                className="rounded-t-lg w-full h-40 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div class="px-6 pt-6 pb-0">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                        <div>
                                            <p
                                            className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                            PAKET SUPER MENU 1
                                            </p>
                                            <p
                                            className="mb-1 text-sm md:text-left font-semibold leading-tight text-neutral-800">
                                            Toko Katering Anu
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-6 lg:ml-0">
                                    <ButtonShowMorePM/>
                                </div>
                            </div>
                            
                            <div className="flex flex-col justify-center items-start rounded-lg bg-white shadow-xl">
                                <img
                                className="rounded-t-lg w-full h-40 object-cover"
                                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                alt="" />
                                <div class="px-6 pt-6 pb-0">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                                        <div>
                                            <p
                                            className="mb-2 text-md md:text-left font-bold leading-tight text-neutral-800">
                                            PAKET SUPER MENU 1
                                            </p>
                                            <p
                                            className="mb-1 text-sm md:text-left font-semibold leading-tight text-neutral-800">
                                            Toko Katering Anu
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-6 lg:ml-0">
                                    <ButtonShowMorePM/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-14 lg:px-48">
                        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
                            <img src={logo} alt="Food Img" className="w-40 h-40 lg:w-52 lg:h-52 border border-[#F77E21] border-2 rounded-full object-contain"/>
                            <div className="flex flex-col justify-between text-center md:text-left">
                                <p className="mb-2 text-2xl md:text-4xl font-bold leading-tight text-[#F77E21]">ABOUT US</p>
                                <p className="mb-2 text-md md:text-xl font-medium leading-tight text-[#F77E21]">E-tring adalah suatu platform yang akan memudahkan anda dalam mencari pilihan catering yang tepat dengan variasi toko catering dan berbagai menu yang ditawarkan.</p>
                            </div>
                        </div>
                        <hr className="mt-14 w-full border border-[#F77E21] xl:mt-[4em]"/>
                        <div className="flex flex-col mt-14 md:mt-16 gap-5 items-center">
                            <p className="mb-2 text-2xl md:text-4xl font-bold leading-tight text-center md:text-left text-[#F77E21]">Tertarik bergabung menjadi bagian dari kami?</p>
                            <Link to='/registerpagecatering'>
                                    <button
                                    type="button"
                                    class="my-5 inline-block rounded bg-[#F77E21] px-6 pb-2 pt-2.5 text-xs md:text-lg font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    DAFTARKAN CATERING ANDA
                                    </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="w-full h-56 gap-8 md:gap-0 md:h-36 bg-[#010048] flex flex-col md:flex-row justify-center items-start md:justify-between md:items-center px-4 py-14 lg:px-48">
                <img src={logowhite} alt="Food Img" className="ml-[-0.6em] w-36 h-36 object-contain"/>
                <div className="flex flex-col justify-between">
                    <p className="mb-2 text-sm md:text-md font-bold leading-tight text-white md:text-right">2023 Kelompok 6</p>
                    <p className="mb-2 text-sm md:text-md font-medium leading-tight text-white md:text-right">Makassar, Sulawesi Selatan</p>
                </div>
            </footer>
        </div>
        </>
    )
}
import { Link } from "react-router-dom";
import Header from "../../components/userpage/header";
import img from "../../image/image.png"

export default function HubungiPenjual(){
    return(
        <>
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="px-2 flex flex-col justify-center items-center gap-4 md:px-[10%] lg:px-44 mb-10 mt-28 lg:mt-36">
                <img src={img} alt="Food Img" className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-3 border border-[#F77E21] border-4 rounded-full object-cover"/>
                <p
                className="mb-2 text-lg md:text-left lg:text-2xl font-bold leading-tight text-neutral-800">
                Hubungi Toko Via :
                </p>
                <Link to="" class="self-center w-[15em] md:w-[25em] text-center mb-2 rounded bg-[#F77E21] px-6 py-4 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                Telepon
                </Link>
                <Link to="" class="self-center w-[15em] md:w-[25em] text-center mb-2 rounded bg-[#F77E21] px-6 py-4 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                WhatsApp
                </Link>
                <Link to="" class="self-center w-[15em] md:w-[25em] text-center mb-2 rounded bg-[#F77E21] px-6 py-4 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                SMS
                </Link>
            </main>
        </div>
        </>
    )
}
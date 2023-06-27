import React from 'react';
import { Link } from 'react-router-dom';
import sidePict from '../../image/login_page.png';
import logowhite from '../../image/logo tring white.png';

function LoginPage() {
  return (
    <>
    <div className="min-h-screen py-20 font-Montserrat" style={{backgroundImage: 'linear-gradient(160deg, #FFFFFF, #f5aa75'}}>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse xl:h-[34em] content-center lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-repeat-space" style={{backgroundImage: `url(${sidePict})`}}>
            <img src={logowhite} className="w-64 ml-[-1em]" alt="img"/>
            <div>
              <p className="text-white font-bold text-[1.5em]">Belum Punya Akun?</p>
            </div>
            <Link to="/registerpagecatering" className="bg-white mt-10 mb-6 px-6 py-2 rounded-lg text-[#F77E21] font-semibold transition-all hover:bg-[#e4e1e1]">
              <button type="button">Buat Akun Baru</button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 py-8 px-6 md:py-16 md:px-12 lg:py-16 lg:px-12 flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl lg:text-3xl mb-10 text-center text-[#F77E21] font-extrabold">Login Akun Catering</h2>
            <form action="#">
              <div>
                  <label htmlFor="username" className="block mb-3 text-sm font-bold text-[#F77E21]">Username</label>
                  <input type="username" name="username" id="username" className=" mb-5 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400" placeholder="Enter Username" required=""/>
              </div>
              <div>
                  <label htmlFor="password" className="block mb-3 text-sm font-bold text-[#F77E21]">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="mb-4 bg-white border border-[#F77E21] text-black sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-400" required=""/>
              </div>
              <div className="flex items-center justify-between">
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"/>
                      </div>
                      <div className="ml-3 text-xs md:text-sm lg:text-sm">
                        <label htmlFor="remember" className="text-[#F77E21] font-semibold">Remember me</label>
                      </div>
                  </div>
                  <Link to="/resetpasswordcatering" className="text-xs text-right md:text-sm lg:text-sm font-semibold text-[#F77E21] hover:underline">
                    Lupa Password?
                  </Link>
              </div>
              <div className="mt-10 flex flex-col gap-6 items-center">
                <Link to="/profilecatering">
                  <button className="w-20 bg-[#F77E21] py-2 font-semibold rounded-lg text-center text-white transition-all hover:font-bold" type="button">Login</button>
                </Link>
                <Link to="/" className='text-[#F77E21] text-sm font-semibold hover:font-bold'>
                  Kembali ke halaman awal 
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage;

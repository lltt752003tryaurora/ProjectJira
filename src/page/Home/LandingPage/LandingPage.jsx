import React from 'react'
import CircleIcon from '../../../asset/icons/CircleIcon'
import Logo from '../../../components/Header/Logo'
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <div className={"bg-[url('/src/asset/img/landing.png')] bg-cover dark:bg-[url('/src/asset/img/landing_dark.png')] h-full bg-opacity-80 dark:bg-opacity-60"}>
        <div className="h-full flex flex-col">
          <div className="w-full py-6 flex flex-wrap justify-between items-center mx-auto px-10 select-none">
            <div className="">
              <Logo />
            </div>
            <div>
              <div className="text-gray-600 dark:text-gray-400 inline-block pr-6">
                Already have an account? 
              </div>
              <Link
                to={"/sign-in"}
                className="bg-slate-700 dark:bg-sky-500 text-white px-5 py-3 rounded-lg font-semibold no-underline"
              >
                Log in
              </Link>
            </div>
          </div>

          <div className='flex flex-1'>
            <div className='flex w-full'>
              <div className='flex flex-col flex-1 justify-center items-center'>
                <div className=" text-[5rem] lg:text-[6rem] leading-none font-bold bg-gradient-to-r inline-block from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Jira TryAurora
                </div>
                <div className='text-gray-600 dark:text-gray-400 max-w-screen-md py-4 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu purus arcu. Suspendisse dictum, mi a aliquet porta, mi justo scelerisque arcu, at molestie odio enim in tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
                </div>
                <div className='flex flex-col items-center'>
                  <Link
                    to={"/sign-up"}
                    className="bg-slate-700 dark:bg-sky-500 text-white px-5 py-3 rounded-lg font-semibold no-underline select-none"
                  >
                    Getting Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default LandingPage
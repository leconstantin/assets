import React from "react"
import './App.css'
import people from "./data/people"
import Testimonial from "./components/testimonial"

export default function App() {
    return (
      <>
        <div className="relative  isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-950 backs">
          <div className="px-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl text-center">
              <h2 className="text-balance text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white">
                Start using our app to build new habits - and cange your life.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg  leading-8 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit praesentium laboriosam atque earum vel vero nobis illo laudantium sunt. At vitae id sapiente. Veritatis.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href=""
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Get started
                </a>
                <a href=""
                className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">---</span>
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 test">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-indigo-600 font-semibold text-lg leading-6 tracking-tight">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We have worked with thousands of amazing people
            </p>            
          </div>

          <div className="mx-auto mt-16 grid max-w-md grid-flow-dense grid-cols-1 grid-rows-[masonry] gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:max-w-2xl sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4 ">
            {people.map(person => (
              <div key={person.id} className="first:sm:col-span-2 first:xl:col-start-2">
                <Testimonial {...person}/>

              </div>
            ))}
          </div>
        </div> 

        <div className="space-y-6 bg-white px-6 py-20">
          <div className="mx-auto max-w-xs">
            <input 
            type="text"
            placeholder="orgaization@gmail.com"
            className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500" />
          </div>
          <div className="mx-auto max-w-xs">
            <input 
            type="text"
            placeholder="orgaization@gmail.com"
            className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500" />
          </div>
          <div className="max-w-xl">
            <h1 className="text-lg/6 font-semibold">
              Playback preferences
            </h1>
            <fieldset>
              <legend className="text-sm/6 font-semibold">
                Default embed options
              </legend>
              <div className="mt-3 space-y-1 rounded-2xl bg-slate-300 px-6 py-4 accent-lime-400">
                <label htmlFor="" className="flex items-center gap-x-3">
                  <input type="checkbox" defaultChecked/>
                  Show player controls
                </label>
                <label htmlFor="" className="flex items-center gap-x-3">
                  <input type="checkbox"/>
                  Boy
                </label>
                <label htmlFor="" className="flex items-center gap-x-3">
                  <input type="checkbox"/>
                  Girl
                </label>

              </div>
            </fieldset>
          </div>

          {/* <div>
            <h1 className="text-lg/6 font-semibold">
              Application Forms
            </h1>
            <div className="mt-12 flex items-center justify-between">
              <div className="w-1/2">
                <label htmlFor="name" className="text-md/6 font-semibold">
                  Name
                </label>
                <p className=" mt-1 max-w-80 text-lg leading-6 text-gray-600 hidden md:flex">
                  Enter the first name and last name in the input given aside
                </p>
              </div>
              <div className="w-1/3">
                <input 
                type="text"
                placeholder="orgaization@gmail.com"
                className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-5 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500" />
              </div>
            </div>
          </div> */}



        </div> 
      </>

    )
}
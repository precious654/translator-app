import React from 'react'
import { Tabs } from "flowbite-react";
import sound from "../assets/sound_max_fill.svg"
import copy from "../assets/Copy.svg"
import sort from "../assets/Sort_alfa.svg";

function Card() {
  return (
    <div className='border border-[#4D5463] rounded-lg bg-[#202530] p-6'> 

    <Tabs aria-label="Default tabs" variant="default">
      <Tabs.Item active title="Profile">
        This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
      <Tabs.Item title="Dashboard">
        This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>

    <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
            <img src={sound} alt="sound-logo" className='border-2 p-2 border-[#4C5563] rounded-lg cursor-pointer'/>
            <img src={copy} alt="copy-logo" className='border-2 p-2 border-[#4C5563] rounded-lg cursor-pointer'/>
        </div>
        <div className='relative'>
            <img src={sort} alt="sort" className='absolute top-2 left-2'/>
            <button className='px-8 py-2 bg-[#3763E5] rounded-lg border'>Translate</button>
        </div>
    </div>
    </div>
  )
}

export default Card
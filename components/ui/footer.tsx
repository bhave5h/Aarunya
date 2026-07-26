import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="sticky z-0 bottom-0 left-0 w-full h-80 bg-neutral-900 flex justify-center items-center text-white">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-amber-200">
        <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl font-sans">
          <ul>
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Experiences</li>
            <li className="hover:underline cursor-pointer">Gallery</li>
          </ul>
          <ul>
            <li className="hover:underline cursor-pointer">Instagram</li>
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>
        <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] text-amber-300/10 font-bold tracking-widest uppercase select-none pointer-events-none">
          Aarunya
        </h2>
      </div>
    </footer>
  )
}

export default Footer

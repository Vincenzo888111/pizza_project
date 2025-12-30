import React from 'react'

function About3() {
  return (
    <div className=" w-full py-16 px-6">
        <h1 className='text-xl font-mono font-bold text-center text-red-500 '>OUR JOURNEY</h1>
        <h1 className='text-4xl text-center font-bold'>Milestones & Achievements</h1>
        <div className="max-w-3xl mx-auto px-6 py-12">
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* <!-- Left column --> */}
    <div className="space-y-10 ">
      <div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span className="font-bold text-base">1990</span>
        </div>
        <p className="pl-5 text-gray-700">Opened our first location in Naples with just 4 tables and a dream</p>
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span className="font-bold text-base">1998</span>
        </div>
        <p className="pl-5 text-gray-700">Won "Best Pizza in Italy" award, marking our national recognition</p>
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span className="font-bold text-base">2005</span>
        </div>
        <p className="pl-5 text-gray-700">Expanded internationally with our first location in New York City</p>
      </div>
    </div>

    {/* <!-- Right column --> */}
    <div className="space-y-10">
      <div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span className="font-bold text-base">2012</span>
        </div>
        <p className ="pl-5 text-gray-700">Launched our global franchise program, sharing our pizza worldwide</p>
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span className="font-bold text-base">2018</span>
        </div>
        <p className="pl-5 text-gray-700">Received the "World’s Best Pizza Chain" award at International Food Expo</p>
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span className="font-bold text-base">2023</span>
        </div>
        <p className="pl-5 text-gray-700">Served our 10 millionth customer, a milestone in our global journey</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About3
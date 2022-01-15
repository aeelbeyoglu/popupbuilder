import PopupsGrid from "./Popups/PopupsGrid"

  
  
  export default function Example({allPopups}) {
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Really Good User Onboardings</h2>
  
            <div className="mt-0">
             <PopupsGrid popups={allPopups}/>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
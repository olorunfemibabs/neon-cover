import TopBar from "@/components/TopBar";
import HomeFeatures from "@/features/Home/HomeFeatures";


export default function Dashboard() {
  return (
    <main className='max-h-screen h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]'>
        <TopBar title="HOME"/>
        <div className="w-[96%] mx-auto">

        <HomeFeatures/>
        </div>
    </main>
  )
}
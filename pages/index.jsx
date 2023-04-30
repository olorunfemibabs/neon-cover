import TopBar from "@/components/TopBar";
import HomeFeatures from "@/features/Home/HomeFeatures";


export default function Home() {
  return (
    <main className='relative font-semibold'>
<TopBar title="HOME"/>
<div className="w-[96%] mx-auto">

<HomeFeatures/>
</div>
    </main>
  )
}

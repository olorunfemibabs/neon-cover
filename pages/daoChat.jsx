import TopBar from '@/components/TopBar'
import HomeFeatures from '@/features/Home/HomeFeatures'
import { Client } from '@xmtp/xmtp-js'
import { useAccount } from 'wagmi'

export default async function DaoChat() {
//     const {address} = useAccount();
//     console.log(address);
//     // Create the client with a `Signer` from your application
// const xmtp = await Client.create(address);
// const conversations = xmtp.conversations
// const allConversations = await conversations.list()
// // Say gm to everyone you've been chatting with
// for (const conversation of allConversations) {
//   console.log(`Saying GM to ${conversation.peerAddress}`)
//   await conversation.send('gm')
// }
    return (
      <main className='max-h-screen h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]'>
          <TopBar title="Dashboard"/>
          <div className="w-[96%] mx-auto">
  
          <HomeFeatures/> 
          </div>
      </main>
    )
  }



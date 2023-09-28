export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-20 w- mt-0.5 self-center text-center border border-1 border-black">Top Bar</div>
      <div className="w-full h-40 w self-center text-center mt-16 border border-1 border-black ">Banner</div>
      <div className="h-10 w self-center text-center border border-1 border-black ">Create a Post</div>
      <div className="columns-3 mt-2">
        <div className=" text-center border border-1 border-black">Your Post</div>
        <div className=" text-center border border-1 border-black">Community Post</div>
        <div className=" h-full text-center border border-1 border-black">Community info and Rules</div>
      </div>      
    </main>
  )
}
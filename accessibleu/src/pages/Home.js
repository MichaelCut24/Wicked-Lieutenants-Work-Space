// HOME PAGE

// NOTE: Everything in the className part is tailwind CSS, yall can delete everything in it once
// Home.css is created. Go to https://v2.tailwindcss.com/docs/ to lookup the syntax and
// convert tailwind into Home.css if Danny has not done it (he will eventually). Or yall can just delete everything
// and start over.

import "./Home.css"

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-40 w self-center text-center mt-16 border border-1 border-black ">Banner</div>
      <div className="h-10 w self-center text-center border border-1 border-black ">Create a Post</div>
      <div className="columns-3 mt-2">
        <div className=" text-center border border-1 border-black">Your Post</div>
        <div className=" text-center border border-1 border-black">Community Post</div>
        <div className=" h-full text-center border border-1 border-black">Community info and Rules</div>
      </div>      
    </main>
  );
}

export default Home;
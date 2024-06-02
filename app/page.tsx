import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
     <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage : "url(/main-bg.webp"}}>
    <div className="pl-20 md:pl-40 pb-56 md:pb-56 flex flex-col gap-5 z-[10] max-[750px]">
    <h1 className="text-[50px] text-white font-semibold">
    Make Anything Possible
    <span className="tetx-transparent bg-clip-text bg-gradiant-to-r from-purple-500 to-cyan-500">
    Web Development
    </span>
    </h1>
    <p className="tetx-gray-200 hidden md:block ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum earum aperiam, possimus culpa repudiandae deleniti molestias exercitationem, quibusdam inventore error, distinctio sequi ex quam alias quod aliquid iste ullam.
    </p>
    <div className="flex-col md:flex-row hidden md:flex ">

      <Link href="/my-skills" className="rounded-[20p x] bg-blue-500 group hover:to-blue-400 px-5 py-3 tetx-lg text-white max-w-[200px]">
     Learn More
      </Link>
      <Link href="/my-skills" className="rounded-[20px] bg-blue-500 group hover:to-blue-400 px-5 py-3 tetx-lg text-white max-w-[200px]">
     <div className="absolute rounded-[200px] z-[1] bg-white inset-0 opacity-0 group hover:opacity-20 "/>
     My Projects
      </Link>
      <Link href="/my-skills" className="rounded-[20px] bg-blue-500 group hover:to-blue-400 px-5 py-3 tetx-lg text-white max-w-[200px]">
     <div className="absolute rounded-[200px] z-[1] bg-white inset-0 opacity-0 group hover:opacity-20 "/>
     Contact Me
      </Link>
    </div>
          
    
     <div className=" absolute buttom-10 right-5  z-[20] flex-col md:hidden ">

<Link href="/my-skills" className="rounded-[20px] bg-blue-500 group hover:to-blue-400 px-5 py-3 tetx-lg text-white max-w-[200px]">
Learn More
</Link>
<Link href="/my-skills" className="rounded-[20px] bg-blue-500 group hover:to-blue-400 px-5 py-3 tetx-lg text-white max-w-[200px]">

My Projects
</Link>
<Link href="/my-skills" className="rounded-[20px] bg-blue-500 group hover:to-blue-400 px-5 py-3 tetx-lg text-white max-w-[200px]">

Contact Me
</Link>
</div>

<div className="absolute bottom-0 right-0 z-[10]">
  <Image 
  src="/horse-png"
  alt="horse"
  height={300}
  width={300}
  className="absolute right-ss top-40"
  />

  <Image src="/cliff.webp "alt="cliff" width={480} height={480} />
    <div >

    </div>

      
    </main>
  );
} 


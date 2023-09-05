import Image from "next/image";
import Button from "../components/Button";
import img from "../public/images/hero.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" px-3 bg-neutral-0  mb-0 md:mb-[11rem] lg:mb-0 py-4 sm:py-8 lg:py-28">
      <div className="grid lg:grid-cols-2 justify-items-center  h-screen gap-5">
        <div className="relative h-80 w-[24rem] md:w-[30rem] overflow-hidden object-cover rounded-lg  bg-gray-100 ">
          <Image src={img} fill priority={true} alt="logo" />
        </div>
        <div className="">
          <h1 className="text-6xl sm:text-7xl font-bold">Hi I'm Ozan</h1>
          <h3 className="text-4xl my-3">
            I am a web developer and software engineer
          </h3>
          <p className="text-gray-800 mb-8"></p>
          <div className="-mt-[2rem] -ml-[rem]">
            <Link href="/contact" scroll={false}>
              <Button className="bg-blue-500 hover:bg-blue-400 text-white px-6  mt-4 md:mt-8">
                Contact Me!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

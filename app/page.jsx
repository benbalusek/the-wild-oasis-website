import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

function Page() {
  return (
    <main className="sm:mt-2 md:mt-4 lg:mt-6 xl-mt-8 2xl:mt-12">
      <Image
        src={bg}
        fill
        placeholder="blur"
        unoptimized
        priority
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-1 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-5 md:px-8 md:py-6 text-primary-800 text-base md:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}

export default Page;

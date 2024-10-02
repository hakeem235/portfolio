import Image from "next/image";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";

export default async function Home() {
  const getProfile = async () => {
    const res = await fetch("http://localhost:3000/api/", {
      cache: "no-store",
      next: { revalidate: 10 },
    });
    return res.json();
  };

  const data = await getProfile();
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex flex-col gap-4 p-10">
        <div className="flex gap-2">
          <div className="flex justify-center items-center">
            {data.profile.map((profile, id) => (
              <div key={id}>
                <Image
                  src={profile.image}
                  width={1600}
                  height={1600}
                  style={{ width: "100%", height: "100%" }}
                  alt="profile"
                  className="rounded hidden lg:flex"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <About />
            <hr className="h-1" />
            <div className="flex flex-col justify-start gap-3 ">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

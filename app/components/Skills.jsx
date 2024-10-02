import Image from "next/image";


async function Skills() {
    const getProfile = async () => {
        const res = await fetch("http://localhost:3000/api/", {
          cache: "no-store",
          next: { revalidate: 10 },
        });
        return res.json();
      };

      const data = await getProfile();
  return (
    <div className="grid grid-cols-3 gap-3  md:grid md:grid-cols-4 md:gap-2 lg:flex lg:justify-start lg:gap-3 mb-3">
    {
      data.skills.map((skill, id) => (
        <div key={id}>
          <Image src={skill.image} width={80} height={90} style={{width:"80px",height:"80px"}} alt={skill.name}/>
        </div>
      ))
    }
  </div>
  )
}

export default Skills
import React from 'react'
import Header from '../components/Header'
const getImages = async () => {
  const res = await fetch("http://localhost:3000/api/", {
    cache: "no-store",
    next: { revalidate: 10 },
  });
  return res.json();
};

const data = await getImages();
function page() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
      <div className="flex justify-center mt-3">
        <p className="text-6xl font-bold text-blue-600">DATA ANALYTICS</p>
      </div>
      <div className="flex flex-1 justify-center items-center">
        {
          data.images.map((image, id) => (
            <div key={id}>
              <img src={image.url} alt="profile"/>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default page
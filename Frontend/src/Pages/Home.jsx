import React from 'react'
import img from "../assets/banner-image.png"

const Home = () => {
  const Skills = {
    skill1: ['01', 'UI/UX Designer', 'I made modern UI with attractive user interface'],
    skill2: ['02', 'Illustration', 'I creates multiples illustrations and movable illustration'],
    skill3: ['03', 'Graphics Design', 'I can create animated user interfaces with 3D models']
  }

  const SkillsArray = Object.values(Skills);

  return (
    <div className='  flex flex-col gap-7 h-screen'>
      {/* User Detail */}
      <div className="userDetail flex self-center items-center ">
        <div className="image max-w-[458px]">
          <img src={img} alt="myPhoto" />
        </div>
        <div className="userName">
          <span className='text-2xl font-light'>Developer/Designer</span>
          <h5 className='text-9xl ml-6 font-extrabold'>
            Omkar<br />Yevale
          </h5>
        </div>
      </div>

      {/* Skills Section */}
      <div className="user-skills w-full flex items-start gap-2 self-center px-32 p-5">
        {SkillsArray.map((mySkills) => (
          <div key={mySkills[0]} className=" flex-1 h-32 flex flex-col">
            <span className='text-gray-400 text-base'>{mySkills[0]}</span>
            <h2 className='text-2xl uppercase font-bold '>{mySkills[1]}</h2>
            <p className='text-base text-gray-500 mt-2 '>{mySkills[2]}</p>
          </div>
        ))}
        <button className='bg-black text-white text-2xl h-28 w-44'>View All</button>
      </div>
    </div>
  )
}

export default Home

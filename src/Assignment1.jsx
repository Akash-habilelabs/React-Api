import React from 'react'
import './Assignment1.css'

function Assignment1() {
    const data = [{heading:"ABC",para:"hdcshdjciuds dgcusdch udcdjcdj ukdckhc",button:"Click"},{heading:"ABC",para:"hdcshdjciuds dgcusdch udcdjcdj ukdckhc",button:"Click"},{heading:"ABC",para:"hdcshdjciuds dgcusdch udcdjcdj ukdckhc",button:"Click"}]
  return (
    <div className='mainContainer'>
        <h1>Akash Verma</h1>
        <div className='cardBox'>
                    
            <div className='cardContainer color1'><h1>{data[0].heading}</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo cumque quia dolores, id mollitia voluptates. Sequi, enim harum. Doloremque, ipsa corporis. Praesentium laborum optio sequi necessitatibus suscipit nemo at eum?</p><button className='btnProperty'>Click</button></div>
            <div className='cardContainer color2'><h1>{data[0].heading}</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consectetur fugiat. Ullam suscipit nulla in alias eaque dolore consequatur ea quibusdam, amet distinctio provident ipsa repudiandae dicta pariatur, omnis fugiat.</p><button className='btnProperty'>Click</button></div>
            <div className='cardContainer color3'><h1>{data[0].heading}</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequuntur amet tempore voluptatum! Modi eaque sapiente vel. Dolores libero possimus ut, eaque architecto exercitationem quam natus quisquam atque id ex.</p><button className='btnProperty'>Click</button></div>
        </div>
    </div>
  )
}

export default Assignment1
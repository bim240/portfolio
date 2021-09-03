import React from 'react';
// import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { FaHtml5, FaNode, FaReact, FaBootstrap, FaSass } from 'react-icons/fa';
import { DiMongodb, DiJavascript1, DiReact } from 'react-icons/di';
import { GrGraphQl } from 'react-icons/gr';
import { AiOutlineAntDesign } from 'react-icons/ai';

const Skills = () => {
  let skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <DiReact />, name: 'React Native' },
    { icon: <FaNode />, name: 'Node/Express' },
    { icon: <GrGraphQl />, name: 'GraphQl' },
    { icon: <DiMongodb />, name: 'MongoDB' },
    { icon: <DiJavascript1 />, name: 'JavaScript' },
    { icon: <FaHtml5 />, name: 'HTML & CSS' },
    { icon: <FaSass />, name: 'Sass' },
    { icon: <AiOutlineAntDesign />, name: 'Ant Design' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
  ];
  return (
    <>
      {' '}
      {/* <Jumbotron> */}
      <div className='container' id='skills'>
        {/* <Link> */}
        <h1 className='hide'> bimlendu portfolio skills section </h1>
        <h2 className=' font-weight-bold'>Skills</h2>
        {/* </Link> */}
        <p className='font-weight-bold'>
          The future belongs to those who Learn more skills and combine
          <br /> them in creative ways.
        </p>
        <div className='row mt-5'>
          {/* html css */}
          {skills.map((skill) => {
            return (
              <div className='col-md-3 col-sm-6 mb-5' key={uuid()}>
                <div
                  className='mx-auto'
                  style={{
                    textAlign: 'center',
                    fontSize: '4rem',
                  }}>
                  {skill.icon}
                </div>
                <h5 className='font-weight-bold text-center mt-3'>{skill.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
      {/* </Jumbotron> */}
    </>
  );
};

export default Skills;

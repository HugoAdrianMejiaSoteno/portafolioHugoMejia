import SkillsCard from "./SkillsCard";
import {FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitSquare,FaGithub, FaNpm, FaYarn, FaLinux, FaStackOverflow, FaJava, FaDocker} from 'react-icons/fa';
import { SiJavascript } from "react-icons/si";
import { AiOutlineConsoleSql, AiFillWindows } from "react-icons/ai";
import { SiMysql, SiWebpack, SiMicrosoftoffice } from "react-icons/si";
import { BsMicrosoftTeams} from "react-icons/bs";
import { RiEnglishInput} from "react-icons/ri";
import { DiPostgresql, DiScrum } from "react-icons/di";
import Express from "../../imagenes/Express.jpg"
import chatGPT from "../../imagenes/chatGPT.jpeg"
import { motion } from 'framer-motion';

import "./Skills.css";
const Skills = ()=>{
    return (
        <motion.main className="main-skills" initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.1}}}>
            <h1 className="skills-title"><span className="skills-s">S</span><span className="skills-ki">ki</span><span className="skills-l">ll</span><span className="skills-s-mini">s</span></h1>
            <div className="skills-container">
                <SkillsCard titulo="Html5" icono={<FaHtml5 className="icon"/>}></SkillsCard>
                <SkillsCard titulo="Css" icono={<FaCss3Alt className="icon"/>}></SkillsCard>
                <SkillsCard titulo="JavaScript" icono={<SiJavascript className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="ReactJs" icono={<FaReact className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="NodeJs" icono={<FaNodeJs className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Express" icono={<img src={Express} alt="Express logo" className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Webpack" icono={<SiWebpack className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="SQL" icono={<AiOutlineConsoleSql className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Mysql" icono={<SiMysql className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Postgresql" icono={<DiPostgresql className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Git" icono={<FaGitSquare className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="GitHub" icono={<FaGithub className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="NPM" icono={<FaNpm className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Yarn" icono={<FaYarn className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Linux" icono={<FaLinux className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Windows" icono={<AiFillWindows className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Chatgpt" icono={<img src={chatGPT} className="icon" alt="ChatGpt logo"/>} ></SkillsCard>
                <SkillsCard titulo="StackOverFlow" icono={<FaStackOverflow className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Java" icono={<FaJava className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Docker" icono={<FaDocker className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Scrum" icono={<DiScrum className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Office" icono={<SiMicrosoftoffice className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Trabajo en equipo" icono={<BsMicrosoftTeams className="icon"/>} ></SkillsCard>
                <SkillsCard titulo="Ingles" icono={<RiEnglishInput className="icon"/>} ></SkillsCard>

            </div>
        </motion.main>
    )
}

export default Skills;

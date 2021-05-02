import React, { useState } from 'react'
import Atom from './atom.svg'
import Cert from './cert.svg'
import Idea from './idea.svg'
import IconText from './IconText.js'

const IconsPanel = (props) => {

    const [hideInventors, setHideInventors,] = useState(true);
    const [hideMaterials, setHideMaterials,] = useState(true);
    const [hideAgents, setHideAgents,] = useState(true);

    const hideAll = () => {
        setTimeout(()=>{
            setHideAgents(true);
            setHideMaterials(true);
            setHideInventors(true);
        }, 35000);
    }

    const inventorHandler = (e) => {
        setHideInventors(
            (prevHideInventors) => {
                setHideInventors(!prevHideInventors);
            }
        );
        setHideMaterials(true);
        setHideAgents(true);
        hideAll();
    }

    const materialHandler = (e) => {
        setHideMaterials(
            (prevHideMaterials) => {
                setHideMaterials(!prevHideMaterials);
            }
        );
        setHideInventors(true);
        setHideAgents(true);
        hideAll();
    }

    const agentsHandler = (e) => {
        setHideAgents(
            (prevHideAgents) => {
                setHideAgents(!prevHideAgents);
            }
        );
        setHideMaterials(true);
        setHideInventors(true);
        hideAll();
    }

    return (
        <div className="news-media">
            <div 
                onClick={inventorHandler}
                className="colorbox cboxElement news-media-item"
            >
                <IconText key="a1" items={props.Inventors} title="Inventors" hidden={hideInventors}/>
                <img className="img-responsive" src={Idea} alt=""/>
            </div>
            <div
                onClick={materialHandler} 
                className="colorbox cboxElement news-media-item"
            >
                <img className="img-responsive" src={Atom} alt=""/>
                <IconText key="a2" items={props.Materials} title="Materials" hidden={hideMaterials}/>
            </div>
            <div 
                onClick={agentsHandler}
                className="colorbox cboxElement news-media-item"
            >
                <img className="img-responsive" src={Cert} alt=""/>
                <IconText key="a3" items={props.Agents} title="Agents" hidden={hideAgents}/>
            </div>
        </div>
    )
}

export default IconsPanel

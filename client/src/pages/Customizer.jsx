/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import { AiPicker, ColorPicker, CustomButton, FilePicker, Tab} from "../components";
import config from "../config/config";
import state from "../store";
import { download, logoShirt, stylishShirt } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";


function Customizer() {
  const snap = useSnapshot(state);
  const [file, setFile] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  }) 

  //show Tab Content based on the ActiveTab
  const generateTabContent = () => {
     switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker/>
      case "aipicker":
        return <AiPicker
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />
      case "filepicker":
        return <FilePicker
          file= {file}
          setFile = {setFile}
          readFile= {readFile}
        />
      default: 
        return null;
     }
  }

  const handleSubmit = async (type) =>{
    if(!prompt) 
      return alert("Please Enter a Prompt!!");
    try {
      //call Backend to Generate an Ai Image

    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    if(!activeFilterTab[decalType.filterTab]){
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    //to Set the State
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
          state.isLogoTexture = true;
          state.isFullTexture = false;
    }
    //after setting the State,  update actiFilterTab
    setActiveFilterTab((prevState)=>{
      return {
        ...prevState,
        [tabName] : !prevState[tabName],
      }
    })
  }

  const readFile = (type) => {
      reader(file).then((result)=>{
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }
  return (
    <AnimatePresence>
     {!snap.intro && (
      <>
       <motion.div 
        key="custom"
        className="absolute top-0 left-0 z-20"
        {...slideAnimation('left')} 
       >
        <div className="flex items-center min-h-screen">
         <div className="editortabs-container  tabs">
          {EditorTabs.map((tab)=> (
            <Tab
              key={tab.name}
              tab={tab}
              handleClick={()=> setActiveEditorTab(tab.name)} 
            />
          ))}
          {generateTabContent()}
         </div>
        </div>
       </motion.div>
       <motion.div
        className="absolute z-20 right-6"
        {...fadeAnimation}
       >
        <CustomButton
         type="filled"
         title="Go Back to HomePage"
         handleClick={()=> state.intro=true}
         customStyles="w-fit px-4 py-2.5 font-bold text-sm"
        />
       </motion.div>
       <motion.div
        className="filtertabs-container"
        {...slideAnimation('up')}
       >
         {FilterTabs.map((tab)=> (
          <Tab
           key={tab.name}
           tab={tab}
           isFilterTab
           isActiveTab={activeFilterTab[tab.name]}
           handleClick={()=>handleActiveFilterTab(tab.name)}
          />
         ))}
       </motion.div>
      </>
     )}
    </AnimatePresence>
  )
}

export default Customizer
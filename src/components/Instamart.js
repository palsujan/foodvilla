import React from 'react';
import { useState } from 'react';

const Section = ({title, description, isVisible, setIsVisible}) => {
  // const [isVisible, setIsVisible] = useState(false); 
  return(
    <div>
      <h3>{title}</h3>
      {!isVisible? (
      <>
      <button 
          onClick={() => {setIsVisible(true)}}>
          Show 
         </button>
         {/* <p>{description}</p> */}
         </>
      ):(
          <button 
          onClick={() => {setIsVisible(false)}}>
          Hide 
         </button> 
      )}  
      {isVisible && <p>{description}</p>}
    </div>
  )
}

const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState({
    // showAbout: false,
    // showTeam: false,
    // showCareers: false,

  })
  return (
    <div>
        <h1>Instamart</h1>
        <Section 
        title={"About Instamart"}
        description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible = {isVisibleSection === "about"}
        setIsVisible={()=> setIsVisibleSection("about")}
        />
         <Section 
        title={"Team of Instamart"}
        description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible = {isVisibleSection === "team"}
        setIsVisible={()=> setIsVisibleSection("team")}
        />
        <Section 
        title={"Careers"}
        description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible = {isVisibleSection === "career"}
        setIsVisible={()=> setIsVisibleSection("career")}
        />
    </div>
  )
}

export default Instamart
function Hero(){
    const Emoji = ({ imageSrc, imageAlt, className }) => {
        return <img src={imageSrc} alt={imageAlt} className={className} />;
      };
    

 return(
    < div className="herosection">
    
    <div className="Hero">
         <div className="box">
         <img src="./assets/Hero.png" alt="Hero" />
     </div>
         </div>

    {/* Emoji section */}
    <div className="emoji">
        {/* Using the Emoji component and passing imageSrc and className as props */}
        <Emoji
          imageSrc="./assets/Emoji.png"
          imageAlt="Emoji 1"
          className="emoji-image-emoji-1"
        />
        <Emoji
          imageSrc="./assets/Bubble_Speech_1_.png"
          imageAlt="Bubble Speech 1"
          className="emoji-image-emoji-2"
        />
        <Emoji
          imageSrc="./assets/Emoji2.png"
          imageAlt="Emoji 2"
          className="emoji-image-emoji-3"
        />
        <Emoji
          imageSrc="./assets/Bubble_Speech.png"
          imageAlt="Bubble Speech 2"
          className="emoji-image-emoji-4"
        />
        <Emoji
          imageSrc="./assets/Vector.png"
          imageAlt="Vector Image"
          className="emoji-image-emoji-5"
        />

       <Emoji
          imageSrc="./assets/Group 4.png"
          imageAlt="Vector Image"
          className="emoji-image-emoji-6"
        />

       <Emoji
          imageSrc="./assets/Group 3.png"
          imageAlt="Vector Image"
          className="emoji-image-emoji-7"
        />

        <Emoji
          imageSrc="./assets/Group 1.png"
          imageAlt="Vector Image"
          className="emoji-image-emoji-8"
        />

        <Emoji
          imageSrc="./assets/Group 2.png"
          imageAlt="Vector Image"
          className="emoji-image-emoji-9"
        />
      </div>
      
         </div>
         
      
 )
}

export default Hero;
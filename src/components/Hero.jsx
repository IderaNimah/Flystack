function Hero(){
    const Emoji = ({ imageSrc, imageAlt, className }) => {
        return <img src={imageSrc} alt={imageAlt} className={className} />;
      };
    

 return(
    <>
    <div className="Hero">
         <div className="box">
         </div>
         <img src="./src/assets/Hero.png" alt="Hero" />
     </div>

    {/* Emoji section */}
    <div className="emoji">
        {/* Use the Emoji component and pass imageSrc and className as props */}
        <Emoji
          imageSrc="./src/assets/Emoji.png"
          imageAlt="Emoji 1"
          className="emoji-image-emoji-1"
        />
        <Emoji
          imageSrc="./src/assets/Bubble_Speech_1_.png"
          imageAlt="Bubble Speech 1"
          className="emoji-image-emoji-2"
        />
        <Emoji
          imageSrc="./src/assets/Emoji2.png"
          imageAlt="Emoji 2"
          className="emoji-image-emoji-3"
        />
        <Emoji
          imageSrc="./src/assets/Bubble_Speech.png"
          imageAlt="Bubble Speech 2"
          className="emoji-image-emoji-4"
        />
        <Emoji
          imageSrc="./src/assets/Vector.png"
          imageAlt="Vector Image"
          className="emoji-image-emoji-5"
        />
      </div>
         </>
 )
}

export default Hero;
import React, { useState } from 'react';

const StoryEngine = () => {
  const [story, setStory] = useState("Bienvenue dans la forêt mystérieuse...");
  const [playerChoice, setPlayerChoice] = useState("");

  const generateStory = async () => {
    // À remplacer par ton appel API IA plus tard !
    const fakeAIResponse = "L'IA te répondra ici. Pour l'instant, c'est du faux texte.";
    setStory(fakeAIResponse);
  };

  return (
    <div style={{ margin: '20px' }}>
      <p>{story}</p>
      <input 
        type="text" 
        value={playerChoice} 
        onChange={(e) => setPlayerChoice(e.target.value)} 
        placeholder="Que veux-tu faire ?"
      />
      <button onClick={generateStory}>Soumettre</button>
    </div>
  );
};

export default StoryEngine;
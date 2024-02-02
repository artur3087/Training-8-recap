
// !!! I create all the functionality for a wesite below !!! //

export default function Home () { // START of default function Home () //


  // Below I show a way of making array which will HARDCODE list of whatever I need - it will be a list of recaps //

  const recaps = [   // START of array recaps //
    { name: "Rule 1:", importance: "BE RESPECTFUL", time: "ALWAYS! ... when you make a posts.", vital: true},
    { name: "Rule 2:", importance: "NO POLITICS", time: "YOU WILL BE BANNED FROM PAGE AFTER COMMENTING OR POSTING ABOUT POLITICS", vital: false},
    {name: "Rule 3:", importance: "NO TROLLING", time: "EVERY TROLLING done by dudes will be moderated and author banned", vital: true},
  ]; // END of array recaps //



return ( // START for returning inside Home () //


  <div>
    <br></br>
    <h2>HOME PAGE:</h2>
    <p>We are dudes. This website is to post a random posts... but you need to respect our 3 rules, dude:</p>
    <h3>Our rules:</h3>
    {recaps.map((recap) => {
      return <div className="array" key={recap.name}>
        <h4>{recap.name} {recap.importance} - {recap.time}</h4>
        <p>{recap.vital ? "!!!!!!!!" : ":)"}</p>  {/* Here I used tenary operator which will show us which recap is must to learn in condition saying that value of vital is true */}
        
      </div>
    })}
    
  </div>


) // END of returning inside Home () //


}; // END of default function Home () //



// Database should look like this: //

// ("Duderecap1", "importance: high",  "time: long",  true)
// ("Duderecap2", "importance: low",  "time: too long",  false)
// ("Duderecap3", "importance: low", "time: infinity of boredom", false)


// !!! I create all the functionality for a wesite below !!! //

export default function Home () { // START of default function Home () //


  // Below I show a way of making array which will HARDCODE list of whatever I need - it will be a list of recaps //

  const recaps = [   // START of array recaps //
    { name: "recap1", importance: "importance: high", time: "time: long", vital: true},
    { name: "recap2", importance: "importance: low", time: "time: too long", vital: false},
    {name: "recap3", importance: "importance: vital", time: "time: far too long, bro!", vital: true},
  ]; // END of array recaps //



return ( // START for returning inside Home () //


  <div>
    <h2>HOME PAGE:</h2>
    <h3>Main:</h3>
    {recaps.map((recap) => {
      return <div className="array" key={recap.name}>
        <h4>{recap.name}, {recap.importance}, {recap.time}</h4>
        <p>{recap.vital ? "Must learn it!" : "You can skip that"}</p>  {/* Here I used tenary operator which will show us which recap is must to learn in condition saying that value of vital is true */}
        
      </div>
    })}
    
  </div>


) // END of returning inside Home () //


}; // END of default function Home () //



// Database should look like this: //

// ("Duderecap1", "importance: high",  "time: long",  true)
// ("Duderecap2", "importance: low",  "time: too long",  false)
// ("Duderecap3", "importance: low", "time: infinity of boredom", false)

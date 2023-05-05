import feed from "../../data/feed";
import { useState } from "react";

const Search = () => {

  const [filteredItems, setFilteredItems] = useState(feed);

  const lookFor = (e) => setFilteredItems(feed.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())));

  return (
    <section className="section-feed">

      <form className="container-finder">
        <button className="finder-btnSearch" onClick={e => e.preventDefault()}> <IconMagnifier /></button>

        <input onChange={lookFor} className="input" placeholder="Buscar" type="text" />

        <button onClick={() => setFilteredItems(feed)} className="finder-btnClose" type="reset"> <IconClose /> </button>
      </form>

      <h1 className="section-feed-h1"><span className="highlight-container"><span className="highlight">Abecedario</span></span></h1>
      <main className="feed">
        {filteredItems.map(({ image, name, description } = feed, i) => {
          return (
            <div className="post" key={i}>
              <img src={image} alt="" />
              <main className="post-textContainer">
                <h2 className="post-textContainer-h2">{name}</h2>
                <p>{description}</p>
              </main>
            </div>
          );
        })
        }
      </main>
    </section >
  );
};

const IconMagnifier = () => {
  return (
    <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
      <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};

const IconClose = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
};

export default Search;

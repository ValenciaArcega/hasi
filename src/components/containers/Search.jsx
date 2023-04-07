import feed from "../../data/Feed";

const Search = () => {

  return (
    <section className="section-feed">
      <h1 className="section-feed-h1"><span className="highlight-container"><span className="highlight">Lo básico</span></span></h1>
      <main className="feed">
        {feed.map(({ image, name, description } = feed) => {
          return (
            <div className="post">
              <div className="post-image">{image}</div>
              <main className="post-textContainer">
                <h2 className="post-textContainer-h2">{name}</h2>
                <p>{description}</p>
                <footer>
                  <button>Me gusta</button>
                </footer>
              </main>
            </div>
          );
        })
        }
      </main>
    </section>
  );
};

export default Search;

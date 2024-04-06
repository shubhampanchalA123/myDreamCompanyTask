import React, { useState, useEffect } from "react";
function StoryCard({ story, showDetails }) {
  return (
    <div
      className="card"
      style={{
        // height: "26vh",
        // marginBottom: "8rem",
      }}
    >
      <img
        src={`https://ik.imagekit.io/dev24/${story.Image}`}
        alt={story.Title}
        style={{ width: "100%", height: "250px", borderRadius: "6px" }}
      />
      <h5 style={{ marginTop: "0.5rem", textAlign: "center" }}>
        {story.Title}
      </h5>
      <p>{story.Author}</p>

      <button
        className="viewDetails"
        onClick={() => showDetails(story._id)}
      >
        View Details
      </button>
    </div>
  );
}

function Home() {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  useEffect(() => {
    fetch("https://child.onrender.com/api/sciencefiction")
      .then((response) => response.json())
      .then((data) => setStories(data));
  }, []);

  const showDetails = (id)=> {
    getStoryDetails(id)
;
  };

  const getStoryDetails = async (id)=> {
    let data = await fetch(
      `https://child.onrender.com/api/sciencefiction/${id}`
    );
    let newData = await data.json();
    // console.log(newData);
    setSelectedStory(newData);
  };

  const backToCards = () => {
    setSelectedStory(null);
  };

  return (
<>
    <div>
      {selectedStory ? (
        <div
          style={{
            backgroundImage:
              "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
            width: "50%",
            height: "auto",
            margin: "auto",
            padding: "0.5rem",
            textAlign: "center",
          }}
        >
          <button
            onClick={backToCards}
            style={{
              display: "block",
              marginBottom: "1.5rem",
              borderRadius: "6px",
              border: "none",
              outline: "none",
              padding: "0.5rem 1rem",
            }}
          >
            Back
          </button>
          <img
            src={`https://ik.imagekit.io/dev24/${selectedStory.Image}`}
            alt={selectedStory.Title}
            style={{
              width: "70%",
              height: "40vh",
              borderRadius: "6px",
              marginBottom: "1.25rem",
            }}
          />
          <h2>{selectedStory.Title}</h2>
          <div
            id="tabButtons"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {selectedStory.Wordexplore.length > 0 ? (
              selectedStory.Wordexplore.map((item, index) => (
                <div
                  id="summaryTab"
                  className="tab"
                  style={{
                    width: "40%",
                    height: "auto",
                    padding: "0.2rem",
                    textAlign: "center",
                    borderRadius: "10px",
                  }}
                  key={index}
                >
                  <img
                    style={{
                      width: "80%",
                      height: "25vh",
                      borderRadius: "6px",
                    }}
                    src={`https://ik.imagekit.io/dev24/${item.Storyimage}`}
                    alt=""
                  />
                  <h5 style={{ marginTop: "1rem" }}>{item.Storytitle}</h5>
                  <p>{item.Storyitext}</p>
                </div>
              ))
            ) : (
              <h2>No Contents To Display</h2>
            )}
          </div>
        </div>
      ) : (
        <div
          id="storyCardsContainer"
          style={{
            maxWidth: "100%",
            width: "90%",
            height: "auto",
            margin: "auto",
            padding: "0.3rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundImage:
              "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
          }}
        >
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} showDetails={showDetails} />
          ))}
        </div>
      )}
    </div>



  </>
  );
}

export default Home;
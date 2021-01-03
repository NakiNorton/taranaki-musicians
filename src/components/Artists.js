import React from 'react';


const Artists = () => {
  return (
    <section className="section-artists" id="artists">
      <div className="u-center-text u-margin-top-medium">
        <h2 className="heading-secondary u-margin-bottom-medium">
          Musicians
        </h2>
        <div className="artists">
            <div className="artists__card">Artist 1
              <div className="youtube-player" data-id="386bOA23Aug"></div>
            </div>
            <div className="artists__card">Artist 2</div>
            <div className="artists__card">Artist 3</div>
            <div className="artists__card">Artist 4</div>
            <div className="artists__card">Artist 5</div>
            <div className="artists__card">Artist 6</div>
        </div>
      </div>
    </section>
    
  )
}

export default Artists;
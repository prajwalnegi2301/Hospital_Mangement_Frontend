import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Biography</h3>
          <p>
          ZeeCare Medical Institue is a leading healthcare institution known for providing comprehensive medical services and patient care. Established in 1990, it has grown to become a cornerstone of the local community, offering a wide range of medical specialties and advanced healthcare facilities.
          </p>
        
          <p>Over the years, ZeeCare Medical Institute has undergone significant expansion and modernization. Major milestones include the construction of new buildings, the addition of state-of-the-art medical equipment.</p>
          <p>
          Our mission is to provide compassionate, patient-centered care and to improve the health and well-being of the communities it serves. 
          </p>
          <p>Looking ahead, our aim is to continue the legacy of healthcare excellence by embracing new technologies, and further enhancing the patient experience. </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
import React, { useEffect, useState } from 'react';
import './PhaseTwoGlobal.css';
import './StartAnalysis.css';
import Header from '../Header';
import BackFooter from '../BackFooter';
import { useLocation, useNavigate } from 'react-router-dom';
import camera from '../../assets/camera.png';
import gallery from '../../assets/gallery.png';
import ForwardFooter from '../ForwardFooter';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function StartAnalysis() {
  const { state } = useLocation();
  const name = state?.name || '';
  const location = state?.location || '';

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(',')[1]; // remove data mime prefix
      await sendImageToAPI(base64Image);
    };
    reader.readAsDataURL(file);
  };

  const sendImageToAPI = async (base64Image) => {
    if (!name || !location) {
      alert('Missing name or location. Please go back and enter your info.');
      return;
    }

    setLoading(true);
    try {
      console.log('Sending to API:', { name, location, image: base64Image.slice(0, 30) + '...' });

      const res = await fetch(
        'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            image: base64Image,
            name,
            location,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        navigate('/phasetwo/preparingAnalysis', {
          state: { response: data }, // optional: pass along API response
        });
      } else {
        alert('Image upload failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('There was a problem uploading the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const [selectedDiamond, setSelectedDiamond] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  return (
    <>
      <Header rightButtonText={null} />
      <div className="start-analysis" >
        <h1 data-aos="fade-in">To Start Analysis</h1>

        <div className="diamond-container">
          {/* Left: Camera */}
          <div className="diamond camera" data-aos="fade-right">
    <img src={camera} alt="Allow AI to scan your face" className="diamond-image" />
    <button
      type="button"
      className="click-zone"
      onClick={() => navigate('/phasethree/StartPhaseThreeAnalysis')}

      aria-label="Scan Face"
            />
          </div>

          {/* Right: Gallery */}
           <div className="diamond gallery" data-aos="fade-left">
    <img src={gallery} alt="Allow AI access gallery" className="diamond-image" />
    <button
      type="button"
      className="click-zone"
      onClick={() => document.getElementById('galleryInput').click()}
      aria-label="Select from Gallery"
    />
          </div>
        </div>

        {/* Hidden file inputs */}
        <input
          id="cameraInput"
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageUpload}
          hidden
        />
        <input
          id="galleryInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          hidden
        />

        <div className="upload-section">
          {loading && <p>Analyzing image...</p>}
        </div>
      </div>

      <BackFooter to="../page3" />
      <ForwardFooter to="/phasetwo/preparingAnalysis" white={false} />
    </>
  );
}
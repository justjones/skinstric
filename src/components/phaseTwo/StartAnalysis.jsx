import React, { useState } from 'react';
import './PhaseTwoGlobal.css';
import './StartAnalysis.css';
import Header from '../Header';
import BackFooter from '../BackFooter';
import camera from '../../assets/camera.png';
import gallery from '../../assets/gallery.png';

export default function StartAnalysis() {
  const [imageData, setImageData] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(',')[1]; // remove data mime prefix
      setImageData(base64Image);
      await sendImageToAPI(base64Image);
    };
    reader.readAsDataURL(file);
  };

  const sendImageToAPI = async (base64Image) => {
    setLoading(true);
    try {
      const res = await fetch(
        'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64Image }),
        }
      );

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header rightButtonText={null} />
      <div className="start-analysis">
        <h1>To Start Analysis</h1>

        <div className="diamond-container">
          {/* Left: Camera */}
          <div className="diamond">
            <img src={camera} alt="Allow AI to scan your face" className="diamond-image" />
            <button
              type="button"
              className="click-zone"
              onClick={() => document.getElementById('cameraInput').click()}
              aria-label="Scan Face"
            />
          </div>

          {/* Right: Gallery */}
          <div className="diamond">
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
          {response && (
            <div className="results">
              <h3>Demographic Prediction</h3>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>

      <BackFooter />
    </>
  );
}


import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function getLoveDuration(startDate = '2025-02-28') {
  const start = new Date(startDate);
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return months;
}

function App() {
  const [started, setStarted] = useState(false);
  const [backendMessage, setBackendMessage] = useState('');
  const months = getLoveDuration('2025-02-28');

  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
      }, 300);
      return () => clearInterval(interval);
    }
  }, [started]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/message")
      .then(res => setBackendMessage(res.data.message))
      .catch(err => setBackendMessage("Erreur de connexion avec le serveur."));
  }, []);

  return (
    <div className="App">
      {!started ? (
        <button className="start-btn" onClick={() => setStarted(true)}>
          🎂 اضغط للاحتفال
        </button>
      ) : (
        <>
          <h1>🎉 Happy Love Month 🎉</h1>
          <p>مرّت {months} شهور منذ بداية حبّنا ❤️</p>
          <p className="api-message">{backendMessage}</p>
          <img src="/cake.png" className="cake" alt="cake" />
          <div className="message-box">
  <p>كل لحظة معاك هي أجمل من إلي قبلها 🌹</p>
  <p>يا أغلى من الدنيا وما فيها 💖</p>
  <p>نبقى نحبك اليوم، غدوة، ودوم ✨</p>
  <p>
    روحي، والله، وربّي يشهد على كل كلمة نقولها: أنا نحبك ونقدّرك برشة.  
    خليتني نعرف الحب معاك. الحمد لله تعدّت {months} على حبنا، وصرالنا برشة مواقف، باهين قبل الخايبين.
  </p>
  <p>
    أما والله كل يوم تزيد حبي ليك، وزاد عشقي ليك نور عيوني.  
    كان تشوف، محبتي ليك ناعتك روحي، ونعطيك قلبي، ونعطيك كل شيء.  
    نحبك وما نحبش نخسرك، ومستعد نضحي بكل شيء على خاطرك، خاطرك تستاهل كل خير.
  </p>
  <p>
    مستعد نكون ليك سند في الحياة وفي كل شيء، تلقاني ديما معاك في الصغيرة والكبيرة.  
    باش نكون ليك صاحب، بوك، خوك، راجلك، كل شيء يهم راحتيك.  
    روحي وفاهمتك، ونحس بيك بالأمان والقوة في كل موقف.
  </p>
  <p>
    وربّي يخليك ليّا، ويرزقنا دوام العشرة والمحبة، يا أجمل امرأة في الدنيا، يا روح قلبي ❤️.
  </p>
  <p>نحبك روحي ونموت عليك ❤️</p>
  <p>نحبك برشة برشة ❤️</p>
  <p>
    <em>وإذا تحب، نزيدلك كلمة أخرى:</em><br/>
    معاك الدنيا أحلى، والفرحة تكبر في قلبي كل ما نسمع صوتك أو نشوف ضحكتك.  
    وجودك هو العز والسند، وبلا بيك حياتي ناقصة وما تسواش.
  </p>
  <p style={{ fontStyle: 'italic', marginTop: '1em' }}>
    ماعادا يملّاو راسي خمر داليتيـن<br/>
    صوبي جمالك حتى متلي راسيـ<br/>
    كل نيسه أهذّف بلي سببـن<br/>
    إلا نتي، نتي حديثي
  </p>
</div>

        </>
      )}
    </div>
  );
}

export default App;

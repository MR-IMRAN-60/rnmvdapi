const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/video', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'video.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ status: false, message: 'Error loading video list' });
    }

    try {
      const json = JSON.parse(data);
      const videos = json.videos;
      const randomVideo = videos[Math.floor(Math.random() * videos.length)];
      res.json({ status: true, video: randomVideo, length: videos.length });
    } catch (e) {
      res.status(500).json({ status: false, message: 'Invalid JSON format' });
    }
  });
});

const serveCyberInterface = async (res) => {
  try {
    let html = await fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8');
    res.send(html);
  } catch (error) {
    res.status(500).send('🚨 Interface loading failed');
  }
};

// Routes
app.get('/', async (req, res) => {
  await serveCyberInterface(res);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

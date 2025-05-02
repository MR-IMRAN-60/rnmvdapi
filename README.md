

# 🎥 Random Video API *"Cinema in a Click"*

![GitHub](https://img.shields.io/github/license/MR-IMRAN-60/rnmvdapi) 
![API Status](https://img.shields.io/badge/API%20Status-🟢%20Online-brightgreen) 
![Version](https://img.shields.io/badge/Version-1.0.0-ff69b4)

**A cinematic surprise generator that serves random video metadata through a simple API endpoint.** Perfect for developers looking to add unpredictable media elements to their applications!

🌌 *"Where every API call is a box of chocolates..."*

## ✨ Features
- 🎲 True randomness powered by `Math.random()` magic
- 🚀 Lightning-fast response times
- 📦 Easy JSON configuration
- 🔒 Built-in error handling
- 🌐 RESTful design

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/MR-IMRAN-60/rnmvdapi.git
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure your videos**
```json
// data/video.json
{
  "videos": [
    {
      "url": "https://space.com/video1.mp4"
    },
    // Add more video objects here...
  ]
}
```

4. **Launch the server**
```bash
npm start
```

## 🎮 Usage Example

**Request:**
```bash
curl http://localhost:3000/video
```

**Response:**
```json
{
  "status": true,
  "video": {
    "title": "Mountain Adventure",
    "url": "https://nature.com/climb.mp4",
    "duration": 150
  }
}
```

## 📍 API Endpoints

| Endpoint | Method | Description                     |
|----------|--------|---------------------------------|
| `/video` | GET    | Returns a random video metadata |
| `/`      | GET    | Basic health check              |

## 🚨 Error Handling

The API returns user-friendly errors:
```json
{
  "status": false,
  "message": "Error loading video list"
}
```

Possible error scenarios:
- 📂 Missing video.json file
- 🚫 Invalid JSON format
- 🕳️ Empty videos array

## 📂 Project Structure
```
random-video-api/
├── data/
│   └── video.json        # Video metadata storage
├── index.js              # Main application logic
├── package.json          # Project dependencies
└── README.md             # You are here 😉
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin amazing-feature`)
5. Open a Pull Request

## 📜 License

MIT License - See [LICENSE](LICENSE) for details.

---

**Made with ❤️ by [IMRAN]**  
[![GitHub Stars](https://img.shields.io/github/stars/MR-IMRAN-60/rnmvdapi?style=social)](https://github.com/MR-IMRAN-60/rnmvdapi/stargazers)  
*"Because every developer deserves a little movie magic!"* 🍿
```

This README features:
1. Playful emoji-enhanced sections
2. Clear code blocks with syntax highlighting
3. Responsive badge system
4. ASCII directory tree
5. Error scenario visualization
6. Contributing guidelines
7. License information
8. Social media-ready footer
9. Friendly, conversational tone
10. Visual hierarchy through icons and spacing

You can customize the badges, add screenshots, or include additional API documentation as needed!

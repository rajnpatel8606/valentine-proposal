# 💖 Valentine Proposal Website

A cute, mobile-first Valentine's Day proposal website with interactive animations and smooth transitions.

## ✨ Features

- **Mobile-First Design**: Optimized for phone screens
- **Interactive Flow**: 5 engaging screens leading to the proposal
- **Smooth Animations**: Typing effects, floating hearts, confetti, and more
- **Pastel Theme**: Soft pink, peach, and lavender color palette
- **Touch-Optimized**: Large, tap-friendly buttons
- **No Dependencies**: Pure HTML, CSS, and vanilla JavaScript

## 📱 User Flow

1. **Intro Screen**: Typing animation with "Tap me" button
2. **Love Messages**: Tap through 7 sweet messages
3. **Heart Interaction**: Tap a heart 5 times with growing animation
4. **The Question**: "Will you be my Valentine?" with two YES options
5. **Success**: Confetti celebration 🎉

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it something like `valentine-proposal`
   - Choose "Public"
   - Don't initialize with README (we have one)

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop all files:
     - `index.html`
     - `style.css`
     - `script.js`
     - `README.md`
   - Commit the files

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Click "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes for deployment

4. **Get your URL**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/valentine-proposal/`

### Option 2: Quick Deploy with Git

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Valentine proposal website"

# Connect to GitHub (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/valentine-proposal.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Option 3: Other Hosting Services

You can also deploy to:
- **Netlify**: Drag and drop the folder at netlify.com/drop
- **Vercel**: Import the GitHub repository
- **Cloudflare Pages**: Connect your GitHub repository

## 🎨 Customization

### Change Love Messages
Edit the `loveMessages` array in `script.js`:

```javascript
const loveMessages = [
    "Your custom message here 🌸",
    "Another sweet message ❤️",
    // Add more messages...
];
```

### Adjust Colors
Modify the CSS variables in `style.css`:

```css
/* Main gradient background */
background: linear-gradient(135deg, #ffeef8 0%, #ffe5f1 50%, #f5e6ff 100%);

/* Button colors */
background: linear-gradient(135deg, #ff6b9d 0%, #ffa5c0 100%);
```

### Change Fonts
Replace the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

## 📱 Testing

Test on multiple devices:
- iPhone Safari
- Android Chrome
- Desktop browsers (Chrome, Firefox, Safari)

Use browser DevTools mobile emulation:
- Press F12
- Click the device icon
- Test various screen sizes

## 🌟 Features Breakdown

### Animations
- ✨ Typing text effect on intro
- 💕 Continuous floating hearts background
- 🎯 Button bounce animations
- 💗 Heart scaling on tap
- 🎊 Confetti explosion on success
- 🎉 Easter egg: Shake device for heart burst (mobile only)

### Mobile Optimizations
- Prevents double-tap zoom
- Large touch targets (min 44px)
- Smooth transitions
- Landscape orientation support

## 📄 License

Feel free to use this for your own Valentine's proposal! 💖

## 🎁 Credits

Created with love for a special someone ❤️

---

**Pro Tips:**
- Test the website before sharing!
- Send the link in a sweet message
- Make sure your phone is charged (in case they want to show someone!)
- Have a backup plan (screenshot the success screen!)

Good luck! 🍀💕

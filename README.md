# 24/7 Radio Paradise

A visually stunning and interactive web-based radio player with an animated background, featuring a selection of online radio stations.



![Screenshot 2024-09-23 103448](https://github.com/user-attachments/assets/1682683b-4a9f-40d9-98d8-a05dd5181b4d)

## Features
- Animated background using CSS-doodle for a captivating visual experience
- Three curated radio stations: Lofi Hip Hop, Classical, and Jazz
- Interactive circular buttons for intuitive station selection
- Dynamic image slideshow when a station is playing
- Responsive design for various screen sizes
- Stop button to pause playback and return to the main interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [CSS-doodle](https://css-doodle.com/) for background animation
- [Font Awesome](https://fontawesome.com/) for icons
- Google Fonts (Montserrat)

## Setup and Usage

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/24-7-radio-paradise.git
   ```

2. Navigate to the project directory:
   ```
   cd 24-7-radio-paradise
   ```

3. Open `index.html` in your preferred web browser.

4. Click on a radio station button to start playing. The background will change to a slideshow of random images.

5. Click the "Stop" button or the close icon (×) to stop playback and return to the main interface.

## Project Structure

- `index.html`: Main HTML file containing the structure of the web page
- `styles.css`: CSS file for styling the radio player and background
- `script.js`: JavaScript file handling radio station playback and image slideshow functionality

## Customization

### Adding New Radio Stations

To add new radio stations, edit the `stations` array in `script.js`:

```javascript
const stations = [
    { name: "New Station Name", url: "https://new-station-stream-url.com/stream" },
    // ... existing stations
];
```

### Changing Background Animation

The background animation is created using CSS-doodle. To modify it, edit the `<style>` section within the `<css-doodle>` element in `index.html`.

## Browser Compatibility

This radio player is compatible with modern web browsers, including:

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

## Known Issues

- Some radio streams may not play due to CORS (Cross-Origin Resource Sharing) restrictions. Consider using a CORS proxy for production use.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Radio streams provided by various online radio stations
- Images provided by [Lorem Picsum](https://picsum.photos/)
- Background animation powered by [CSS-doodle](https://css-doodle.com/)

## Contact

For any questions or concerns, please open an issue on this repository.

Enjoy your 24/7 Radio Paradise experience! 🎵🌈



![Screenshot 2024-09-23 103500](https://github.com/user-attachments/assets/397793d6-fbad-4309-b2ce-e1e4d757e01d)

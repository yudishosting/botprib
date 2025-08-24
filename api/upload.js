const fs = require('fs').promises;
const path = require('path');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { audio, lyric, photo } = req.files;
    const { artist, title } = req.body;

    const sanitizedArtist = artist.toLowerCase().replace(/[^a-z0-9]/g, '');
    const sanitizedTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Simpan file audio
    const audioPath = path.join(__dirname, '..', 'public', 'music', sanitizedArtist, `${sanitizedTitle}.mp3`);
    await fs.mkdir(path.dirname(audioPath), { recursive: true });
    await fs.writeFile(audioPath, audio.data);

    // Simpan file lirik (jika ada)
    let lyricPath = '';
    if (lyric) {
      lyricPath = path.join(__dirname, '..', 'public', 'lyrics', sanitizedArtist, `${sanitizedTitle}.js`);
      await fs.mkdir(path.dirname(lyricPath), { recursive: true });
      await fs.writeFile(lyricPath, lyric.data);
    }

    // Simpan foto artis (jika ada)
    let photoPath = '';
    if (photo) {
      photoPath = path.join(__dirname, '..', 'public', 'images', sanitizedArtist, `${sanitizedArtist}.jpg`);
      await fs.mkdir(path.dirname(photoPath), { recursive: true });
      await fs.writeFile(photoPath, photo.data);
    }

    res.status(200).json({ message: 'File berhasil diunggah', audioPath, lyricPath, photoPath });
  } catch (error) {
    console.error('Error saat upload:', error);
    res.status(500).json({ error: 'Gagal mengunggah file' });
  }
};
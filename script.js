// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn');

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider');
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay');

// App State
let songs = [
    { artist: "Kendis", title: "Ours to Keep", mp3: "music/random/keep.mp3", lyric: "lyrics/random/keep.js", artistPhoto: "/images/random/random.jpg", videoBgSrc: "animasi/naruto.mp4" },
    { artist: "Taylor Swift", title: "Message in a Bottle", mp3: "music/random/botle.mp3", lyric: "lyrics/random/botle.js", artistPhoto: "/images/random/random.jpg", videoBgSrc: "animasi/naruta.mp4" },
    { artist: "Matty Healy", title: "About You", mp3: "music/random/aboutyou.mp3", lyric: "lyrics/random/aboutyou.js", artistPhoto: "/images/random/random.jpg", videoBgSrc: "animasi/naruti.mp4" },
    { artist: "Dougy Mandagi", title: "Sweet Disposition", mp3: "music/random/disposition.mp3", lyric: "lyrics/random/disposition.js", artistPhoto: "/images/random/random.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "One Direction", title: "Where We Are", mp3: "music/random/weare.mp3", lyric: "lyrics/random/weare.js", artistPhoto: "/images/random/random.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Gigi Perez", title: "Sailor Song", mp3: "music/random/sailor.mp3", lyric: "lyrics/random/sailor.js", artistPhoto: "/images/random/random.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Sombr", title: "Back To Friend", mp3: "music/random/friends.mp3", lyric: "lyrics/random/friends.js", artistPhoto: "/images/random/random.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Nadhif Basalamah", title: "Bergema Sampai Selamanya", mp3: "music/randomm/bergema.mp3", lyric: "lyrics/randomm/bergema.js", artistPhoto: "/images/randomm/randomm.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Nadhif Basalamah", title: "Penjaga Hati", mp3: "music/randomm/penjagahati.mp3", lyric: "lyrics/randomm/penjagahati.js", artistPhoto: "/images/randomm/randomm.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Aris Lesmana", title: "Mangu", mp3: "music/randomm/mangu.mp3", lyric: "lyrics/randomm/mangu.js", artistPhoto: "/images/randomm/randomm.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Feby Putri", title: "Kembali Pulang", mp3: "music/randomm/pulang.mp3", lyric: "lyrics/randomm/pulang.js", artistPhoto: "/images/randomm/randomm.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Hindia", title: "Everything U Are", mp3: "music/hindia/everything.mp3", lyric: "lyrics/hindia/everything.js", artistPhoto: "/images/hindia/hindia.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Hindia", title: "Ramai Sepi Bersama", mp3: "music/hindia/bersama.mp3", lyric: "lyrics/hindia/bersama.js", artistPhoto: "/images/hindia/hindia.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Hindia", title: "Semua Lagu Cinta Terdengar Sama", mp3: "music/hindia/sama.mp3", lyric: "lyrics/hindia/sama.js", artistPhoto: "/images/hindia/hindia.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Hindia", title: "Rumah ke Rumah", mp3: "music/hindia/rumah.mp3", lyric: "lyrics/hindia/rumah.js", artistPhoto: "/images/hindia/hindia.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Hindia", title: "Evaluasi", mp3: "music/hindia/evaluasi.mp3", lyric: "lyrics/hindia/evaluasi.js", artistPhoto: "/images/hindia/hindia.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Hindia", title: "Cincin", mp3: "music/hindia/cincin.mp3", lyric: "lyrics/hindia/cincin.js", artistPhoto: "/images/hindia/hindia.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Hindia", title: "Kita Kesana", mp3: "music/hindia/kitakesana.mp3", lyric: "lyrics/hindia/kitakesana.js", artistPhoto: "/images/hindia/hindia.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Hindia", title: "Rasakan Nikmatnya Hidup", mp3: "music/hindia/nikmatnya.mp3", lyric: "lyrics/hindia/nikmatnya.js", artistPhoto: "/images/hindia/hindia.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Feast", title: "Feast", mp3: "music/nina/feast.mp3", lyric: "lyrics/nina/feast.js", artistPhoto: "/images/nina/nina.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Feast", title: "Tarot", mp3: "music/nina/tarot.mp3", lyric: "lyrics/nina/tarot.js", artistPhoto: "/images/nina/nina.jpg", videoBgSrc: "animasi/anime.mp4" },
    { artist: "Feast", title: "o,Tuan", mp3: "music/nina/otuan.mp3", lyric: "lyrics/nina/otuan.js", artistPhoto: "/images/nina/nina.jpg", videoBgSrc: "animasi/anime.mp4" }
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    console.log("Showing home page");
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active');
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    backgroundVideo.src = "";
    backgroundVideo.load();
    pauseTrack();
}

function showSongDetailPage(song) {
    console.log("Showing song detail page for:", song.title);
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.artistPhoto;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    backgroundVideo.src = "";
    backgroundVideo.load();
}

function showPlayerPage() {
    console.log("Showing player page");
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active');

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        console.log("Loading video background:", currentSong.videoBgSrc);
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load();
    }
}

// --- Home Page Logic ---
function renderSongList() {
    console.log("Rendering song list, total songs:", songs.length);
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${song.artistPhoto}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        listItem.addEventListener('click', () => {
            console.log("Song clicked:", song.title);
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage();
        });

        listItem.addEventListener('mouseenter', () => {
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                console.log("Hovering, loading video:", song.videoBgSrc);
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg');
            }
        });
        listItem.addEventListener('mouseleave', () => {
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause();
                backgroundVideo.src = "";
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg');
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
async function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>";
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    console.log("Loading song:", song.title, "MP3:", song.mp3);
    albumArtPlayer.src = song.artistPhoto;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    await renderLyrics(song.lyric);
    
    audioPlayer.src = song.mp3;
    audioPlayer.volume = playerVolumeSlider.value || 1.0; // Pastikan volume tidak 0
    console.log("Audio source set to:", audioPlayer.src);
    audioPlayer.onloadedmetadata = () => {
        console.log("Audio metadata loaded, duration:", audioPlayer.duration);
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
        // Coba putar audio setelah metadata dimuat
        if (isPlaying) {
            audioPlayer.play().catch(error => {
                console.error("Error playing audio after metadata:", error);
                isPlaying = false;
                updatePlayPauseIcon();
                alert("Gagal memutar lagu setelah memuat metadata. Periksa konsol.");
            });
        }
    };
    audioPlayer.onerror = () => {
        console.error("Error loading audio:", audioPlayer.error);
        alert("Gagal memuat file audio: " + song.mp3);
    };
    audioPlayer.load();
    console.log("Audio loaded, src:", audioPlayer.src);
    updatePlayPauseIcon();
}

// Fungsi untuk memuat dan merender lirik dari file eksternal
async function renderLyrics(lyricFile) {
    lyricsContainer.innerHTML = '<p>Loading lyrics...</p>';
    console.log("Loading lyrics from:", lyricFile);
    try {
        return new Promise((resolve, reject) => {
            const existingScript = document.getElementById('lyricScript');
            if (existingScript) {
                existingScript.remove();
            }

            const script = document.createElement('script');
            script.id = 'lyricScript';
            script.src = lyricFile;
            script.onload = () => {
                console.log("Lyrics script loaded");
                if (window.lyrics && Array.isArray(window.lyrics)) {
                    console.log("Lyrics loaded, total lines:", window.lyrics.length);
                    lyricsContainer.innerHTML = '';
                    if (window.lyrics.length === 0) {
                        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
                    } else {
                        window.lyrics.forEach(line => {
                            const span = document.createElement('span');
                            span.textContent = line.text;
                            span.setAttribute('data-time', line.time);
                            span.classList.add('lyric-line');
                            lyricsContainer.appendChild(span);
                        });
                    }
                    delete window.lyrics;
                    resolve();
                } else {
                    lyricsContainer.innerHTML = "<p>Format lirik tidak valid.</p>";
                    console.error("Invalid lyrics format");
                    reject(new Error("Invalid lyrics format"));
                }
            };
            script.onerror = () => {
                lyricsContainer.innerHTML = "<p>Gagal memuat lirik.</p>";
                console.error("Failed to load lyrics from:", lyricFile);
                reject(new Error(`Failed to load lyrics from ${lyricFile}`));
            };
            document.head.appendChild(script);
        });
    } catch (error) {
        console.error("Error loading lyrics:", error);
        lyricsContainer.innerHTML = "<p>Gagal memuat lirik.</p>";
    }
}

function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            console.log("No audio source, loading song at index:", currentSongIndex);
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.volume = playerVolumeSlider.value || 1.0; // Pastikan volume
    console.log("Attempting to play:", audioPlayer.src);
    audioPlayer.play().catch(error => {
        console.error("Error saat play:", error);
        isPlaying = false;
        updatePlayPauseIcon();
        alert("Gagal memutar lagu. Silakan klik tombol play lagi atau periksa konsol untuk detail.");
    });
    updatePlayPauseIcon();
}

function pauseTrack() {
    console.log("Pausing track");
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    console.log("Previous track, new index:", currentSongIndex);
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    console.log("Next track, new index:", currentSongIndex);
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        console.log("Next track, new index:", currentSongIndex);
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage();
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    console.log("Random track, new index:", currentSongIndex);
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        console.log("Time update, current time:", audioPlayer.currentTime); // Log waktu pemutaran
        
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            let nextLineTime = Infinity;
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
    console.log("Seek to:", audioPlayer.currentTime);
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
    console.log("Volume set to:", e.target.value);
});

playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    console.log("Playback speed set to:", audioPlayer.playbackRate);
});

playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle:", isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode:", repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});

playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    console.log("Audio ended");
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

backToHomeFromDetailBtn.addEventListener('click', showHomePage);
backToHomeBtn.addEventListener('click', showHomePage);

playFromDetailBtn.addEventListener('click', () => {
    console.log("Play from detail clicked");
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing...");
    console.log("Songs array length:", songs.length);
    console.log("audioPlayer:", audioPlayer);
    console.log("Initial volume:", playerVolumeSlider.value);

    renderSongList();
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value || 1.0;
    audioPlayer.playbackRate = playerSpeedSlider.value || 1.0;
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage();
    console.log("Initialization complete.");
}

init();
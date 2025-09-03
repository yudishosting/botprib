#!/data/data/com.termux/files/usr/bin/bash

PORT=8000
SERVER_COMMAND="python3 -m http.server $PORT --bind 127.0.0.1"

kill_port() {
    echo "🔍 Memeriksa port $PORT..."
    pid=$(lsof -ti:$PORT 2>/dev/null)

    if [ -n "$pid" ]; then
        echo "⚠️  Menemukan proses dengan PID $pid di port $PORT. Membunuh..."
        kill -9 $pid 2>/dev/null
        sleep 2
    else
        echo "✅ Tidak ada proses di port $PORT."
    fi

    if lsof -i :$PORT >/dev/null 2>&1; then
        echo "❌ Error: Port $PORT masih digunakan meski sudah di-kill."
        exit 1
    fi
}

kill_port

echo "🚀 Memulai server di http://127.0.0.1:$PORT/"
$SERVER_COMMAND
const express = require('express');
const app = express();
const PORT = 3000; // ポート番号は3000

// distディレクトリ内のファイルを返す
app.use(express.static(process.cwd()));

// サーバーを起動
app.listen(PORT, () => {
    console.log(`サーバーが${PORT}番ポートで起動しました。`);
});

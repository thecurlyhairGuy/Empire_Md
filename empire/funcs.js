//---------------------------------------------------------------------------
//           Empire_Md  
//---------------------------------------------------------------------------
//  @project_name : Empire_Md  
//  @author       : efeurhobobullish
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------------------------------------
const fs = require('fs');
const axios = require('axios');
const path = './config.env';
const FormData = require("form-data");



//Catbox image upload 
async function Catbox(filePath) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(filePath)) {
            return reject(new Error("❌ File not found."));
        }
        try {
            const form = new FormData();
            form.append("reqtype", "fileupload");
            form.append("fileToUpload", fs.createReadStream(filePath));

            axios({
                url: "https://catbox.moe/user/api.php",
                method: "POST",
                headers: { ...form.getHeaders() },
                data: form,
            })
            .then(response => {
                if (response.data.startsWith("https://")) {
                    resolve(response.data.trim());
                } else {
                    reject(new Error("❌ Upload failed."));
                }
            })
            .catch(err => {
                reject(new Error(String(err)));
            });
        } catch (err) {
            reject(new Error(String(err)));
        }
    });
}

// Fetch a buffer from a URL
const getBuffer = async (url, options) => {
    try {
        options = options || {};
        const res = await axios({
            method: 'get',
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        });
        return res.data;
    } catch (e) {
        console.error(e);
        return null;
    }
};

// Get admin participants from a group
const getGroupAdmins = (participants) => {
    const admins = [];
    for (let participant of participants) {
        if (participant.admin !== null) admins.push(participant.id);
    }
    return admins;
};

// Generate a random string with an extension
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
};

function monospace(input) {
    const customFont = {
        'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ',
        'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ',
        'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'Q', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ',
        'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ',
        'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ',
        'o': 'ᴏ', 'p': 'ᴘ', 'q': 'q', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ',
        'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6',
        '7': '7', '8': '8', '9': '9',
        ' ': ' '
    };
    return input.split('').map(char => customFont[char] || char).join('');
}

// Format large numbers with suffixes (e.g., K, M, B)
const h2k = (eco) => {
    const lyrik = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
    const ma = Math.floor(Math.log10(Math.abs(eco)) / 3);
    if (ma === 0) return eco.toString();
    const scale = Math.pow(10, ma * 3);
    const scaled = eco / scale;
    const formatted = scaled.toFixed(1).replace(/\.0$/, '');
    return formatted + lyrik[ma];
};

// Check if a string is a URL
const isUrl = (url) => {
    return url.match(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/
    );
};

// Convert a JavaScript object or array to a JSON string
const Json = (string) => {
    return JSON.stringify(string, null, 2);
};

// Function to calculate and format uptime
const runtime = (seconds) => {
    seconds = Math.floor(seconds);
    const d = Math.floor(seconds / (24 * 60 * 60));
    seconds %= 24 * 60 * 60;
    const h = Math.floor(seconds / (60 * 60));
    seconds %= 60 * 60;
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);

    if (d > 0) return `${d}d ${h}h ${m}m ${s}s`;
    if (h > 0) return `${h}h ${m}m ${s}s`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
};
// Delay execution for a specified time
const sleep = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

// Fetch JSON from a URL
const fetchJson = async (url, options) => {
    try {
        options = options || {};
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        });
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};


// Save config settings
const saveConfig = (key, value) => {
    let configData = fs.existsSync(path) ? fs.readFileSync(path, 'utf8').split('\n') : [];
    let found = false;

    configData = configData.map(line => {
        if (line.startsWith(`${key}=`)) {
            found = true;
            return `${key}=${value}`;
        }
        return line;
    });

    if (!found) configData.push(`${key}=${value}`);

    fs.writeFileSync(path, configData.join('\n'), 'utf8');

    // Reload updated environment variables
    require('dotenv').config({ path });
};

const dBinary = async (str) => {
    try {
        const newBin = str.split(" ");
        const binCode = newBin.map(bin => String.fromCharCode(parseInt(bin, 2)));
        return binCode.join("");
    } catch (e) {
        console.error(e);
        return null;
    }
};

const eBinary = async (str = "") => {
    try {
        return str.split("").map(char => char.charCodeAt(0).toString(2)).join(" ");
    } catch (e) {
        console.error(e);
        return null;
    }
};

const findMusic = async (buffer) => {
    const acr = new acrcloud({
        host: "identify-eu-west-1.acrcloud.com",
        access_key: "4dcedd3dc6d911b38c988b872afa7e0d",
        access_secret: "U0PEUg2y6yGVh6NwJra2fJkiE1R5sCfiT6COLXuk",
    });

    const res = await acr.identify(buffer);
    const { code, msg } = res.status;
    if (code !== 0) return msg;

    const { title, artists, album, genres, release_date, external_metadata } = res.metadata.music[0];
    const { youtube, spotify } = external_metadata;

    return {
        status: 200,
        title,
        artists: artists ? artists.map((v) => v.name).join(", ") : "",
        album: album?.name || "",
        genres: genres ? genres.map((v) => v.name).join(", ") : "",
        release_date,
        youtube: youtube ? `https://www.youtube.com/watch?v=${youtube.vid}` : "",
        spotify: spotify ? `https://open.spotify.com/track/${spotify.track.id}` : "",
    };
}; 


module.exports = { 
    getBuffer, 
    getGroupAdmins, 
    getRandom, 
    h2k, 
    isUrl, 
    Json, 
    runtime, 
    sleep, 
    fetchJson,
    saveConfig,
    Catbox,
    monospace,
    dBinary,
    eBinary,
    findMusic
};

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
        'A': '𝗮', 'B': '𝗯', 'C': '𝗰', 'D': '𝗱', 'E': '𝗲', 'F': '𝗳', 'G': '𝗴',
        'H': '𝗵', 'I': '𝗶', 'J': '𝗷', 'K': '𝗸', 'L': '𝗹', 'M': '𝗺', 'N': '𝗻',
        'O': '𝗼', 'P': '𝗽', 'Q': '𝗾', 'R': '𝗿', 'S': '𝘀', 'T': '𝘁', 'U': '𝘂',
        'V': '𝘃', 'W': '𝘄', 'X': '𝘅', 'Y': '𝘆', 'Z': '𝘇',
        'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴',
        'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻',
        'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂',
        'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
        '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲',
        '7': '𝟳', '8': '𝟴', '9': '𝟵',
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

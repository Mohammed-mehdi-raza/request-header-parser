const path = require('path');

const index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};

const whoami = (req, res) => {
    const ip = req.ip;
    const language = req.get('Accept-Language')
    const software = req.get('user-agent');
    res.json({
        "ipaddress": ip,
        "language": language,
        "software": software
    });
    console.log(ip);
    console.log(language);
    console.log(software);

};

module.exports = { index, whoami };
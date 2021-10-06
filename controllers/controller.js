const path = require('path');

const index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};

const whoami = (req, res) => {
    const ip = req.ip;
    const language = req.get('Accept-Language')
    const software = req.get('user-agent');
    res.json({
        "ipadress": ip,
        "language": language,
        "software": software
    });
};

module.exports = { index, whoami };
// api/trackIp.js

export default function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`IP Address: ${ip}`);
    console.log(`User Agent: ${req.headers['user-agent']}`);
    res.status(200).json({ message: 'IP tracked', ip });
}

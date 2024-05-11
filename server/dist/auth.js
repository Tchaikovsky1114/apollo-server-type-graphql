"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogin = exports.authMiddleware = void 0;
const express_jwt_1 = require("express-jwt");
const jsonwebtoken_1 = require("jsonwebtoken");
const users_js_1 = require("./db/users.js");
const secret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');
exports.authMiddleware = (0, express_jwt_1.expressjwt)({
    algorithms: ['HS256'],
    credentialsRequired: false,
    secret,
});
async function handleLogin(req, res) {
    const { email, password } = req.body;
    const user = await (0, users_js_1.getUserByEmail)(email);
    if (!user || user.password !== password) {
        res.sendStatus(401);
    }
    else {
        const claims = { sub: user.id, email: user.email };
        const token = jsonwebtoken_1.default.sign(claims, secret);
        res.json({ token });
    }
}
exports.handleLogin = handleLogin;

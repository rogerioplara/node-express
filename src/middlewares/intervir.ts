import { RequestHandler } from "express";

export const intervir: RequestHandler = (req, res, next) => {
    const logged = true;

    if (!logged) {
        res.status(403).json({ error: 'Parou no middleware' });
        return;
    }

    next();
}
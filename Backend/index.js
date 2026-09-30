import express from "express";
const router = express.Router();
import {getAllUsers, userPost, logIn} from './controllers/User.js'
import passport from "passport";
import './config/passport.js'


router.get("/users/v1", getAllUsers);
router.post("/users/v1", userPost);
router.post("/users/v1/login", logIn)


router.get(
    '/auth/google',
    passport.authenticate('google', {scope: ['profile', 'email']})
)
router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: `${process.env.CLIENT_URL}/sign-in` //remember to add an actual url redirect or client url
    }),
    (req,res) => res.redirect(`${process.env.CLIENT_URL}/home`) //remember to add an actual url redirect or client url
)
router.get('/auth/me', async (req, res) => {
    if (!req.isAuthenticated) return res.status(401).json({user: null, message: false})
    const user = req.user
    res.json({ user: user})
})
router.post('/auth/logout', async (req, res, next) => {
    req.logOut((err) => {
        if(err) return err
        req.session.destroy(() => res.sendStatus(204))
    })
})

export const indexRouter = router

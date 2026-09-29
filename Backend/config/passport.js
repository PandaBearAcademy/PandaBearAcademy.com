import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { db } from "../src/prisma/db";

passport.use(
    new GoogleStrategy({
     clientID: process.env.GOOGLE_CLIENT_ID,
     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     callbackURL: "/auth/google/callback",    
    },
    async (accessToken, refreshToken, profile, done) => {
        try{
                const email = profile.emails?.[0]?.value;

                const user = db.orm.public.User.where({ "googleId": profile.id}).first()

                if(!user && email){
                    user = await db.orm.public.User.where({ "email": email }).first()
                    
                    if(user){
                        user = await db.orm.public.User
                            .where({ "email": email })
                            .update({ "googleId": profile.googleId})
                        done(null, user)
                    }
                }

                if(!user){
                    user = await db.orm.public.User.create({
                        "email": profile.email,
                        "googleId": profile.googleId,
                        "name": profile.name,
                        "username": profile.displayName,
                    })
                }

                done(null, user)
            }catch(err){
                done(err)
            }
        }    
    )
)

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
    try{
        user = await db.orm.public.User.where({ "id": id}).first()
        done(null, user)
    } catch (err){
        done(err)
    }
})
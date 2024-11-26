import * as express from "express"

const Ping : express.RequestHandler= (req, res) => {
    const name = req.query.name
    res.status(200).send("pong " + name)
}

export default Ping